import React from "react";
import "./Features.css";
import grabstarpartners from "../../assets/grabstarpartners.png";
import mangrabstar from "../../assets/mangrabstar.png";
import herobackgroundline from "../../assets//herobackgroundline.png";

const Features = () => {
  return (
    <div className="features container">
      <img className="featureimg1" src={grabstarpartners} alt="" />
      <div className="all-feature-overall">
        <img className="featureimg2" src={mangrabstar} alt="" />
        <div className="all-featureover">
          <h1 className="featureh1">
            Our amazing{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            Features Helpfull{" "}
            <span className="hidden">
              <br />
            </span>{" "}
            for your Business
          </h1>
          <div className="all-feature">
            <div className="all-feature1">
              <h2 className="featureh2">Collect Reviews </h2>
              <p className="featurep">
                Best way to collect review. Invite{" "}
                <span className="hidden">
                  <br />
                </span>
                your client and get review from{" "}
                <span className="hidden">
                  <br />
                </span>
                client.
              </p>
            </div>
            <div className="all-feature1">
              <h2 className="featureh2">Top Rated Freelancer</h2>
              <p className="featurep">
                Find the right freelancer to
                <span className="hidden">
                  <br />
                </span>
                begin working on your project{" "}
                <span className="hidden">
                  <br />
                </span>
                within minutes.
              </p>
            </div>
          </div>
          <div className="all-feature">
            <div className="all-feature1">
              <h2 className="featureh2">Find Out Project</h2>
              <p className="featurep">
                Find out project which match{" "}
                <span className="hidden">
                  <br />
                </span>
                your skill and grab the opprtunity{" "}
                <span className="hidden">
                  <br />
                </span>
                to work with popular companies.
              </p>
            </div>
            <div className="all-feature1">
              <h2 className="featureh2">Create portfolio</h2>
              <p className="featurep">
                Best way to show your
                <span className="hidden">
                  <br />
                </span>
                outstanding skill by creating{" "}
                <span className="hidden">
                  <br />
                </span>
                portflio and get more clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="featureline" src={herobackgroundline} alt="" />
    </div>
  );
};

export default Features;
