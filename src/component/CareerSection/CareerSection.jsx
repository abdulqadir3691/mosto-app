import React from "react";
import Minus from "../../asset/images/Minus.svg";
import LocationOutline from "../../asset/images/Location-outline.svg";
import Arrow from '../../asset/images/Arrow-right-solid.svg'
import "../../../src/App.css";

const CareerSection = () => {
  return (
    <div className="feature-bg">
      <div className="container ">
        <div className="row pb-5">
          <div>
            <h4 className="pt-5 heading">Careers at Inertia</h4>
            <img src={Minus} alt="" />
            <p>
              Join us in our quest to bring the best experiences through <br />{" "}
              design and technology to the world, our most important <br />{" "}
              vision is to have the best work culture possible.
            </p>
          </div>
          <div class="container pt-3">
            <div class="row">
              <div class="col-md-4">
                <div className="d-flex gap-3">
                  <h4>Dublin</h4>
                  <img className="img-fluid" src={LocationOutline} alt="" />
                </div>
                <ul className="list-unstyled">
                  <li>Head of Marketing</li>
                  <li>UX Designer</li>
                  <li>Senior Programmer</li>
                  <li>Mobile UI Designer</li>
                  <li>Lead Product Designer</li>
                </ul>
              </div>
              <div class="col-md-4">
                <div className="d-flex gap-3">
                  <h4>Amsterdam</h4>
                  <img className="img-fluid" src={LocationOutline} alt="" />
                </div>
                <ul className="list-unstyled">
                  <li>Head of Operations</li>
                  <li>Head of Operations</li>
                  <li>Animation Designer</li>
                </ul>
              </div>
              <div class="col-md-4">
                <div className="d-flex gap-3">
                  <h4>Mexico City</h4>
                  <img className="img-fluid" src={LocationOutline} alt="" />
                </div>
                <ul className="list-unstyled">
                    <li>Head of Motion Design</li>
                    <li>Graphics Engineer</li>
                    <li>Senior UI Designer</li>
                    <li>Backend Engineer</li>
                </ul>

              </div>
              
            </div>
            <button className="btn btn-danger">Careers At Intertia <img src={Arrow} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
