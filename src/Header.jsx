import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Drawing.svg';
const Header=()=>{
    return(
        <>
        <header class="mb-5">
            <img src={Logo} alt="" width="100%"/>
            <nav class="nav nav-tabs w-100 justify-content-sm-around">
                <li class="nav-item">
                    <NavLink to="/" class="nav-link">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/Products" class="nav-link">Products</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/Contactus" class="nav-link">Contact Us</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/Gallery" class="nav-link">Gallery</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/Query" class="nav-link">Query</NavLink>
                </li>
            </nav>
        </header>
        </>
    );
}
export default Header;