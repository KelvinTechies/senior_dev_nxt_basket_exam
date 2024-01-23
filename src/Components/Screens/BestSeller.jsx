import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function BestSeller() {

  const [products, setProducts] = useState([]);
  const limit= 4
  const getProducts = async () => {
    await axios
      .get("https://dummyjson.com/products/?page=1&limit=" + limit)
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, [navigate, limit]);


  return (
    <div className="best_seller">
      <div className="container">
        <div className="row">
          <div className="main_content">
            <h3>BESTSELLER PRODUCTS</h3>
          </div>
          <div className="rec"></div>
          <div className="rrooww">
          {products.map((product)=>{
           return(
            <>
           
            <NavLink to={`/product_detail/${product.id}`}>
            <div className="col_md_3">
              <div className="product_card">
                <div className="f_h">
                  <div className="pro_img">
                    <img src={product.thumbnail} alt="" />
                  </div>
                </div>
                <div className="fr_m_a_e">
                  <h5>{product.item}</h5>
                  <NavLink to={`/product_detail/${product.id}`}> {product.category}</NavLink>
                  <div className="pri_ces">
                    <h5>${product.discountPercentage}</h5>
                    <h5>${product.price}</h5>
                  </div>
                </div>
              </div>
            </div>
            </NavLink>
            </>
           )
          })}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
