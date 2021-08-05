import React from 'react'
import axios from 'axios';
class Home extends React.Component
{
  constructor()
   {
      super();
      this.state={
         slider:[],
         sliders:[],
        
         
      }
      
   }
   componentDidMount()
   {
     
    
      
      axios.get('http://127.0.0.1/yaalgrill/Api_controller/get_slider')
      .then(response=> {
          const slider = response.data;
         this.setState({sliders:response.data})
         //const slug  = this.props.match.params;
          console.log(this.state.sliders)
          //console.log(response.data);
      })
      .catch(error => console.log(error));

     
      

   }
   render()
   {
    const baseurl = 'http://127.0.0.1/yaalgrill/Api_controller/get_slider';
     const myDivStyle = {
      maxwidth: '100%',
      height: 'auto'
     
    };


 



    const sliderr =this.state.sliders
    return (
           
            <div>
           
 
                       
      
    
       
      
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    {
         this.state.sliders.map((ss,k)=>{
          // sliderr.map((ss,k)=>{
                             return ( 
      <div class="carousel-item active">
        <img src={window.baseurl+"assets/front/img/"+ss.s_image} class="d-block w-100" alt="..."/>
        <div class="carousel-caption slider-txt position-absolute top-50 start-50 translate-middle w-100" data-aos="fade-in" data-aos-duration="800">
          <h2>{ss.s_title}</h2>
        </div>
      </div>
     )  
                    
    })
    }
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


<section className="choose-try">
  <div className="container">
    <div className="row">
      <div className="col title-sec"  data-aos="fade-in" data-aos-duration="1500">
        <p>Choose and Try</p>
        <h3>From our menu</h3>
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
    <div className="row align-items-stretch g-4 pb-5">
      <div className="col-12 col-md-8"  data-aos="fade-up" data-aos-duration="700">
        <div className="card card-cover border-0 home-item-single h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100 p-md-5 p-3 py-4 text-white text-shadow-1">
            <h4><span> German </span><br />
              doner kebab</h4>
            <ul className="d-flex list-unstyled mt-4 mt-auto">
              
              <li className="me-3 price">
                <span className="special blur-bg float-start d-flex align-items-center justify-content-center ">
                  <h3 className="text-center">Our <br />
                  Specials</h3>
                </span>
              </li>
              <li className="ms-auto d-flex align-items-center">
                <button className="btn  btn-view hover-left">View All Menu</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
     
      <div className="col-12 col-md-4"  data-aos="fade-up" data-aos-duration="1300">
        <div className="card card-cover home-item-card h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100 p-3 p-md-4 py-4 text-white text-shadow-1">
            <p className="item-p">Chicken</p>
            <h4>Grilled Chicken <br />
              Legs With Chips</h4>
            <img src="img/dish4.png" alt=""/>
            <ul className="d-flex list-unstyled mt-4">
              
              <li className="me-3 price">
                <h3 className="mb-0">£2.00</h3>
                <p className="mb-0">Hot & Spicy Mini Fillets</p>
              </li>
              <li className="ms-auto d-flex align-items-center">
                <span className="shop-btn d-flex align-items-center justify-content-center">
                  <i className="fas fa-shopping-bag"></i>
                </span>
              </li>
            </ul>
          </div>  
        </div>
      </div>



    </div>


<div className="row order-online pt-5 mt-md-5 mt-0">
  <p  data-aos="fade-in" data-aos-duration="800">Free Delivery 7 Days A Week</p>
  <h4  data-aos="fade-in" data-aos-duration="1200">Order online</h4>
  <div className="col-12 col-md-10 m-auto">
    <div className="row">
  <div className="col-12 col-md-3 text-center py-3 py-md-5 my-3 my-md-5 steps-block"  data-aos="fade-up" data-aos-duration="700">
    <span className="online-steps d-flex justify-content-center m-auto align-items-center"> <img src="img/step1.svg" alt=""/> </span>
    <p className="steps-p mt-3  ">Choose <br />
      Your Item</p>
  </div>
  <div className="col-12 col-md-3 text-center py-3 py-md-5 my-3 my-md-5 steps-block" data-aos="fade-up" data-aos-duration="1300">
    <span className="online-steps d-flex justify-content-center m-auto align-items-center"> <img src="img/step2.svg" alt=""/> </span>
    <p className="steps-p mt-3  ">Make  <br />
      Payment Online</p>
  </div>
  <div className="col-12 col-md-3 text-center py-3 py-md-5 my-3 my-md-5 steps-block"  data-aos="fade-up" data-aos-duration="800">
    <span className="online-steps d-flex justify-content-center m-auto align-items-center"> <img src="img/step3.svg" alt=""/> </span>
    <p className="steps-p mt-3  ">Deliver Item <br />
      Right To Your <br />
     Doorstep</p>
  </div>
  <div className="col-12 col-md-3 text-center py-3 py-md-5 my-3 my-md-5 steps-block" data-aos="fade-up" data-aos-duration="1200">
    <span className="online-steps d-flex justify-content-center m-auto align-items-center"> <img src="img/step4.svg" alt=""/> </span>
    <p className="steps-p mt-3  ">Enjoy <br />
      The Taste</p>
  </div>
</div>
</div>
</div>

<div className="row g-4">
  <div className="col-12 col-md-6"  data-aos="fade-up" data-aos-duration="700">
    <div className="card card-cover border-0 items-category items-category-1 h-100 overflow-hidden text-white rounded-5 shadow-lg">
      <div className="d-flex flex-column h-100 p-md-5 p-3 py-4 text-white text-shadow-1">
        <h5>Special Double</h5>
        <h3 className="mb-5 pb-3 pb-lg-5">Burger Meat</h3>
        <ul className="d-flex list-unstyled mt-auto pt-3 pt-lg-5 ">
          
          <li className="d-flex align-items-center">
            <button className="btn hover-left btn-view">Order Now !</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6"  data-aos="fade-up" data-aos-duration="1200">
    <div className="card card-cover border-0 items-category items-category-2 h-100 overflow-hidden text-white rounded-5 shadow-lg">
      <div className="d-flex flex-column h-100 p-md-5 p-3 py-4 text-white text-shadow-1">
        <h5>We Serve Passion</h5>
        <h3 className="mb-5 pb-3 pb-lg-5">Doner Kebab</h3>
        <ul className="d-flex list-unstyled mt-auto pt-3 pt-lg-5  ">
          
          <li className="d-flex align-items-center">
            <button className="btn hover-left btn-view">Order Now !</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6"  data-aos="fade-up" data-aos-duration="900">
    <div className="card card-cover border-0 items-category items-category-3 h-100 overflow-hidden text-white rounded-5 shadow-lg">
      <div className="d-flex flex-column h-100 p-md-5 p-3 py-4 text-white text-shadow-1">
        <h5>Deliciousness</h5>
        <h3 className="mb-5 pb-3 pb-lg-5">Tasty Wrap</h3>
        <ul className="d-flex list-unstyled mt-auto  pt-3 pt-lg-5  ">
          
          <li className="d-flex align-items-center">
            <button className="btn hover-left btn-view">Order Now !</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6"  data-aos="fade-up" data-aos-duration="1800">
    <div className="card card-cover border-0 items-category items-category-4 h-100 overflow-hidden text-white rounded-5 shadow-lg">
      <div className="d-flex flex-column h-100  p-md-5 p-3 py-4 text-white text-shadow-1">
        <h5>Hurry Up!</h5>
        <h3 className="mb-5 pb-3 pb-lg-5">Limited Offers</h3>
        <ul className="d-flex list-unstyled mt-auto pt-3 pt-lg-5 ">
          
          <li className="d-flex align-items-center">
            <button className="btn hover-left btn-view">Order Now !</button>
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
   
      export default Home;
      