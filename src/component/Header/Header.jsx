import React from "react";
import "./Header.css";
import Logo from '../../asset/images/logo.svg';

const Header = () => {
  return (
    <div>
      <div >
        <div className="bg-image">
          <nav class="navbar navbar-expand-lg">
            <div class="container">
              <img src={Logo} alt="" />
              <button
                class="navbar-toggler text-white btn-success"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon text-white"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">
                      Home Pages
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Blogs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Ecommerce
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      RTL Version
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white me-5" href="#">
                      Theme Docs
                    </a>
                  </li>
                  <div>
                  <button class="btn btn-danger  fs-6 fw-light" type="submit">
                    Buy Now
                  </button>
                  </div>
                </ul>
                
                  
                 
                
              </div>
            </div>
          </nav>

          <div className="d-flex flex-column text-center text-white justify-content-center h-100 search-us mb-5">
            <h5>WE CREATE DIGITAL PRODUCTS</h5>
            <h2>Introduce OurCreative <br /> Agency.</h2>
            <div>
            <button type="button" class="btn btn-danger px-3 fs-6 fw-light">SEE OUR WORK</button>
                  </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
