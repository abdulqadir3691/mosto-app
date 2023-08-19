import React from "react";
import Twitter from '../../asset/images/Twitter-solid.svg';
import Facebook from '../../asset/images/Facebook-square-solid.svg';
import Github from '../../asset/images/Github-solid.svg';
import Dribble from '../../asset/images/Dribbble-outlined.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="bg-color text-white pt-4 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-mdmle">
            <div className="col-md3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Company
              </h5>
              <p>
			  <a href="#" className="text-white" style={{textDecoration: 'none'}}>Portfolio</a>
				</p>
				<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}>Our Clients</a>
				</p>
				<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}>Careers</a>
				</p>
				
            </div>
			<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold text-warning">Offices</h5>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>345 Main St. San Francisco, CA</a>
				</p>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>103 N. 13th Street. Seattle, WA</a>
				</p>
				
			</div>
			<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>+81 555 489 902</a>
				</p>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>info@themes.com</a>
				</p>
				
			</div>
			<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold text-warning">About</h5>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>Log in to your account</a>
				</p>
				<p>
					<a href="#" className="text-white" style={{textDecoration: 'none'}}>Support</a>
				</p>
				
			</div>
          </div>
		  
		  <div className="">
		  <div className="text-center d-flex justify-content-center">
			<ul className="list-unstyled list-inline d-flex gap-3">
				 <img src={Twitter} alt="" />
				 <img src={Facebook} alt="" />
				 <img src={Github} alt="" />
				 <img src={Dribble} alt="" />
			</ul>

		  </div>
		  </div>
		  <div className="row align-items-center">
			<div className="">
				<p>All rights reserved Copyright</p>
				<span className="pe-3">Privacy & terms</span> <span>Terms of Service</span>
			</div>
		  </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
