import axios from "axios" ;

const apiKey = "155ab208ecb73edcacb25bfa60e78b78" ;
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing` ;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const trendingmovie = `${url}/trending/all/day`;
const trendingmovieweek = `${url}/trending/all/week`;

export const fetchMovies = async () => {
    try {
        const {data} = await axios.get(nowPlayingUrl,{
            params: {
                api_key: apiKey,
                laguage: "en_US",
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: posterUrl + movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: posterUrl + movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
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
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((movie) => ({
            id: movie.id,
            backPoster: posterUrl + movie.backdrop_path,
            popularity: movie.popularity,
            title: movie.title,
            poster: posterUrl + movie.poster_path,
            overview: movie.overview,
            rating: movie.vote_average,
        }))
        return modifieldData;
    } catch (error) {}
}


//Fetch Person 
export const fetchPersons = async () => {
    try {
        const {data} = await axios.get(personUrl,{
            params: {
                api_key: apiKey,
            }
        })
        const modifieldData = data.results.map((person) => ({
            id: person['id'],
            popularity: person['popularity'],
            name: person['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + person['profile_path'],
            known: person['known_for_department']
        }))
        return modifieldData
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
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((toprate) => ({
            id: toprate.id,
            backPoster: posterUrl + toprate.backdrop_path,
            popularity: toprate.popularity,
            title: toprate.title,
            poster: posterUrl + toprate.poster_path,
            overview: toprate.overview,
            rating: toprate.vote_average,
        }))
        return modifieldData;
    } catch (error) {}
}

//fetch Detail Movie by ID
export const fetchMovieDetail = async (id) => {
    try {
        const  {data} = await axios.get(`${movieUrl}/${id}`,{
            params: {
                api_key: apiKey
            }
        })
        return data;
    } catch (error) {}
}


//Fetch video trailer
export const fetchMovieVideo = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/videos`,{
            params: {
                api_key: apiKey
            }
        })
        return data.results[0];
    } catch (error) {}
}

//Fetch Movie Credit
export const fetchCasts = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/credits`,{
            params: {
                api_key: apiKey
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.cast.map((cast) => ({
            id: cast.id,
            name: cast.name,
            profileImg: posterUrl + cast.profile_path,
            character: cast.character
        }))
        return modifieldData;
    } catch (error) {}
}

//Fetch Movie Similar 
export const fetchMoviesSimilar = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/similar`,{
            params: {
                api_key: apiKey
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((similar) => ({
            id: similar.id,
            backPoster: posterUrl + similar.backdrop_path,
            popularity: similar.popularity,
            title: similar.title,
            poster: posterUrl + similar.poster_path,
            overview: similar.overview,
            rating: similar.vote_average,
        }))
        return modifieldData;
    } catch (error) {}
}


//
export const fetchTrendingmovie = async (page) => {
    try {
        const {data} = await axios.get(trendingmovie,{
            params: {
                api_key: apiKey,
                page: page
            }
        }); const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((similar) => ({
            id: similar.id,
            backPoster: posterUrl + similar.backdrop_path,
            popularity: similar.popularity,
            title: similar.title,
            poster: posterUrl + similar.poster_path,
            overview: similar.overview,
            rating: similar.vote_average,
        }))
        console.log(modifieldData)
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
        }); const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifieldData = data.results.map((similar) => ({
            id: similar.id,
            backPoster: posterUrl + similar.backdrop_path,
            popularity: similar.popularity,
            title: similar.title,
            poster: posterUrl + similar.poster_path,
            overview: similar.overview,
            rating: similar.vote_average,
        }))
        console.log(modifieldData)
        return modifieldData;
    } catch (error) {
        
    }
}