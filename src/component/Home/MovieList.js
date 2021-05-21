import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

const MovieList = (props) => {
    let movie = props.nowPlaying;
    const movieList = movie.slice(0, 4).map((item, index) => {
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
    });
    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                    <p className="font-weight-bold" style={{ color: "#5a606b",fontSize:"30px" }}>TRENDING MOVIES</p>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <div className="float-end">
                        <Link to="/movietrending">
                            <i className="fa fa-chevron-circle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {movieList}
            </div>
        </div>
    );
}

export default MovieList;
