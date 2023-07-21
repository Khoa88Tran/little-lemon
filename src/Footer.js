import React from "react";
import Logowhite from "./assets/UXUI/little-lemon-kit/Logo2-white.svg";
import "./styles/Footer.css";


const FooterList = () => {
    const items = [
        {text: "home", url: "/home"},
        {text: "about", url: "/about"},
        {text: "menu", url: "/menu"},
        {text: "reservations", url: "/home"},
        {text: "online order", url: "/online-order"},
        {text: "log in", url: "/log-in"},
    ]
    return items;
}
const Footer = () => {
    return (
        <div className="footer">
            <img src={Logowhite} alt="Little Lemon logo" className="footer-logo" />
            <nav className="footer-nav">
                <ul>
                    {FooterList().map((item, index) => (
                        <li key={index}>
                            <a href={item.url}> {item.text.toUpperCase()} </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="footer-contact">
                <p><strong>Contact</strong></p>
                <p id="contact">1234 N Harrison Street, Atlanta, USA 30033 </p>
                <p id="contact">404-987-6543 </p>
                <p id="contact">littlelemonrestaurant@info.com </p>
            </div>

            <div className="footer-social-medias">
                <p><strong>Social Medias</strong></p>
                <img />
                <img />
                <img />
                <img />
            </div>

        </div>
    )
}

export default Footer;