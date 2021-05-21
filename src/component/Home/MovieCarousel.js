import React from 'react';
import RBCarousel from "react-bootstrap-carousel";

const MovieCarousel = (props) => {
    let nowPlaying = props.movies;
    const movies = nowPlaying.map((item, index) => {
        return (
            <div key={index}>
                <div>
                    <img style={{ width: "100%" }} src={item.backPoster} alt={item.title} />
                </div>
                <div className="carousel-caption" style={{ textAlign: "center", fontSize: 25 }}>
                    {item.title}
                </div>
            </div>   
        )
    });

    return (
        <div className="row mt-2">
                <div className="col">
                    <RBCarousel
                        autoplay={true}
                        pauseOnVisibility={true}
                        slidersshowSpeed={5000}
                        version={4}
                        indicator={false}
                    >
                        {movies}
                    </RBCarousel>
                </div>
        </div>
    );
}

export default MovieCarousel;
