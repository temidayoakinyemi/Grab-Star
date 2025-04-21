import React, { useState } from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };
    return (
      <nav className="container">
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>Home</li>
          <li>Rate a Client</li>
          <li>Rate a Freelancer</li>
          <li>Login</li>
          <li>
            <button className="btn1">Create Account</button>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    );
}

export default Navbar