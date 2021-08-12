import React from 'react';
import { useState, useEffect } from 'react';
import { fetchGenre } from '../../sevice/API';
import { NavLink } from 'react-router-dom';
const DropMenuGenres = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setGenres(await fetchGenre());
        }
        fetchAPI();
    }, []);
    const genrelist = genres.map((item, index) => {
        return (
            <li className="item-genres" key={index}>
                <NavLink className="" exact to={`/genre/${item.id}`}>
                    {item.name}
                </NavLink>
            </li>
        )
    });
    return (
        <div className="drop-menu">
            <ul className="dropdown-menu-genres">
                {genrelist}
            </ul>
        </div>
    );
}

export default DropMenuGenres;
