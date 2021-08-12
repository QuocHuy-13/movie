import axios from "axios" ;

const apiKey = "155ab208ecb73edcacb25bfa60e78b78" ;
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing` ;
const topratedUrl = `${url}/movie/top_rated`;
const moviesUrl = `${url}/discover/movie`;
const allmovie = `${url}/trending/all/day`;
const trendingmovieweek = `${url}/trending/all/week`;
const tvseries = `${url}/discover/tv`;
const genreUrl = `${url}/genre/movie/list`;
const popular = `${url}/movie/popular`;

export const fetchMovies = async () => {
    try {
        const {data} = await axios.get(nowPlayingUrl,{
            params: {
                api_key: apiKey,
                laguage: "en_US",
                page: 1
            }
        })
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
            date: movie.release_date,
            movie_type: "movie"
        }))
        return modifieldData;
    } catch (error) {} 
}

// Fetch Genre
export const fetchGenre = async () => {
    try {
        const {data} =await axios.get(genreUrl,{
            params: {
                 api_key: apiKey,
                 laguage: 'en_us',
                 page: 1
            }
        })
        const modifieldData = data.genres.map((genres) => ({
            id: genres.id,
            name: genres.name
        }))
        return modifieldData;
    } catch (error) {}
}

//Fetch Movie By Genre
export const fetchMovieByGenre = async (genre_id,page) => {
    try {
        const {data} = await axios.get(moviesUrl,{
            params: {
                api_key: apiKey,
                laguage: 'en_us',
                page: page,
                with_genres: genre_id
           }
        })
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
            date: movie.release_date,
            movie_type: "movie"
        }))
        return modifieldData;
    } catch (error) {}
}

//Fetch Movie Top Rating
export const fetchTopRates = async (page) => {
    try {
        const {data} = await axios.get(topratedUrl,{
            params: {
                api_key: apiKey,
                page: page
            }
        })
        const modifieldData = data.results.map((toprate) => ({
            id: toprate.id,
            backPoster: toprate.backdrop_path,
            popularity: toprate.popularity,
            title: toprate.title,
            poster: toprate.poster_path,
            overview: toprate.overview,
            rating: toprate.vote_average,
            date:toprate.release_date,
            movie_type: "movie"
        }))
        return modifieldData;
    } catch (error) {}
}

//fetch Detail Movie by ID
export const fetchMovieDetail = async (id,movie_type) => {
    try {
        const  {data} = await axios.get(`${url}/${movie_type}/${id}`,{
            params: {
                api_key: apiKey
            }
        })
        return data;
    } catch (error) {}
}


//Fetch video trailer
export const fetchMovieVideo = async (id,movie_type) => {
    try {
        const {data} = await axios.get(`${url}/${movie_type}/${id}/videos`,{
            params: {
                api_key: apiKey
            }
        })
        return data.results[0];
    } catch (error) {}
}

//Fetch Movie Credit
export const fetchCasts = async (id,movie_type) => {
    try {
        const {data} = await axios.get(`${url}/${movie_type}/${id}/credits`,{
            params: {
                api_key: apiKey
            }
        });
        const modifieldData = data.cast.map((cast) => ({
            id: cast.id,
            name: cast.name,
            profileImg: cast.profile_path,
            character: cast.character
        }))
        return modifieldData;
    } catch (error) {}
}

//Fetch Movie Similar 
export const fetchMoviesSimilar = async (id,movie_type) => {
    try {
        const {data} = await axios.get(`${url}/${movie_type}/${id}/similar`,{
            params: {
                api_key: apiKey
            }
        });
        
        const modifieldData = data.results.map((similar) => ({
            id: similar.id,
            popularity: similar.popularity,
            title: similar.title || similar.name,
            poster: similar.poster_path,
            overview: similar.overview,
            rating: similar.vote_average,
            date: similar.release_date || similar.first_air_date,
            movie_type: `${movie_type}`
        }))
        return modifieldData;
    } catch (error) {}
}


//
export const fetchAllmovie = async (page) => {
    try {
        const {data} = await axios.get(allmovie,{
            params: {
                api_key: apiKey,
                page: page
            }
        }); 
        
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
            date: movie.release_date,
            movie_type : movie.media_type
        }))
        return modifieldData;
    } catch (error) {
        
    }
}

//
export const fetchTrendingmovieWeek = async (page) => {
    try {
        const {data} = await axios.get(trendingmovieweek,{
            params: {
                api_key: apiKey,
                page: page
            }
        });
        const modifieldData = data.results.map((similar) => ({
            id: similar.id,
            backPoster: similar.backdrop_path,
            popularity: similar.popularity,
            title: similar.title,
            poster: similar.poster_path,
            overview: similar.overview,
            rating: similar.vote_average,
            date: similar.release_date,
            movie_type : similar.media_type
        }))
        return modifieldData;
    } catch (error) {
        
    }
}

// 
export const fetchTVserier = async (page) => {
    try {
        const {data} = await axios.get(tvseries,{
            params: {
                api_key: apiKey,
                page: page
            }
        }); 
        const modifieldData = data.results.map((tv) => ({
            id: tv.id,
            backPoster: tv.backdrop_path,
            popularity: tv.popularity,
            title: tv.name,
            poster: tv.poster_path,
            overview: tv.overview,
            rating: tv.vote_average,
            date: tv.first_air_date,
            movie_type: "tv"
        }))
        return modifieldData;
    } catch (error) {
        
    }
}

//popular

export const fetchMoviePopular = async (page) => {
    try {
        const {data} = await axios.get(popular,{
            params: {
                api_key: apiKey,
                page: page
            }
        }); 
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
            date: movie.release_date,
            movie_type: "movie"
        }))
        return modifieldData;
    } catch (error) {
        
    }
}
