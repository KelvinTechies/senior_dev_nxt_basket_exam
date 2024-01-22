import React from "react";
import { NavLink } from "react-router-dom";
import mainImg from "../../image/single-product-1-cover-2.jpg";
import BestSeller from "./BestSeller";
import Clients from "./Clients";

function Description() {
  return (
    <>

    <div className="desktop-product-description">
      <div className="nav_style_description">
        <div className="nav_desc">
          <ul>
            <li>
              <NavLink>Description</NavLink>
            </li>
            <li>
              <NavLink>Additional Information</NavLink>
            </li>
            <li>
              <NavLink>Reviews (0) </NavLink>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <div className="product_desc_div">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card_item">
                <h5>the quick fox jumps over </h5>
                <h6>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="list_row">
                <div className="lin_2"></div>
                <h5>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h5>
              </div>
            </div>
            <div className="col_md_4">
              <div className="card_item">
                <div className="qwe">
                  <img src={mainImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <BestSeller/>
  <Clients/>
  </>
  );
}

export default Description;
