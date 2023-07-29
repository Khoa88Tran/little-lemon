import React from "react";

const NavList = () => {
    const items = [
        {text: "home", url: "/"},
        {text: "reservations", url: "/reservations"},
        {text: "menu", url: "/menu"},
        {text: "online order", url: "/online-order"},
        {text: "about", url: "/about"},
    ]
    return items;
}

export default NavList