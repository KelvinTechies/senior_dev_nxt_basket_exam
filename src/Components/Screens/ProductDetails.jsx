import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getSingleProduct = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setImageUrls(res.data.images);
    });
  };
  let quantity=1;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id,
        name: product.title,
        price: product.price,
        quantity,
        img:product.thumbnail
      })
    );

  };
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    getSingleProduct();
  }, [navigate, id]);
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
                    <img src={product.thumbnail} alt="" />
                  </div>
                  <div className="carousel_indicator">
                    {imageUrls.map((item) => {
                      return (
                        <>
                          <div className="carousel_captions">
                            <img src={item} alt="" />
                          </div>
                        </>
                      );
                    })}
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6_2">
                <h4>{product.title} </h4>
                <div className="fr_31">
                  <div className="stars">
                    <img src={starFill} alt="" />
                    <img src={starFill} alt="" />
                    <img src={starFill} alt="" />
                    <img src={starFill} alt="" />
                    <img src={starEmptyFill} alt="" />
                  </div>
                  <h6>{product.rating} Reviews</h6>
                  <h5>${product.price}</h5>
                  <div className="ddii">
                    <h6>Availability :</h6>
                    <h6>{product.stock}</h6>
                  </div>
                  <p>{product.description}</p>
                  <hr />
                  <div className="iq">
                    <div className="products-colors">
                      <img src={ec1} alt="" />
                      <img src={ec2} alt="" />
                      <img src={ec3} alt="" />
                      <img src={ec4} alt="" />
                    </div>
                    <div className="product_actions">
                      <div className="btn_primary" onClick={addToCartHandler}>
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
      <Description />
    </>
  );
}

export default ProductDetails;
