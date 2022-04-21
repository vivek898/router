import React from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/product/p1'}>Product Data</NavLink> </li>
                <li><NavLink to={'/product/p2'}>Product idea</NavLink></li>
                <li> <NavLink to={'/product/p3'}>About</NavLink></li>
            </ul>
        </div>
    );
};

export default Product;