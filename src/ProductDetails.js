import React from 'react';
import axios from 'axios';
class ProductDetails extends React.Component 
{
    

    render() 
    {
         
      return(
        

  
  <section className="listing-page">
  <div className="container">
    <div className="row">
      <div className="col-12"  data-aos="fade-up" data-aos-duration="700">
        <div className="card mb-3 category-card mt-5">
          <div className="row g-0">
            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
              <img src="img/dish1.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p className="categ">CHICKEN</p>
                <h3>Grilled Chicken <br />
                  Fillet (Full)</h3>
                  <p className="specific my-3 my-md-4">Hot & Spicy Mini Fillets</p>
                  <div className="col d-flex align-items-center">
                    <h3 className="rate mb-0">£3.10</h3>
                    <p className="shipping mb-0 ms-4"><img src="img/delivery-motorcycle.svg" className="me-2" alt=""/> Free Shipping On All Orders</p>
                    
                  </div>
                  <p className="discreption my-3 my-md-4">Crispy bacon, tasty ham, pineapple, onion and
                      stretchy mozzarella, finished with a BBQ swirl.</p>
                    <div className="col d-flex">
                      <div className="number d-flex align-items-center justify-content-center">
                        <span className="minus d-flex align-items-center justify-content-center"><i className="fas fa-minus"></i></span>
                        <input className="counter-input" type="text" value="1"/>
                        <span className="plus d-flex align-items-center justify-content-center"><i className="fas fa-plus"></i></span>
                      </div>
                      <button className="btn btn-orenge ms-auto">ADD TO Cart</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row align-items-stretch g-4 pt-5 pb-4">
      <div className="col-12 col-md-4"  data-aos="fade-up" data-aos-duration="700">
        <div className="card card-cover home-item-card h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100 p-3 p-md-4 py-4 text-white text-shadow-1">
            <p className="item-p">Chicken</p>
            <h4>Grilled Chicken <br />
              Fillet (Full)</h4>
            <img src="img/dish1.png" alt=""/>
            <ul className="d-flex list-unstyled mt-4">
              
              <li className="me-3 price">
                <h3 className="mb-0">£3.10</h3>
                <p className="mb-0">Hot & Spicy Mini Fillets</p>
              </li>
              <li className="ms-auto d-flex align-items-center">
                <span className="pluse-fa d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="col-12 col-md-4"  data-aos="fade-up" data-aos-duration="1200">
        <div className="card card-cover home-item-card h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100  p-3 p-md-4 py-4 text-white text-shadow-1">
            <p className="item-p">Chicken</p>
            <h4>Grilled Chicken <br />
              On Bamboo</h4>
            <img src="img/dish2.png" alt=""/>
            <ul className="d-flex list-unstyled mt-4">
              
              <li className="me-3 price">
                <h3 className="mb-0">£2.70</h3>
                <p className="mb-0">Hot & Spicy Mini Fillets</p>
              </li>
              <li className="ms-auto d-flex align-items-center">
                <span className="pluse-fa d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="col-12 col-md-4" data-aos="fade-up" data-aos-duration="800">
        <div className="card card-cover home-item-card h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100  p-3 p-md-4 py-4 text-white text-shadow-1">
            <p className="item-p">Chicken</p>
            <h4>Grilled Chicken <br />
              Drumsticks</h4>
            <img src="img/dish3.png" alt=""/>
            <ul className="d-flex list-unstyled mt-4">
              
              <li className="me-3 price">
                <h3 className="mb-0">£3.00</h3>
                <p className="mb-0">Hot & Spicy Mini Fillets</p>
              </li>
              <li className="ms-auto d-flex align-items-center">
                <span className="pluse-fa d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      


    </div>



  </div>
</section>

         )
        
        }
        }
        
        
        
        export default ProductDetails;