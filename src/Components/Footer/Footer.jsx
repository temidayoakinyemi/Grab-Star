import React from "react";
import "./Footer.css";
import logo_and_social from "../../assets/logo and social.png";
import linefooter from "../../assets/linefooter.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footerall2">
        <img className="footerlogo" src={logo_and_social} alt="" />
        <div className="footerall1">
          <ul className="footerul1">
            About Us
            <li className="footerli1">Our company</li>
            <li className="footerli1">Blog</li>
            <li className="footerli1">Blog</li>
            <li className="footerli1">Press Center</li>
            <li className="footerli1">Contact</li>
          </ul>
          <ul className="footerul2">
            Community
            <li className="footerli2">Support Center</li>
            <li className="footerli2">Freelance</li>
            <li className="footerli2">Reviews</li>
            <li className="footerli2">Login</li>
            <li className="footerli2">Sign up</li>
          </ul>
          <ul className="footerul3">
            Buisness
            <li className="footerli3">Grab Business</li>
            <li className="footerli3">Product</li>
            <li className="footerli3">Pricing</li>
            <li className="footerli3">Template</li>
            <li className="footerli3">Find Job</li>
          </ul>
        </div>
      </div>
      <img className="line" src={linefooter} alt="" />
      <div className="footerallp">
        <p className="footerp">Copyright 2010 - 2021 Ofspace</p>
        <p className="footerp2">Privacy Policy I Website Terms</p>
      </div>
    </div>
  );
};

export default Footer;
