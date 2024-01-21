import React from "react";
import starEmptyFill from "../../image/assets/icons/icn bx-star.svg";
import starFill from "../../image/assets/icons/icn bxs-star.svg";
import SubFooter from "./SubFooter";
function Testimonials() {
  return (
   <>
    <div className="desktop-testimonials-6">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h6>What they say about us</h6>
            <div className="card_item">
              <div className="card_content">
                <div className="media_circle">
                  <img src="images/user1.jpg" alt="" />
                </div>
                <div className="stars">
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starEmptyFill} alt="" />
                </div>
                <p className="ppp">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="ddiv">
                  <p>Regina Miles</p>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="frame">
              <div className="fr_1"></div>
              <div className="fr_2"></div>
              <div className="fr_3"></div>
            </div>
            <div className="frame_2">
              <div className="fr_4"></div>
              <div className="fr_5"></div>
              <div className="fr_6"></div>
            </div>
            <div className="frame_3">
              <div className="fr_7"></div>
              <div className="fr_8"></div>
              <div className="fr_9"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SubFooter/>
   </>
  );
}

export default Testimonials;
