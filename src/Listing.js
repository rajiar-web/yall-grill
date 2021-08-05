import React from 'react';
import axios from 'axios';
class Listing extends React.Component 
{
   
    render() 
    {
 
      return(
         
       
        <div>

<section className="listing-page">
  <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-subcat-search mt-4 p-3 p-lg-0">
        <div className="container-fluid">
          <form className="d-flex d-lg-none media-search">
            <input className="form-control search-form-ctrl me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-search-ico" type="submit"><i className="fas fa-search"></i></button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="nav-togile-ico"><i className="fas fa-filter"></i> Filter</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">German donor kebab</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Grilled chicken</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Burger Meat </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cold Drinks </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pasta </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pizza </a>
              </li>
              </ul>
            <form className="d-lg-flex d-none">
              <input className="form-control search-form-ctrl me-2" type="search" placeholder="Search" aria-label="Search"/  >
              <button className="btn btn-search-ico" type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
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

        </div>

)
        
}
}



export default Listing;