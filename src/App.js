import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./component/Home/Home";
import AllMovie from "./Pages/AllMovie";
import MovieDetail from "./Pages/MovieDetail";
import AllTopRateMovie from "./Pages/AllTopRateMovie";
import SearchMovie from './Pages/SearchMovie';
import MovieBygenre from './Pages/MovieByGenre';
import TVSeries from "./Pages/TVSeries";
import AllMovieByGrenres from "./Pages/AllMovieByGenres";
function App() {
  return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/allmovies" component={AllMovie}/>
            <Route path="/alltoprates" component={AllTopRateMovie}/>
            <Route path="/moviebygenre" component={AllMovieByGrenres}/>
            <Route path="/genre/:id" component={MovieBygenre}/>
            <Route path="/searchmovies" component={SearchMovie}/>
            <Route path="/movie/:id" component={MovieDetail}/>
            <Route path="/tvseries" component={TVSeries}/>
        </Switch>
  );
}

export default App;
