import React from "react";
import HireImage from "../../asset/images/hire-sectiom-image.svg";
import Arrow from '../../asset/images/Arrow-right-solid.svg'

const HireSection = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="img-fluid d-flex flex-column text-center text-white justify-content-center"
            style={{
              backgroundImage: `url(${HireImage})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",             
              height: "68vh",
              backgroundPosition: "center center",
            }}
          >
             <h3>Want to hire us?</h3>
             <p>Have an idea for an awesome project? We'd love to help make it real.</p>
             <div>
             <button className="btn btn-danger">Get in touch <img src={Arrow} alt="" /></button>
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireSection;
