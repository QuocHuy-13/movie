import React, { useState, useEffect } from 'react';
import Header from '../component/layout/Header';
import { fetchMoviePopular, fetchGenre } from '../sevice/API';
import Footer from '../component/layout/Footer';
import { Link } from 'react-router-dom';
import CardMovie from '../component/layout/CardMovie';
import SkeletonWrapper from '../component/layout/SkeletonWrapper';

const MovieBygenre = () => {
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scroll(0, 0);
        setIsLoading(false);
        const fetchAPI = async () => {
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMoviePopular(page));
            setIsLoading(true);
        }
        fetchAPI();
    }, [page]);

    const genrelist = genres.map((item, index) => {
        return (
            <li className="list-inline-item" key={index}>
                <Link type="button" className="btn btn-outline-info" to={`/genre/${item.id}`}>
                    {item.name}
                </Link>
            </li>
        )
    });

    const movieList = movieByGenre.map((item, index) => {
        return (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <CardMovie item={item} />
            </div>
        )
    });

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <ul className="list-inline">
                                {genrelist}
                            </ul>
                        </div>
                    </div>

                    {isLoading ?   
                        <div className="row mt-3">
                            {movieList}
                        </div>
                        : <SkeletonWrapper/>
                    }

                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item mx-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                >
                                    Prev
                                </button>
                            </li>
                            <li className="page-item mx-2">
                                <button
                                    className="btn btn-outline-info"
                                    disabled={page === 50}
                                    onClick={() => setPage(page + 1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default MovieBygenre;