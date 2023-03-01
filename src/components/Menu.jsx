import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const location = useLocation();

    console.log(location);
    return (
        <ul className="nav justify-content-center">
            <li className={"nav-item " + (location.pathname === '/' ? "active" : "")}>
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={"nav-item " + (location.pathname === '/about' ? "active" : "")}>
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className={"nav-item " + (location.pathname === '/services' ? "active" : "")}>
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className={"nav-item " + (location.pathname === '/contact' ? "active" : "")}>
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Menu