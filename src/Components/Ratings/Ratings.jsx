import React from "react";
import "./Ratings.css";
import ratings_temp from "../../assets/ratings_temp.png"
import ratingline from "../../assets/ratingline.png";

const Ratings = () => {
  return (
    <div className="ratings container">
      <div className="ratingsallover">
        <img className="ratingline" src={ratingline} alt="" />
        <img className="ratings-img" src={ratings_temp} alt="" />
        <div className="ratingsall">
          <h1 className="ratingsh1">
            Hire Our Top{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            Rated Freelancer
          </h1>
          <p className="ratingsp">
            To get reviews on, encourage your client to spread
            <span className="hidden">
              <br />
            </span>
            the word about your service. Verify your business
            <span className="hidden">
              <br />
            </span>
            so your information is eligible to appear on Maps.
          </p>
          <button className="btn4">How it works</button>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
