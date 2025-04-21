import React from "react";
import "./Hero.css";
import girlpointing from "../../assets/girlpointing.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="all2">
        <div className="all1">
          <h1 className="hero-header">
            90% Clients Hire <br /> Freelancer with <br /> Better Reviews
          </h1>
          <button className="btn2">Create Profile</button>
        </div>
        <img className="header-img" src={girlpointing} alt="" />
      </div>
    </div>
  );
};

export default Hero;
