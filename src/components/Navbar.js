import React from "react";
import logo from "../images/evernest-logo.png"

const Navbar = () => {
    return (
        <div className="navbar">

            <img src={logo} alt="" className="logo"/>
            <ul>
                <li>Buy</li>
                <li>Rent</li>
                <li>Mortgage</li>
                <li>Log in</li>
                <li>Sign up</li>
            </ul>
        </div>
    )
}
export default Navbar;