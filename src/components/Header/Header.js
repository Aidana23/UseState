import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h2>Header</h2>

            <NavLink className= 'counter'  to='/' >Counter-Main</NavLink>
            <NavLink className = 'login' to='/login' >Login</NavLink>
            <NavLink className = 'modal' to='/modal'>Modal</NavLink>
            <NavLink className = 'todo' to='/todo'>Todo</NavLink>
            <NavLink className = 'giphy' to='/giphy'>Giphy</NavLink>
        </>
    );
};

export default Header;