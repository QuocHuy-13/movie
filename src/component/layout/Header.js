import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, backgroundColor: "#0c2738", zIndex: "1" }} className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto ">
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-white text-uppercase" to="/">
                                Home&nbsp;
                                <i className="fa fa-home"></i>
                            </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-white text-uppercase" to="/allmovies">
                                FULL MOVIES
                                </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-white text-uppercase" to="/alltoprates">
                                TOP MOVIES
                                </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-white text-uppercase" to="/moviebygenre">
                                MOVIES BY GENRES
                                </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link text-white text-uppercase" to="/searchmovies">
                                SEARCH
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
