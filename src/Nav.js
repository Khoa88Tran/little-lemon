import React from "react";

const NavList = () => {
    const items = [
        {text: "home", url: "/home"},
        {text: "about", url: "/about"},
        {text: "menu", url: "/menu"},
        {text: "reservations", url: "/home"},
        {text: "online order", url: "/online-order"},
    ]
    return items;
}
const Nav = () => {
    return (
        <>
            <img src="/Logo.svg" alt="Little Lemon logo" />
            <nav>
                <ul>
                    {NavList().map((item, index) => (
                        <li key={index}>
                            <a href={item.url}> {item.text.toUpperCase()} </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </> 
    )
}

export default Nav;