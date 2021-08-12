import React, { useState, useEffect } from 'react';
import Header from '../component/layout/Header';
import axios from 'axios';
import CardMovie from '../component/layout/CardMovie';

const SearchMovie = () => {
    const [searchmovie, setSearchmovie] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    const fetchsearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=155ab208ecb73edcacb25bfa60e78b78&query=${searchmovie}&page=${page}`)
            const modifieldData = data.results.map((movie) => ({
                id: movie.id,
                popularity: movie.popularity,
                title: movie.title,
                poster: movie.poster_path,
                overview: movie.overview,
                rating: movie.vote_average,
                date: movie.release_date,
                movie_type: "movie"
            }))
            setSearchResults(modifieldData);
            setNumOfPages(data.total_pages);
        } catch (error) {}
    }


    useEffect(() => {
        window.scroll(0,0);
        fetchsearch()
    }, [page])

    const searchmovies = searchResults.map((item, index) => {
        return (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <CardMovie item={item}/>
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
        <>
            <Header />
            <div className="main-wrapper">
                <div className="container">
                    <div className="d-flex">
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Search"
                            name="search"
                            value={searchmovie}
                            onChange={(e) => setSearchmovie(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                            onClick={fetchsearch}
                        >
                            Search
                        </button>
                    </div>


                    <div className="row mt-3">
                        {searchmovies}
                    </div>

                    {numOfPages > 1 ?
                        <div>
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item mx-2">
                                        <button
                                            type="button"
                                            className="btn btn-outline-info"
                                            disabled={page === 1}
                                            onClick={prevClick}
                                        >
                                            Prev
                                        </button>
                                    </li>
                                    <li className="page-item mx-2">
                                        <button
                                            className="btn btn-outline-info"
                                            disabled={page === numOfPages}
                                            onClick={nextclick}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </>
    );
}

export default SearchMovie;
