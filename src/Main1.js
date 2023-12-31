import React from "react";
import "./styles/Main1.css"
import main1photo from "./assets/UXUI/little-lemon-kit/main1photo.jpg"
import { useNavigate } from "react-router-dom";

const Main1 = () => {
    const navigate = useNavigate(); 

    const handleReserveTable = () => {
        navigate("/reservations"); 
  };
    return (
        <div className="main-1">
            <div className="intro-text">
                <h1 className="title">Little Lemon</h1>
                <h2 className="sub-title">Kansas City</h2>
                <p className="body-text">We are a family owned Vietnamese American fusion restaurant, focused on traditional recipes with a touch of modern American cusine.</p>
                <button className="main-1-button" onClick={handleReserveTable}>Reserve A Table</button>
            </div>
            <img src= {main1photo} alt="restaurant food" className="main-1-photo" />
        </div>
    )
}
export default Main1