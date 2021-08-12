import React from 'react';
import { Link } from "react-router-dom";
import CardMovie from '../layout/CardMovie';

const MovieList = ({trending}) => {
    const movieList = trending.slice(0, 8).map((item, index) => {
        return (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <CardMovie item={item}/>
            </div>
        )
    });
    return (
        <div className="movie-trending">
            <div className="row mt-5">
                <div className="col-6 col-lg-6 col-md-6 col-sm-6 movie__title">
                    <p className="font-weight-bold">TRENDING MOVIES</p>
                </div>
                <div className="col-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center">
                    <Link to="/allmovies">
                        <i className="fa fa-chevron-circle-right"></i>
                    </Link>
                </div>
            </div>

            <div className="row mt-3">
                {movieList}
            </div>
        </div>
    );
}

export default MovieList;
