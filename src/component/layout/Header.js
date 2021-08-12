import React from 'react';
import { NavLink } from 'react-router-dom';
import DropMenuGenres from './DropMenuGenres';
const Header = () => {

    return (
        <header className="movie-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            QH Media
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item ">
                                    <NavLink exact className="nav-link text-uppercase" to="/">
                                        Home&nbsp;
                                        <i className="fa fa-home"></i>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" exact to="/allmovies">
                                        FULL MOVIES
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" exact to="/moviebygenre">
                                        MOVIES BY GENRES
                                    </NavLink>
                                    <DropMenuGenres/>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" exact to="/alltoprates">
                                        TOP MOVIES
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" exact to="/tvseries">
                                        TV SERIES
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" exact to="/searchmovies">
                                        SEARCH
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;

