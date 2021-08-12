import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchTopRates, fetchTrendingmovieWeek, fetchTVserier } from '../../sevice/API';
import MovieCarousel from './MovieCarousel';
import MovieList from './MovieList';
import TopRate from './Toprate';
import TVSeries from './TVSeries'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Home = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRate, setTopRate] = useState([]);
    const [trending, setTrending] = useState([]);
    const [tvSeries, setTVSeries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setTrending(await fetchTrendingmovieWeek());
            setTopRate(await fetchTopRates());
            setTVSeries(await fetchTVserier());
        }
        fetchAPI();
    }, []);

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="container">
                    <MovieCarousel movies={nowPlaying} />

                    <MovieList trending={trending} />

                    <TVSeries tvseries = {tvSeries} />

                    <TopRate topRate={topRate} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;


