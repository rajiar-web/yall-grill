import React, { Component,useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
class Header extends React.Component 
{
   componentDidMount() {
      // or simply just AOS.init();
      AOS.init({
        // initialise with other settings
        duration : 2000
      });
    }
  
    render() 
    {
      return(
        <div>
          
          <header>
  <nav className="navbar navbar-custom navbar-expand-md navbar-dark fixed-top scrolled-bg aos-init aos-animate scrolled" data-aos="fade-in" data-aos-duration="800">
    <div className="container">
      <a className="navbar-brand" href="#"> <img src="img/logo.png" className="logo" alt="" /> </a>
      <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center">
        <li className="nav-item d-flex d-md-none">
          <a className="nav-link profile-navbg d-flex align-items-center justify-content-center me-2" aria-current="page" href="#"> <i className="far fa-user"></i> </a>
          <a className="nav-link profile-navbg d-flex align-items-center justify-content-center me-2" aria-current="page" href="#"><i className="fas fa-shopping-bag"></i></a>
        </li>
      </ul>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse bg-dark-media" id="navbarCollapse">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0 mt-4 mt-md-0">
          <li className="nav-item">
            <NavLink exact={true} className="nav-link link" onlyActiveOnIndex  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
           <NavLink exact={true} className="nav-link link" onlyActiveOnIndex  to="listing">our menu</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-start align-items-md-center r-info-nav">
          <li className="nav-item d-none d-md-flex">
            <a className="nav-link profile-navbg d-flex align-items-center justify-content-center me-2" aria-current="page" href="#"> <i className="far fa-user"></i> </a>
            <a className="nav-link profile-navbg d-flex align-items-center justify-content-center me-2" aria-current="page" href="#"><i className="fas fa-shopping-bag"></i></a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link float-start" href="#">
              <p className="text-end mb-0">Order by phone</p>
              <h4 className="mb-0">1-800-700-6003</h4> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
       
       
       
       
       
       
       
         
      
    
      </div>

      )
        
    }
}



export default Header;