import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/home" activeClassName="selected">Home</NavLink>
            <NavLink to="/about" activeClassName="selected">About</NavLink>
            <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
            <NavLink to="/friends" activeClassName="selected">Friends</NavLink>
            <NavLink to="/todos" activeClassName="selected">Todos</NavLink>
        </div>
    );
};

export default Header;