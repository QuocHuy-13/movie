import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchPersons, fetchTopRates } from '../../sevice/API';
import MovieCarousel from './MovieCarousel';
import TrendingPersons from './TrendingPersons';
import TopRate from './Toprate';
import Footer from '../layout/Footer';
import MovieList from './MovieList';
import Header from '../layout/Header';


const Home = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [persons, setPersons] = useState([]);
    const [topRate, setTopRate] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setPersons(await fetchPersons());
            setTopRate(await fetchTopRates());
        }
        fetchAPI();
    }, []);

    return (
        <div>
            <Header />
            <div style={{ position: "relative", marginTop: "65px" }} className="container">
                <MovieCarousel movies={nowPlaying} />

                <MovieList nowPlaying={nowPlaying} />

                <TrendingPersons persons={persons} />

                <TopRate topRate={topRate} />

                <Footer />
            </div>
        </div>
    );
}

export default Home;


