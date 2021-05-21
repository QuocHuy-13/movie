import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import { fetchTrendingmovie } from '../../sevice/API';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Footer from '../layout/Footer';

const MovieSearch = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setContent(await fetchTrendingmovie(page));
        }
        fetchAPI();
    }, [page])

    const allmovies = content.map((item, index) => {
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
                <div className="row mt-5">
                    <div className="col">
                        <p className="font-weight-bold" style={{ color: "#5a606b", textAlign:"center", fontSize:"40px" }}>ALL MOVIES</p>
                    </div>
                </div>
                <div className="row mt-3">
                    {allmovies}
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

export default MovieSearch;