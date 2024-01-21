import React from 'react'
 import book from '../../image/assets/icons/bx_bxs-book-reader.svg'
 import carbon_book from '../../image/assets/icons/carbon_book.svg'
 import uil_arrow from '../../image/assets/icons/uil_arrow-growth.svg'
function FeaturedProducts() {
  return (
    <div className='desktop-features'>
      <div className="container">
        <div className="row">
            <div className="main-content">
            <h2>Featured Products</h2>
            <h3>The Best Services</h3>
            <p>Problems trying to resolve the conflict between</p>
            </div>
        </div>
        <div className="roww">
            <div className="col-md-4">
                <div className="card">
                    <div className="icon_img">
                        <img src={book} alt="" />
                       
                    </div>
                    <h3>Easy Wins</h3>
                        <p>Get your best looking smile now!</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="icon_img">
                        <img src={carbon_book} alt="" />
                       
                    </div>
                    <h3>Concrete</h3>
                        <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="icon_img">
                        <img src={uil_arrow} alt="" />
                     
                    </div>
                    <h3>Hack Growth</h3>
                        <p>Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
