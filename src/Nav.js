import React from "react";
import NavList from "./NavList";
import "./styles/Nav.css"
import { useNavigate } from "react-router-dom";



const Nav = () => {
    const navigate = useNavigate(); 

    const handleHome= () => {
        navigate("/"); 
  };

    return (
        <div className="navbar">
            <a href="/" onClick={handleHome}>
                <img src="/Logo.svg" alt="Little Lemon logo" className="navlogo"/>
            </a>
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