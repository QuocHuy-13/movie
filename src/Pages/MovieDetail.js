import React, { useState, useEffect } from 'react';
import { fetchCasts, fetchMovieDetail, fetchMoviesSimilar, fetchMovieVideo } from '../sevice/API';
import ReactPlayer from "react-player";
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import Header from '../component/layout/Header';
import Footer from "../component/layout/Footer";
import CardMovie from '../component/layout/CardMovie';
import Slider from "react-slick";
import queryString from 'query-string';
import { posterUrl, unavailable, youtubeUrl } from '../sevice/Config';

const MovieDetail = ({ match, location }) => {
    let settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }
    let params = match.params;
    let value = queryString.parse(location.search);
    let movie_type = value["sort"];
    let genre = [];
    const [detail, setDetail] = useState([]);
    const [Isopen, setIsOpen] = useState(false);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        window.scroll(0, 0);
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id, movie_type));
            setVideo(await fetchMovieVideo(params.id, movie_type));
            setCasts(await fetchCasts(params.id, movie_type));
            setSimilar(await fetchMoviesSimilar(params.id, movie_type));
        }
        fetchAPI();
    }, [movie_type, params.id]);
    if (detail) {
        genre = detail.genres;
    }
    let listgenres
    if (genre) {
        listgenres = genre.map((item, index) => {
            return (
                <li className="list-inline-item" key={index}>
                    <Link
                        to={`/moviebygenre/${item.id}`}
                        className="btn btn-outline-info"
                    >
                        {item.name}
                    </Link>
                </li>
            )
        });
    }

    const castsList = casts.map((item, index) => {
        return (
            <div className="card-wrapper" key={index}>
                <div className="card-item">
                    <img className="card-item-img" src={item.profileImg ? `${posterUrl}${item.profileImg}` : unavailable} alt={item.name} />
                    <div className="card-item-content">
                        <div className="card-item-title text-center">
                            {item.name}
                        </div>
                        <div className="card-item-infos justify-content-center">
                            <div className="item-info text-center">
                                <span>{item.character}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    const movieSimilar = similar.splice(0, 8).map((item, index) => {
        return (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <CardMovie item={item} />
            </div>
        )
    })

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="container">
                    {Isopen === true ?
                        <div className="modal show fade" style={{ display: "block" }}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{detail.title || detail.name}</h5>
                                        <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <ReactPlayer
                                            url={`${youtubeUrl}${video.key}`}
                                            playing
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ""
                    }
                    <div className="movie-detail" style={{ backgroundImage: `url(${posterUrl}${detail.backdrop_path})` }}>
                        <div className="movie-detail-body">
                            <div className="movie-detail-main">
                                <div className="movie-detail-posterWrapper">
                                    <div className="poster">
                                        <img src={`${posterUrl}${detail.poster_path}`} alt={detail.title} />
                                    </div>
                                </div>
                                <div className="movie-detail-contentWrapper">
                                    <div className="content-title">
                                        <h2>{detail.title || detail.name}</h2>
                                        <span>{detail.tagline}</span>
                                    </div>
                                    <div className="content-movieGenres">
                                        <ul className="list-inline">{listgenres}</ul>
                                    </div>
                                    <div className="content-date">
                                        <div className="facts">
                                            <i className="fa fa-calendar-o"></i>
                                            <span>{detail.release_date || detail.first_air_date}</span>
                                        </div>
                                        <div className="facts">
                                            <span>Run Time:</span>
                                            <span>{detail.runtime || detail.episode_run_time} min</span>
                                        </div>
                                        {detail.revenue ? <div className="facts">
                                            <span>Revenue:</span>
                                            <span>{detail.revenue}</span>
                                        </div> : null}
                                        {detail.number_of_episodes ? <div className="facts">
                                            <span>Episodes:</span>
                                            <span>{detail.number_of_episodes}</span>
                                        </div> : null}
                                        <div className="facts">
                                            <span>Homepage:</span>
                                            <span>
                                                <a href={detail.homepage} target="_blank" rel="noreferrer">{detail.homepage}</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content-rating">
                                        <StarRatings
                                            rating={detail.vote_average}
                                            starDimension="15px"
                                            starSpacing="2px"
                                            starRatedColor="#f4c10f"
                                            numberOfStars={10}
                                        />
                                        <span>({detail.vote_average})</span>
                                    </div>
                                    <div className="content-desc">
                                        <h3>Overview</h3>
                                        <p>{detail.overview}</p>
                                    </div>
                                    <div className="content-button">
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <i className="fa fa-play"></i>Watch Trailer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="mt-3">
                            <p style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>CASTS</p>
                        </div>
                        <Slider {...settings}>
                            {castsList}
                        </Slider>
                    </div>

                    <div className="row mt-3">
                        <div className="mt-3">
                            <p style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>SIMILAR</p>
                        </div>
                        {movieSimilar}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MovieDetail;
