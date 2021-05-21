import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./component/Home/Home";
import AllMovie from "./component/Pages/AllMovie";
import MovieDetail from "./component/Pages/MovieDetail";
import AllTopRateMovie from "./component/Pages/AllTopRateMovie";
import SearchMovie from './component/Pages/SearchMovie';
import MovieBygenre from './component/Pages/MovieByGenre';
import AllMovieTrending from "./component/Pages/AllMovieTrending";

function App() {
  return (
    <div>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/movie/:id" component={MovieDetail}/>
            <Route path="/allmovies" component={AllMovie}/>
            <Route path="/alltoprates" component={AllTopRateMovie}/>
            <Route path="/searchmovies" component={SearchMovie}/>
            <Route path="/moviebygenre" component={MovieBygenre}/>
            <Route path="/movietrending" component={AllMovieTrending}/>
        </Switch>
    </div>
  );
}

export default App;
