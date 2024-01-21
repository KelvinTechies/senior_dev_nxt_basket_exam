import React from "react";
import { NavLink } from "react-router-dom";
import arrow_icon_right from "../../image/assets/icons/icn arrow-right icn-xs.svg";
import carousel_item_1 from "../../image/single-product-1-cover-1.jpg";
import mainImg from "../../image/single-product-1-cover-2.jpg";
import carousel_item_2 from "../../image/single-product-1-thumb-2.jpg";
function ProductDetails() {
  return (
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
                <div className="carousel_inner">
                  <div className="carousel_item"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
