import React from "react";
import Minus from "../../asset/images/Minus.svg";
import "../../../src/App.css";
import Item1 from "../../asset/images/Feature-Item-1.svg";
import Item2 from "../../asset/images/Feature-Item-2.svg";
import Item3 from "../../asset/images/Feature-Item-3.svg";
import Item4 from "../../asset/images/Feature-Item-4.svg";
import Item5 from "../../asset/images/Feature-Item-5.svg";
import Item6 from "../../asset/images/Feature-Item-6.svg";

const FeatureProducts = () => {
  return (
    <div>
      <div className="feature-bg">
        <div className="container py-5">
          <div className="row">
            <div className="text-center">
              <h2 className="heading">Feature Products</h2>
              <img src={Minus} alt="image" />
            </div>
           
            <div class="container text-center">
              <div class="row">
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item1} alt="" /></div>
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item3} alt="" /></div>
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item5} alt="" /></div>
              </div>
              <div class="row ">
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item4} alt="" /></div>
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item2} alt="" /></div>
                <div class="col-md-4 pb-3"><img className="img-fluid" src={Item6} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
