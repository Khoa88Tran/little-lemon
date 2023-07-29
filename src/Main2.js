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
                    <p className="item-name">Bánh Xèo</p>
                    <p className="item-price">$11.99</p>
                </div>
                <div className="main-box-text">
                    <p >
                    Bánh xèo is a crispy, stuffed rice pancake popular in Vietnam.
                    The name refers to the sound a thin layer of rice batter makes when it is poured into the hot skillet.
                    It is a savoury fried pancake made of rice flour, water, and turmeric powder. It can also be called a Vietnamese crêpe.
                    </p>
                </div>
                <button className="main-2-button">
                    Order Now
                </button>
            </div>
            <div className="main-2-box">
                <img src = {main2photo3} atl = "food photo" className="main-2-photo" />
                <div className="item-name-price">
                    <p className="item-name">Bánh Mì</p>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="main-box-text">
                    <p >
                    Bánh mì is a short baguette with thin, crisp crust and soft, airy texture.
                    It is often split lengthwise and filled with savory ingredients like a submarine sandwich and served as a meal,
                    called bánh mì thịt. Plain bánh mì is also eaten as a staple food.
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