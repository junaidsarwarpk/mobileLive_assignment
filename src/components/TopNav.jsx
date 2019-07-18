import React from "react"; 
import { Link } from "react-router-dom";

 const Nav = () => <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link className="nav-link" to="/">Basket Page</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
    </ul>

export default Nav;