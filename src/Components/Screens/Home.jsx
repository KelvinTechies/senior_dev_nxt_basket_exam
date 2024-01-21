import React from "react";
import SellingProducts from "./SellingProducts";
import FeaturedProducts from "./FeaturedProducts";
import FeaturedPost from "./FeaturedPost";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="over_container">
        <div className="sub_over">
         <div className="col-md-4">
            <div className="card-item">
              <div className="media bg-cover">
                <div className="card-content">
                  <h6>5 Items</h6>
                  <h2>Furniture</h2>
                  <h6>Read More</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card-item">
              <div className="media bg-cover">
                <div className="card-content">
                  <h6>5 Items</h6>
                  <h2>Furniture</h2>
                  <h6>Read More</h6>
                </div>
              </div>
            </div>
            <div className="l_div">
              <div className="card-item-sm">
                <div className="media bg-cover">
                  <div className="card-content">
                    <h6>5 Items</h6>
                    <h2>Furniture</h2>
                    <h6>Read More</h6>
                  </div>
                </div>
              </div>
              <div className="card-item-sm smm">
                <div className="media bg-cover">
                  <div className="card-content">
                    <h6>5 Items</h6>
                    <h2>Furniture</h2>
                    <h6>Read More</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SellingProducts />
      <FeaturedProducts />
      <FeaturedPost />
    </>
  );
}

export default Home;
