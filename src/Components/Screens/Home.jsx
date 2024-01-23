import React, { useEffect, useState } from "react";
import SellingProducts from "./SellingProducts";
import FeaturedProducts from "./FeaturedProducts";
import FeaturedPost from "./FeaturedPost";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import { getProducts } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const getProducts = async () => {
    await axios
      .get("https://dummyjson.com/products/?page=1&limit=" + limit)
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  const loadMore = () => {
    setLimit(limit + 4);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, [navigate, limit]);

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
      <div className="desktop-product-cards-21">
      <div className="container">
        <div className="row">
          <div className="main-content">
            <h2>Featured Products</h2>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between</p>
          </div>
        </div>
        <div className="row_1">
          <div className="products tab tab group">
            <div className="tab-content">
                <div className="row_2">
        {products.map((product) => {
          return (
            <>
              <SellingProducts id={product.id} name={product.title} category={product.category} discount={product.discountPercentage} price={product.price} img={product.thumbnail} />
            </>
          );
        })}
           </div>
                
                </div>

          <div className="btnMd">
        <button onClick={loadMore}>
          <p>LOAD MORE PRODUCTS</p>
        </button>
      </div>
      </div>
        </div>
      </div>
      </div>

    
      <FeaturedProducts />
      <FeaturedPost />
    </>
  );
}

export default Home;
