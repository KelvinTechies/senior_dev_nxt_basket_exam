import { NavLink } from "react-router-dom";
function SellingProducts({id, name, category, discount, price, img}) {
  return (
    <>

      
   
                 <NavLink to={`product_detail/${id}`}>
                 <div className="col-md-3">
                    <div className="product-card">
                      <div className="img_div">
                        <img src={img} alt="" />
                      </div>
                      <div className="frame">
                        <h5>{name}</h5>
                        <NavLink to={`product_detail/${id}`}>{category} </NavLink>
                        <div className="prices">
                            <h5>${discount}</h5>
                            <h5>${price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                 </NavLink>
    </>
  );
}

export default SellingProducts;
