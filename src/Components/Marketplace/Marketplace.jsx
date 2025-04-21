import React, { useRef } from "react";
import "./Marketplace.css";
import marketplaceicon from "../../assets/marketplaceicon.png";
import marketplaceicon2 from "../../assets/marketplaceicon2.png";
import marketplaceicon3 from "../../assets/marketplaceicon3.png";
import marketplaceicon4 from "../../assets/marketplaceicon4.png";
import marketplaceicon5 from "../../assets/marketplaceicon5.png";
import marketplaceicon6 from "../../assets/marketplaceicon6.png";
import marketplacearrow from "../../assets/marketplacearrow.png";

const Marketplace = () => {
  return (
    <div className="marketplace container">
      <div className="all-marketplace2">
        <div className="all-marketplace1">
          <h1 className="marketplaceh1">
            Explore the{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            Marketplace
          </h1>
          <p className="marketplacep">
            We make it easy to work with{" "}
            <span className="hidden">
              <br />
            </span>
            professional, creative experts from{" "}
            <span className="hidden">
              <br />
            </span>
            around the world
          </p>
        </div>
        <div className="marketplacedivshow">
          <img className="marketplaceicon" src={marketplaceicon} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Graphic Design</h1>
          <p className="marketplacedivshowp">12,437 Jobs</p>
        </div>
        <div className="marketplacedivshow2">
          <img className="marketplaceicon" src={marketplaceicon2} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Digital Marketing</h1>
          <p className="marketplacedivshowp">7234 Jobs</p>
        </div>
        <div className="marketplacedivshow3">
          <img className="marketplaceicon" src={marketplaceicon3} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Content Writing</h1>
          <p className="marketplacedivshowp">8,231 Jobs</p>
        </div>
      </div>
      <div className="all-marketplace3">
        <div className="marketplacedivshow4">
          <img className="marketplaceicon" src={marketplaceicon4} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Development</h1>
          <p className="marketplacedivshowp">9875 Jobs</p>
        </div>

        <div className="marketplacedivshow5">
          <img className="marketplaceicon" src={marketplaceicon5} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Data Entry</h1>
          <p className="marketplacedivshowp">8,310 Jobs</p>
        </div>

        <div className="marketplacedivshow6">
          <img className="marketplaceicon" src={marketplaceicon6} alt="" />{" "}
          <h1 className="marketplacedivshowh1">Buisness</h1>
          <p className="marketplacedivshowp">6,123 Jobs</p>
        </div>

        <div className="marketplacedivshow7">
          <p className="marketplacedivshowp2">
            <span className="p50">50+</span> Categories{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            You can Explore
          </p>
          <img className="arrow" src={marketplacearrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
