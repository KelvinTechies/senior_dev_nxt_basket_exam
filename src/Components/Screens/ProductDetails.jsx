import React from "react";
import { NavLink } from "react-router-dom";
import arrow_icon_right from "../../image/assets/icons/icn arrow-right icn-xs.svg";
import carousel_item_1 from "../../image/single-product-1-cover-1.jpg";
import mainImg from "../../image/single-product-1-cover-2.jpg";
import carousel_item_2 from "../../image/single-product-1-thumb-2.jpg";
import chevRight from "../../image/assets/icons/ChevronRight.svg";
import chevLeft from "../../image/assets/icons/ChevronLeft.svg";
import starEmptyFill from "../../image/assets/icons/icn bx-star.svg";
import starFill from "../../image/assets/icons/icn bxs-star.svg";
import ec1 from "../../image/assets/icons/Ellipse 14.svg";
import ec2 from "../../image/assets/icons/Ellipse 15.svg";
import ec3 from "../../image/assets/icons/Ellipse 16.svg";
import ec4 from "../../image/assets/icons/Ellipse 17.svg";
import like from "../../image/assets/icons/icn favorite (1).svg";
import basket from "../../image/assets/icons/icn favorite (2).svg";
import eye from "../../image/assets/icons/icn favorite.svg";
import Description from "./Description";
function ProductDetails() {
  return (
   <>
    <div className="product_page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bread_cum">
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <img src={arrow_icon_right} alt="" />
              <h6>Shop</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-products-card-42">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="carousel_2">
                <div className="chevs">
                  <img src={chevLeft} alt="" />
                  <img src={chevRight} alt="" />
                </div>
                <div className="carousel_inner">
                  <img src={mainImg} alt="" />
                </div>
                <div className="carousel_indicator">
                  <div className="carousel_captions">
                    <img src={carousel_item_1} alt="" />
                  </div>
                  <div className="carousel_captions">
                    <img src={carousel_item_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6_2">
              <h4>Floating Phone</h4>
              <div className="fr_31">
                <div className="stars">
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starEmptyFill} alt="" />
                </div>
                <h6>10 Reviews</h6>
                <h5>$1,139.33</h5>
                <div className="ddii">
                  <h6>Availability :</h6>
                  <h6>In Stock </h6>
                </div>
                <p></p>
                <hr />
               <div className="iq">
               <div className="products-colors">
                  <img src={ec1} alt="" />
                  <img src={ec2} alt="" />
                  <img src={ec3} alt="" />
                  <img src={ec4} alt="" />
                </div>
                <div className="product_actions">
                  <div className="btn_primary">
                    <button>
                      <h6>Select Options</h6>
                    </button>
                  </div>
                  <div className="like">
                    <img src={like} alt="" />
                  </div>
                  <div className="like">
                    <img src={basket} alt="" />
                  </div>
                  <div className="like">
                    <img src={eye} alt="" />
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Description/>
   </>

  );
}

export default ProductDetails;
