import React from "react";
import { NavLink } from "react-router-dom";

function BestSeller() {
  return (
    <div className="best_seller">
      <div className="container">
        <div className="row">
          <div className="main_content">
            <h3>BESTSELLER PRODUCTS</h3>
          </div>
          <div className="rec"></div>
          <div className="rrooww">
            <div className="col_md_3">
              <div className="product_card">
                <div className="f_h">
                  <div className="pro_img">
                    <img src="/images/product-cover-53.png" alt="" />
                  </div>
                </div>
                <div className="fr_m_a_e">
                  <h5>Graphic Design</h5>
                  <NavLink to='product_detail'>English Department</NavLink>
                  <div className="pri_ces">
                    <h5>$16.48</h5>
                    <h5>$6.48</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_md_3">
              <div className="product_card">
                <div className="f_h">
                  <div className="pro_img">
                    <img src="/images/product-cover-53.png" alt="" />
                  </div>
                </div>
                <div className="fr_m_a_e">
                  <h5>Graphic Design</h5>
                  <NavLink to='product_detail'>English Department</NavLink>
                  <div className="pri_ces">
                    <h5>$16.48</h5>
                    <h5>$6.48</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_md_3">
              <div className="product_card">
                <div className="f_h">
                  <div className="pro_img">
                    <img src="/images/product-cover-53.png" alt="" />
                  </div>
                </div>
                <div className="fr_m_a_e">
                  <h5>Graphic Design</h5>
                  <NavLink to='product_detail'>English Department</NavLink>
                  <div className="pri_ces">
                    <h5>$16.48</h5>
                    <h5>$6.48</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_md_3">
              <div className="product_card">
                <div className="f_h">
                  <div className="pro_img">
                    <img src="/images/product-cover-53.png" alt="" />
                  </div>
                </div>
                <div className="fr_m_a_e">
                  <h5>Graphic Design</h5>
                  <NavLink to='product_detail'>English Department</NavLink>
                  <div className="pri_ces">
                    <h5>$16.48</h5>
                    <h5>$6.48</h5>
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

export default BestSeller;
