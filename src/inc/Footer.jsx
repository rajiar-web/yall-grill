import React, { useState }  from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsLetter from '../Newsletter';
toast.configure();

function Footer() 
{

    
    
    
      
	
        return(
           <div>
         <footer>
         <div className="container">
         <div className="container">
    <div className="row">
      <div className="col-12 col-md-3" data-aos="fade-in" data-aos-duration="800">
        <h3>LET’S GET TOGETHER</h3>
        <ul>
          <li>60 East 65Th Street, NY</li>
          <li>Mon - Sat: 11AM - 11PM</li>
          <li>Sun: 11AM - 08PM</li>
          <li>Mon - Sat: 01PM - 10PM</li>
        </ul>

        <div className="col my-4">
          <p className="mb-0">Order by phone</p>
          <h3 className="h3-active">1-800-700-6003</h3>
        </div>
        <div className="col my-4">
          <img src="img/payment.svg" className="img-fluid payment" alt=""/>
        </div>
      </div>
      <div className="col-12 col-md-6 text-center" data-aos="fade-in" data-aos-duration="1300">
          <img src="img/footer-logo.svg" className="img-fluid footerlogo mb-4" alt=""/>
          <h3 className="text-center mb-3">Stay informed about special offers</h3>
          <h3 className="h3-active text-center">Subscribe To The Newsleter</h3>
          
        
        <NewsLetter/>

      </div>
      <div className="col-12 col-md-3 r-side-footer"  data-aos="fade-in" data-aos-duration="1000">
        <h3>QUICK MENU</h3>
        <ul>
          <li>Beef Burgers</li>
          <li>Chicken Burgers</li>
          <li>Plant-Based Burgers</li>
          <li>Sides</li>
          <li>Drinks</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  </footer>
<section className="bot-footer py-4">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-5">
        <p>©2021 by yaal grill. All rights resereved</p>
      </div>
      <div className="col-12 col-md-7">
          <div className="col d-flex justify-content-md-end justify-content-center mt-4 mt-md-0">
            <ul className="mx-4 ms-0 ms-md-4 d-flex mob-foot">
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-youtube"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-linkedin-in"></i></li>
            </ul>

            <p>Powered by <a href="#"> Hintt</a></p>
          </div>
      </div>
    </div>
  </div>
</section>


<a className="scroll-top-arrow wave" style={{display: "none"}}> <i className="fa fa-angle-up"> </i> </a>

</div>
      )
        
    
}



export default Footer;

