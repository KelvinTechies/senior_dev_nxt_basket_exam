import React from "react";
import  cool_icon from '../../image/assets/icons/icon cool-icon-1.svg'
import  cool_ant from '../../image/assets/icons/icon ant-design-area-chart-outlined.svg'
import Testimonials from "./Testimonials";

function FeaturedPost() {
  return (
   <>
    <div className="desktop-blog-3">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <h6>Practice Advice</h6>
            <h3>Featured Posts</h3>
          </div>
        </div>
        <div className="row_Fp">
          <div className="col md-4">
            <div className="content-card">
              <div className="fixed_height">
                <div className="tag">
                  <p>NEW</p>
                </div>
              </div>

              <div className="frame">
                <div className="tags">
                  <small>Google</small>
                  <small>Trending</small>
                  <small>New</small>
                </div>
                <h4>Loudest à la Madison #1 (L'integral)</h4>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="frame_1">
                    <div className="frame_11">
                        <div className="icon_akh">
                            <img src={cool_icon} alt="" />
                        </div>
                        <small>22 April 2021</small>
                    </div>
                    <div className="frame12">
                        <img src={cool_ant} alt="" />
                        <small>10 comments</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div className="content-card">
              <div className=" fr_1">
                <div className="tag">
                  <p>NEW</p>
                </div>
              </div>

              <div className="frame">
                <div className="tags">
                  <small>Google</small>
                  <small>Trending</small>
                  <small>New</small>
                </div>
                <h4>Loudest à la Madison #1 (L'integral)</h4>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="frame_1">
                    <div className="frame_11">
                        <div className="icon_akh">
                            <img src={cool_icon} alt="" />
                        </div>
                        <small>22 April 2021</small>
                    </div>
                    <div className="frame12">
                        <img src={cool_ant} alt="" />
                        <small>10 comments</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col md-4">
            <div className="content-card">
              <div className=" fr_2">
                <div className="tag">
                  <p>NEW</p>
                </div>
              </div>

              <div className="frame">
                <div className="tags">
                  <small>Google</small>
                  <small>Trending</small>
                  <small>New</small>
                </div>
                <h4>Loudest à la Madison #1 (L'integral)</h4>
                <p>
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="frame_1">
                    <div className="frame_11">
                        <div className="icon_akh">
                            <img src={cool_icon} alt="" />
                        </div>
                        <small>22 April 2021</small>
                    </div>
                    <div className="frame12">
                        <img src={cool_ant} alt="" />
                        <small>10 comments</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Testimonials/>
   </>
  );
}

export default FeaturedPost;
