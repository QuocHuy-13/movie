import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { posterUrl, noPicture } from '../../sevice/Config';

const MovieCarousel = (props) => {
  let nowPlaying = props.movies;
  let settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  const movies = nowPlaying.map((item, index) => {
    return (
      <div className="card-wrapper" key={index}>
        <Link to={{
          pathname: `/movie/${item.id}`,
          search: `?sort=${item.movie_type}`,
        }}>
          <div className="card-item">
            <img className="card-item-img" src={item.poster ? `${posterUrl}${item.poster}` : noPicture} alt={item.title} />
            <div className="card-item-content">
              <div className="card-item-title">
                {item.title}
              </div>
              <div className="card-item-infos">
                <div className="item-info">
                  <i className="fa fa-calendar-o"></i>
                  <span>{item.date}</span>
                </div>
                <div className="item-info">
                  <i className="fa fa-star"></i>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  });

  return (
    <div className="movie-carousel">
      <div className="row">
        <div className="col">
          <Slider {...settings}>
            {movies}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
