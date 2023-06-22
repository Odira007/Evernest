import React from "react";
import { Link } from "react-router-dom";
import BuyHome from "../images/buy_a_home.jpg";
import SellHome from "../images/sell_a_home.webp";
import RentHome from "../images/rent_a_home.webp"

const Purposecard = () => {

    return (
        <main className="main-content">
            <div className="head">
                <h2>Explore homes on Evernest</h2>
                <p>Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p>
            </div>
            <div className="event-cards">
            
                <div className="cards">
                    <img className="purpose-images" src={BuyHome} alt="" />
                    <h2 className="header">Buy a home</h2>
                    <p className="events buy-home">Get inclined with the aesthetics from an immersive photo experience and find a place where you will like to live.</p>
                     
                    <Link to="/homes"><button className="buttons btn1">Browse homes</button></Link>
                </div>
                <div className="cards">
                    <img className="purpose-images" src={SellHome} alt="" />
                    <h2 className="header">Sell a home</h2>
                    <p className="events buy-home">Here, you won't just provide an offer for the home you wish to sell. You will provide the best offers available.</p> 
                    <button className="buttons btn2">See your options</button> 
                </div>
                <div className="cards">
                    <img className="purpose-images" src={RentHome} alt="" />
                    <h2 className="header">Rent a home</h2>
                    <p className="events buy-home">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p> 
                    <button className="buttons btn3">Find rentals</button> 
                </div>
            </div>
        </main>

    )
}
export default Purposecard;