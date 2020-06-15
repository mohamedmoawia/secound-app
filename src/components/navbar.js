import React from 'react'
import {Link ,NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="navbar-brand">Logo</span>
                <ul className="navbar-nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar