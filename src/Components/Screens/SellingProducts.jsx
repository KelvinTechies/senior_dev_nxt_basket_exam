import { NavLink } from "react-router-dom";
function SellingProducts() {
  return (
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
                  <div className="col-md-3">
                    <div className="product-card">
                      <div className="img_div">
                        <img src="/images/product-cover-51.png" alt="" />
                      </div>
                      <div className="frame">
                        <h5>Graphic Design</h5>
                        <NavLink to='product_detail'>English Department</NavLink>
                        <div className="prices">
                            <h5>$16.48</h5>
                            <h5>$6.48</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-md-3">
                    <div className="product-card">
                      <div className="img_div">
                        <img src="/images/product-cover-53.png" alt="" />
                      </div>
                      <div className="frame">
                        <h5>Graphic Design</h5>
                        <NavLink>English Department</NavLink>
                        <div className="prices">
                            <h5>$16.48</h5>
                            <h5>$6.48</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-card">
                      <div className="img_div">
                        <img src="/images/product-cover-54.png" alt="" />
                      </div>
                      <div className="frame">
                        <h5>Graphic Design</h5>
                        <NavLink>English Department</NavLink>
                        <div className="prices">
                            <h5>$16.48</h5>
                            <h5>$6.48</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-card">
                      <div className="img_div">
                        <img src="/images/product-cover-55.png" alt="" />
                      </div>
                      <div className="frame">
                        <h5>Graphic Design</h5>
                        <NavLink>English Department</NavLink>
                        <div className="prices">
                            <h5>$16.48</h5>
                            <h5>$6.48</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
            <div className="btnMd">
                <button><p>LOAD MORE PRODUCTS</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingProducts;
