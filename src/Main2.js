import React from "react";
import "./styles/Main2.css";
import main2photo1 from "./assets/UXUI/little-lemon-kit/main2photo1.jpg";
import main2photo2 from "./assets/UXUI/little-lemon-kit/main2photo2.jpg";
import main2photo3 from "./assets/UXUI/little-lemon-kit/main2photo3.jpg";

const Main2 = () => {
    return (
        <div className="main-2">
            <div className="main-2-box">
                <img src = {main2photo1} atl = "food photo" className="main-2-photo" />
                <div className="item-name-price">
                    <p className="item-name">Bò Kho</p>
                    <p className="item-price">$14.99</p>
                </div>
                <div className="main-box-text">
                    <p >
                    Bò kho is a dish of South Vietnamese origin using the kho cooking method,
                    it is a spicy dish made commonly with beef which is known throughout the country and beyond.
                    In rural areas, the dish is described as being "extremely fiery."
                    </p>
                </div>
                <button className="main-2-button">
                    Order Now
                </button>
            </div>
            <div className="main-2-box">
                <img src = {main2photo2} atl = "food photo" className="main-2-photo" />
                <div className="item-name-price">
                    <p className="item-name">Bò Kho</p>
                    <p className="item-price">$14.99</p>
                </div>
                <div className="main-box-text">
                    <p >
                    Bò kho is a dish of South Vietnamese origin using the kho cooking method,
                    it is a spicy dish made commonly with beef which is known throughout the country and beyond.
                    In rural areas, the dish is described as being "extremely fiery."
                    </p>
                </div>
                <button className="main-2-button">
                    Order Now
                </button>
            </div>
            <div className="main-2-box">
                <img src = {main2photo3} atl = "food photo" className="main-2-photo" />
                <div className="item-name-price">
                    <p className="item-name">Bò Kho</p>
                    <p className="item-price">$14.99</p>
                </div>
                <div className="main-box-text">
                    <p >
                    Bò kho is a dish of South Vietnamese origin using the kho cooking method,
                    it is a spicy dish made commonly with beef which is known throughout the country and beyond.
                    In rural areas, the dish is described as being "extremely fiery."
                    </p>
                </div>
                <button className="main-2-button">
                    Order Now
                </button>
            </div>
        </div>
    )
} 

export default Main2