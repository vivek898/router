import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to={'/welcome'}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={'/product'}>Product</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;