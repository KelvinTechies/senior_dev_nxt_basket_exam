import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import vector1 from "../image/assets/vectors/Vector.svg";
import icon_setting from "../image/assets/icons/icn settings icn-xs.svg";
import heart from "../image/assets/icons/heart.svg";
import search from "../image/assets/icons/search.svg";
import shopping_cart from "../image/assets/icons/shopping_cart.svg";
import { NavLink, Outlet } from "react-router-dom";
import Home from "../Components/Screens/Home";
import mobile_search from "../image/assets/icons/icn search .icn-xs.svg";
import mobile_shopping_cart from "../image/assets/icons/icn shopping-cart .icn-xs.svg";
import mobile_menu from "../image/assets/icons/icn menu .icn-xs.svg";
import phone from '../image/assets/icons/icn settings icn-xs (1).svg'
import Footer from "../Components/Screens/Footer";
function Layout({children}) {
  return (
    <>
      <div className="general_container">
        <div className="navBar">
          <div className="nav" style={{ background: "#23856D" }}>
            <div className="f_nav">
              <div className="fone">
                <FaPhone width={16} height={16} color="#c8e1db" />
                <h6 style={{ color: "#ffffff" }}> (225)55-0018</h6>
              </div>
              <div className="email">
                {" "}
                <FaEnvelope width={16} height={16} color="#c8e1db" />
                <h6 style={{ color: "#ffffff" }}>
                  {" "}
                  michelle.rivera@example.com
                </h6>
              </div>
            </div>
            <div className="mid_">
              <h6 style={{ color: "#ffffff" }}>
                Follow us and get a chance to win 80% off
              </h6>
            </div>
            <div className="l_nav">
              <div className="s_nav">
                <h6 style={{ color: "#ffffff" }}>Follow us: </h6>
                <FaInstagram width={120} height={26} color="#ffffff" />
                <FaYoutube width={120} height={26} color="#ffffff" />
                <FaFacebook width={120} height={26} color="#ffffff" />
                <FaTwitter width={120} height={26} color="#ffffff" />
              </div>
            </div>
          </div>
          <div className="mobile">
              <div className="head_tab">
              <NavLink to='/'> <h3>Bandage</h3></NavLink>
                <div className="head_icons">
                  <img src={mobile_search} alt="" />
                  <img src={mobile_shopping_cart} alt="" />
                  <img src={mobile_menu} alt="" />
                </div>
              </div>
              <div className="mobile_nav">
                <ul>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Home</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Product</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Pricing</li>
                  </NavLink>

                  <NavLink style={{ color: "#252b42" }}>
                    <li>Contact</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          <div className="sec_nav">
            
            <div className="sec_sec_nav">
              <div className="brand">
              <NavLink to='/'> <h3>Bandage</h3></NavLink>
              </div>
              <div className="navbar-nav">
                <ul>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Home</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>
                      <div className="dropDwn">
                        Shop
                        <img src={vector1} alt="" />
                      </div>
                    </li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>About</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Blog</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Contact</li>
                  </NavLink>
                  <NavLink style={{ color: "#252b42" }}>
                    <li>Pages</li>
                  </NavLink>
                </ul>
              </div>
              <div className="third_nav">
                <div className="navbar-tav">
                  <ul>
                    <li>
                      <NavLink>
                        <div className="btn-32">
                          <img src={icon_setting} alt="" />{" "}
                          <p>Login/Register</p>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <div className="btn-32">
                          <img src={search} alt="" />
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <div className="btn-32">
                          <img src={shopping_cart} alt="" />
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <div className="btn-32">
                          <img src={heart} alt="" />
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           
          </div>
{children}
<Outlet/>
<Footer />
      
        </div>
      </div>
    </>
  );
}

export default Layout;
