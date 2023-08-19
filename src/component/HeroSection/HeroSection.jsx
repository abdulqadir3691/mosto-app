import React from "react";
import Minus from "../../asset/images/Minus.svg";
import "../../../src/App.css";

const HeroSection = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="heading">Welcome to the Inertia Agency</h2>
            <img src={Minus} alt="image" />
            <p>
              Inertia was founded to help developers and designers with their
              projects by <br /> offering great quality products. By developing a
              nicely designed, easy to customize <br /> theme, we strive to offer a
              good variety of options to anyone without spending a lot <br /> of time
              and money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
