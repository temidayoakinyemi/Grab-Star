import React from "react";
import "./Review.css";
import mangrabstar2 from "../../assets/mangrabstar2.png";
import grabstarreview from "../../assets/grabstarreview.png";
import reviewline from "../../assets/reviewline.png";

const Review = () => {
  return (
    <div className="review container">
      <img className="reviewline" src={reviewline} alt="" />
      <div className="reviewallover">
        <div className="reviewall">
          <h1 className="reviewh1">
            Collect Reviews{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            from Your Existing
            <span className="hidden">
              <br />
            </span>
            Clients.
          </h1>
          <p className="reviewp">
            To get reviews on, encourage your client to spread the
            <span className="hidden">
              <br />
            </span>
            word about your service. Verify your business so your
            <span className="hidden">
              <br />
            </span>
            information is eligible to appear on Maps.
          </p>
          <button className="btn3">How it works</button>
        </div>
        <div className="reviewimgs">
          <img className="reviewimg2" src={grabstarreview} alt="" />
          <img className="reviewimg" src={mangrabstar2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
