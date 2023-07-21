import React from "react";
import Logowhite from "./assets/UXUI/little-lemon-kit/Logo2-white.svg";
import NavList from "./NavList";
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Logowhite} alt="Little Lemon logo" className="footer-logo" />
            <nav className="footer-nav">
                <ul>
                    {NavList().map((item, index) => (
                        <li key={index}>
                            <a href={item.url}> {item.text.toUpperCase()} </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="footer-contact">
                <p className="contact">CONTACT</p>
                <p id="address">1234 N Harrison Street, Atlanta, USA 30033 </p>
                <p id="address">404-987-6543 </p>
                <p id="address">littlelemonrestaurant@info.com </p>
            </div>

            <div className="footer-social-medias">
                <p>SOCIAL MEDIAS</p>
                <img />
                <img />
                <img />
                <img />
            </div>

        </div>
    )
}

export default Footer;