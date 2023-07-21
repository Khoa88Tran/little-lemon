import React from "react";
import "./styles/Main1.css"
import main1photo from "./assets/UXUI/little-lemon-kit/main1photo.jpg"

const Main1 = () => {
    return (
        <div className="main1">
            <div className="intro-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="sub-title">Kansas City</h2>
                <p className="body-text">We are a family owned Vietnamese American fusion restaurant, focused on traditional recipes with a touch of modern American cusine.</p>
                <button className="main1-button">Reserve A Table</button>
            </div>
            <img src= {main1photo} alt="restaurant food" className="main1-photo" />
        </div>
    )
}
export default Main1