import React from "react";
import Strip from "../../asset/images/Stripe-Logo.svg";
import Dribble from "../../asset/images/Dribble-logo.svg";

const Reviews = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <img className="py-4" src={Strip} alt="strip logo" />
            <p>
              "Focus on creating and growing your projects and websites, and
              we‘ll always take care of spinning up new designs for your users
              and making sure they look great"
            </p>
            <h5>Roger Waters</h5>
            <span className="pb-4">Head of Design</span>
          </div>
          <div className="col-md-6">
            <img className="py-4" src={Dribble} alt="dribble logo" />
            <p>
              "Focus on creating and growing your projects and websites, and
              we‘ll always take care of spinning up new designs for your users
              and making sure they look great"
            </p>
            <h5>David Gilmour</h5>
            <span className="pb-4">Co-Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
