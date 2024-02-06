import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css"


const TopNav = ({taskCount,...props}) => {

    return (
        <nav className="navBar">
            <div className="nav-wrapper">
                <NavLink to="/" className="logo">To Do List</NavLink>
                <ul>
                    <li><span>Tasks: &nbsp;{taskCount}</span></li>
                    <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}




export default TopNav;