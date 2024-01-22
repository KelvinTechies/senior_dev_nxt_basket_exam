import React from "react";
import brand1 from "../../image/assets/icons/fa-brands-1.png";
import brand2 from "../../image/assets/icons/fa-brands-2.png";
import brand3 from "../../image/assets/icons/fa-brands-3.png";
import brand4 from "../../image/assets/icons/fa-brands-4.png";
import brand5 from "../../image/assets/icons/fa-brands-5.png";
import brand6 from "../../image/assets/icons/fa-brands-6.svg";
function Clients() {
  return (
    <div className="desktop_clients">
      <div className="container">
        <div className="row">
          <div className="col_md_2">
            <img src={brand1} alt="" />
          </div>
          <div className="col_md_2">
            <img src={brand2} alt="" />
          </div>
          <div className="col_md_2">
            <img src={brand3} alt="" />
          </div>
          <div className="col_md_2">
            <img src={brand4} alt="" />
          </div>
          <div className="col_md_2">
            <img src={brand5} alt="" />
          </div>
          <div className="col_md_2">
            <img src={brand6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
