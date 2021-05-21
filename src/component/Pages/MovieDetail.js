import React, { useState, useEffect } from 'react';
import { fetchCasts, fetchMovieDetail, fetchMoviesSimilar, fetchMovieVideo } from '../../sevice/API';
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import StarRatings from 'react-star-ratings';
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import Header from '../layout/Header';


const MovieDetail = ({ match }) => {
    let params = match.params;
    let genre = [];
    console.log(params.id);
    const [detail, setDetail] = useState([]);
    const [Isopen, setIsOpen] = useState(false);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similar, setSimilar] = useState([]);
    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieDetail(params.id));
            setVideo(await fetchMovieVideo(params.id));
            setCasts(await fetchCasts(params.id));
            setSimilar(await fetchMoviesSimilar(params.id));
        }
        fetchAPI();
    }, [params.id]);

    genre = detail.genres;
    let listgenres
    if (genre) {
        listgenres = genre.map((item, index) => {
            return (
                <li className="list-inline-item" key={index}>
                    <button
                        className="btn btn-outline-info"
                    >
                        {item.name}
                    </button>
                </li>
            )
        });
    }


    const MoviePlay = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ color: "#000000", fontWeight: "bolder" }}
                    >
                        {detail.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#000000" }}>
                    <ReactPlayer
                        url={youtubeUrl + video.key}
                        playing
                        width="100%"
                    />
                </Modal.Body>
            </Modal>
        );
    };

    const castsList = casts.splice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <img className="img-fluid rounded-circle mx-auto d-block" src={item.profileImg} alt={item.name} width="200" height="300" />
                <p className="font-weight-bold text-center">{item.name}</p>
                <p className="font-weight-light text-center" style={{ color: "#5a606b" }}>{item.character}</p>
            </div>
        )
    })

    const movieSimilar = similar.splice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
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
    })

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row mt-2">
                    <MoviePlay
                        show={Isopen}
                        onHide={() => setIsOpen(false)}
                    >
                    </MoviePlay>
                    <div className="col text-center">
                        <div style={{ position: "relative" }}>
                            <div>
                                <img
                                    style={{ width: "100%" }}
                                    src={`${posterUrl}/${detail.backdrop_path}`}
                                    alt={detail.title} />
                            </div>
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}>
                                <i
                                    onClick={() => { setIsOpen(true) }}
                                    style={{ fontSize: 85, color: "#FFFF00", cursor: "pointer" }}
                                    class="fa fa-play-circle-o"
                                ></i>
                            </div>
                            <div className="carousel-caption" style={{ textAlign: "center", fontSize: 25 }}>
                                {detail.title}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <p className="font-weight-bold" style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>Genre</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <ul className="list-inline">{listgenres}</ul>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <StarRatings
                            rating={detail.vote_average}
                            starDimension="20px"
                            starSpacing="2px"
                            starRatedColor="#f4c10f"
                            numberOfStars={10}
                        />
                    </div>
                    <div className="mt-3">
                        <p style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>OVERVIEW</p>
                        {detail.overview}
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="mt-3">
                        <p style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>CASTS</p>
                    </div>
                    {castsList}
                </div>

                <div className="row mt-3">
                    <div className="mt-3">
                        <p style={{ color: "#5a606b", fontSize: "30px", fontWeight: "600" }}>SIMILAR</p>
                    </div>
                    {movieSimilar}
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <p style={{ color: "#5a606b", fontWeight: "600" }}>RELEASE DATE</p>
                        <p style={{ color: "#f4c10f" }}>{detail.release_date}</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{ color: "#5a606b", fontWeight: "600" }}>RUN TIME</p>
                        <p style={{ color: "#f4c10f" }}>{detail.runtime} min</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{ color: "#5a606b", fontWeight: "600" }}>BUDGET</p>
                        <p style={{ color: "#f4c10f" }}>{detail.budget}</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{ color: "#5a606b", fontWeight: "600" }}>HOMEPAGE</p>
                        <p style={{ color: "#f4c10f" }}>{detail.homepage}</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MovieDetail;
