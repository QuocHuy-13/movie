import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import { fetchMovieByGenre, fetchGenre } from '../../sevice/API';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Footer from '../layout/Footer';

const MovieBygenre = () => {
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [selectGenre, setSelectGenre] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAPI = async () => {
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMovieByGenre(selectGenre,page));
        }
        fetchAPI();
    }, [selectGenre,page]);

    const handleGenreClick = async (genre_id) => {
        setSelectGenre(genre_id);
        if(page>1){
            setPage(1)
            setMovieByGenre(await fetchMovieByGenre(selectGenre,page));
        }
    }

    const genrelist = genres.map((item, index) => {
        return (
            <li className="list-inline-item">
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handleGenreClick(item.id)
                    }}
                >
                    {item.name}
                </button>
            </li>
        )
    });

    const movieList = movieByGenre.map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6 mb-5" key={index}>
                <div className="card">
                    <Link to={`/movie/${item.id}`}>
                        <img className="card-img-top" src={item.poster} alt={item.title} />
                    </Link>
                </div>
                <div className="mt-3">
                    <p>{item.title}</p>
                    <p>Rate: {item.rating}</p>
                    <StarRatings
                        rating={item.rating}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="#f4c10f"
                        numberOfStars={10}
                    />
                </div>
            </div>
        )
    });

    function prevClick() {
        setPage(page - 1);
        window.scroll(0, 0);
    }

    function nextclick() {
        setPage(page + 1);
        window.scroll(0, 0);
    }

    return (
        <div>
            <Header />
            <div style={{ position: "relative", marginTop: "60px" }} className="container">
                <div className="row mt-3">
                    <div className="col">
                        <ul className="list-inline">
                            {genrelist}
                        </ul>
                    </div>
                </div>

                <div className="row mt-3">
                    {movieList}
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item mx-2">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                disabled={page == 1}
                                onClick={prevClick}
                            >
                                Prev
                        </button>
                        </li>
                        <li className="page-item mx-2">
                            <button
                                className="btn btn-outline-primary"
                                disabled={page == 50}
                                onClick={nextclick}
                            >
                                Next
                        </button>
                        </li>
                    </ul>
                </nav>
                <Footer />
            </div>
        </div>
    );
}

export default MovieBygenre;
