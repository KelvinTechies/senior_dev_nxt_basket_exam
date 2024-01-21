import React from "react";
import facebook from "../../image/assets/vectors/ant-design_facebook-filled.svg";
import instagram from "../../image/assets/vectors/ant-design_instagram-outlined.svg";
import twitter from "../../image/assets/vectors/ant-design_twitter-outlined.svg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="destop-footer">
      <div className="diiv">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="navbar_brand">
                <p>Bandage</p>
              </div>
            </div>
            <div className="ccol-md-3">
              <div className="social_media">
                <div className="social_media_icon">
                  <img src={facebook} alt="" />
                </div>
                <div className="social_media_icon">
                  <img src={instagram} alt="" />
                </div>
                <div className="social_media_icon">
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="diivv">
        <div className="containerr">
          <div className="rrow">
            <div className="col-md-2">
              <h5>Company Info</h5>
              <div className="divq">
                <NavLink>About Us</NavLink>
                <NavLink>Carrier</NavLink>
                <NavLink>We are hiring </NavLink>
                <NavLink>Blog </NavLink>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Legal</h5>
              <div className="divq">
                <NavLink>About Us</NavLink>
                <NavLink>Carrier</NavLink>
                <NavLink>We are hiring </NavLink>
                <NavLink>Blog </NavLink>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Features</h5>
              <div className="divq">
                <NavLink>Business Marketing </NavLink>
                <NavLink>User Analytic</NavLink>
                <NavLink>Live Chat </NavLink>
                <NavLink>Unlimited Support </NavLink>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Resources</h5>
              <div className="divq">
                <NavLink>IOS & Android </NavLink>
                <NavLink>Watch a Demo</NavLink>
                <NavLink>Customers </NavLink>
                <NavLink>API </NavLink>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Get In Touch</h5>
              <div className="custom-form">
                <div className="input_grp">
                  <div className="ii_ggrp">
                    <input placeholder="Your Email" />
                    <div className="input_append">
                    <button className="bttn">
                      <p>Subscribe</p>
                    </button>
                  </div>
                  </div>
                 
                </div>
              </div>
              <p>Lore imp sum dolor Amit</p>

            </div>
          </div>
        </div>
      </div>
      <div className="ddiivv">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <p>Made With Love By Finland All Right Reserved </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
