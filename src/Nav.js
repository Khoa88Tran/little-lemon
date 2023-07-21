import React from "react";
import NavList from "./NavList";
import "./styles/Nav.css"


const Nav = () => {
    return (
        <div className="navbar">
            <img src="/Logo.svg" alt="Little Lemon logo" className="navlogo"/>
            <nav className="nav">
                <ul>
                    {NavList().map((item, index) => (
                        <li key={index}>
                            <a href={item.url}> {item.text.toUpperCase()} </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <p className="nav-log-in">log in</p>
        </div>
    )
}

export default Nav;