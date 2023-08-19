import React from "react";
import Minus from "../../asset/images/Minus.svg";
import Card1 from "../../asset/images/card-image-1.png";
import Card2 from "../../asset/images/card-image-2.png";
import Card3 from "../../asset/images/card-image-3.png";
import Mike from '../../asset/images/mike-demon.png'
import Tim from '../../asset/images/tim.png'
import Jessica from '../../asset/images/jessica.png'

const BlogSection = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div>
          <h4 className="heading">From the blog</h4>
          <img src={Minus} alt="" />
        </div>
        <div class="row">
          <div class="col-md-4">
            <img className="img-fluid" src={Card1} alt="" />
            <h4>Make your team a Design driven company</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="pb-3">
                <img className="pe-3 " src={Mike} alt="" />
                <span>BY MIKE DAMON</span>
            </div>
          </div>
          <div class="col-md-4">
            <img className="img-fluid" src={Card2} alt="" />
            <h4>How to nurture a calm and organized work culture</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <div className="pb-3">
                <img className="pe-3 img-fluid" src={Tim} alt="" />
                <span>BY TIM NORTON</span>
            </div>
          </div>
          <div class="col-md-4">
            <img className="img-fluid" src={Card3} alt="" />
            <h4>How can the architecture influence our mood</h4>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33.
            </p>
            <div className="pb-5">
                <img className="pe-3 img-fluid" src={Jessica} alt="" />
                <span>BY JESSICA JONES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
