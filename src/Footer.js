import React from "react";

const FooterList = () => {
    const items = [
        {text: "home", url: "/home"},
        {text: "about", url: "/about"},
        {text: "menu", url: "/menu"},
        {text: "reservations", url: "/home"},
        {text: "online order", url: "/online-order"},
    ]
    return items;
}
const Footer = () => {
    return (
        <>
            <nav>
                <img src="UXUI/little-lemon-kit/Logo2.svg" alt="Little Lemon logo" />
                <ul>
                    {FooterList().map((item, index) => (
                        <li key={index}>
                            <a href={item.url}> {item.text.toUpperCase()} </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>
                <p><strong>Contact</strong></p>
                <p>1234 N Harrison Street, Atlanta, USA 30033 </p>
                <p>404-987-6543 </p>
                <p>littlelemonrestaurant@info.com </p>
            </div>

            <div>
                <p><strong>Social Medias</strong></p>
                <img />
                <img />
                <img />
                <img />
            </div>

        </>
    )
}

export default Footer;