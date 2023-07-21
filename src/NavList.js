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

export default NavList