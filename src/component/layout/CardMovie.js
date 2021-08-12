import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { posterUrl, unavailable } from '../../sevice/Config';

const CardMovie = ({item}) => {
    return (
        <div className="card-wrapper-movieList">
            <Link to={{
                pathname:`/movie/${item.id}`,
                search: `?sort=${item.movie_type}`,
            }}>
                <div className="card-movieList">
                    <div className="card-movieList-poster">
                        <img className="card-movieList__img" src={item.poster ? `${posterUrl}${item.poster}` : unavailable} alt={item.title} />
                    </div>
                    <div className="card-movieList__content">
                        <h2>{item.title || item.name}</h2>
                        <div className="card-movieList-date">
                            <i className="fa fa-calendar-o"></i>
                            <span>{item.date||item.first_air_date}</span>
                        </div>
                        <div className="card-movieList-rating">
                            <StarRatings
                                rating={item.rating}
                                starDimension="15px"
                                starSpacing="2px"
                                starRatedColor="#f4c10f"
                                numberOfStars={10}
                            />
                            <span>({item.rating})</span>
                        </div>
                        <div className="card-movieList-infos">
                            <p>{item.overview}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardMovie;
