import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import axios from 'axios';

const SearchMovie = () => {
    const [searchmovie, setSearchmovie] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    const fetchsearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=155ab208ecb73edcacb25bfa60e78b78&query=${searchmovie}&page=${page}`)
            console.log(data);
            const posterUrl = 'https://image.tmdb.org/t/p/original/'
            const modifieldData = data.results.map((movie) => ({
                id: movie.id,
                backPoster: posterUrl + movie.backdrop_path,
                popularity: movie.popularity,
                title: movie.title,
                poster: posterUrl + movie.poster_path,
                overview: movie.overview,
                rating: movie.vote_average,
            }))
            setSearchResults(modifieldData);
            setNumOfPages(data.total_pages);
        } catch (error) { }
    }


    useEffect(() => {
        fetchsearch(page)
    }, [page])
   
    const searchmovies = searchResults.map((item, index) => {
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
                                        disabled={page == numOfPages}
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
    );
}

export default SearchMovie;
