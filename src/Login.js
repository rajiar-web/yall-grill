import React from 'react';

class Login extends React.Component 
{
    

    render() 
    {
         
      return(
        
        <div>
  
  <section className="login">
         <div className="container">
            <div className="row d-flex justify-content-center">
               <div className="col-11 col-lg-8">
                  <h2 className="title-h2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Login Now</h2>
                  <p className="mt-4 title-p" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">Get access to your Orders, Wishlist and Recommendations</p>
               </div>
               <div className="col-11 col-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500">
                  <form action="" className="form-sec p-3 p-lg-5 ">
              
<ul className="nav nav-tabs nav-fill mb-3 mb-lg-4" id="ex1" role="tablist">
   <li className="nav-item" role="presentation">
     <a className="nav-link active" id="ex2-tab-1" data-mdb-toggle="tab" href="#ex2-tabs-1" role="tab" aria-controls="ex2-tabs-1" aria-selected="true" >Login</a>
   </li>
   <li className="nav-item" role="presentation">
     <a className="nav-link" id="ex2-tab-2" data-mdb-toggle="tab" href="#ex2-tabs-2" role="tab" aria-controls="ex2-tabs-2" aria-selected="false">Register</a>
   </li>
 </ul>

 <div className="tab-content" id="ex2-content">
   <div className="tab-pane fade show active" id="ex2-tabs-1" role="tabpanel" aria-labelledby="ex2-tab-1" >
   <div className="col-12" id="key-pwd">
      <div className="col">
         <label for="username" className="form-label mt-3">Username </label>
         <input type="text" className="form-control" id="username" placeholder="Username"/>
      </div>
      <div className="col">
         <label for="pwd" className="form-label mt-3">Password</label>
         <input type="password" className="form-control" id="pwd" placeholder="Password"/>
      </div>
      <div className="form-check d-flex justify-content-center mt-4">
         <input className="form-check-input me-2" type="checkbox" value="" id="remember-pwd"/>
         <label className="form-check-label" for="remember-pwd">
            Remember me
         </label>
       </div>
      <div className="col-12 text-center mt-3">
         <button className="btn btn-login login-signup">Login</button>
      </div>
      <div className="col-12 text-center mt-3">
         <a href="#" id="forget-pwd">Lost your password?</a>
      </div>
    </div>



    <div className="col-12" id="find-pwd" style={{display: "none"}}>
  
      <div className="col">
         <label for="forget-pwd" className="form-label">Enter Email Address </label>
         <input type="text" className="form-control" id="forget-pwd" placeholder="Email address"/>
      </div>
      <div className="col-12 text-center mt-3">
         <button className="btn btn-login login-signup">Email me password</button>
      </div>
   </div>

   </div>
   <div className="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2" >
   <div className="col-12" id="register-otp">
      <div className="row row-cols-1 row-cols-lg-2">
         <div className="col">
            <label for="fname" className="form-label mt-3">First Name  </label>
            <input type="text" className="form-control" id="fname" placeholder="First Name:"/>
         </div>
         <div className="col">
            <label for="lname" className="form-label mt-3">Last Name  </label>
            <input type="text" className="form-control" id="lname" placeholder="Last Name:"/>
         </div>
         <div className="col">
            <label for="ph-no" className="form-label  mt-3">Phone Number  </label>
            <input type="text" className="form-control" id="ph-no" placeholder="Phone Number:"/>
         </div>
         <div className="col">
            <label for="email" className="form-label mt-3">Email address  </label>
            <input type="text" className="form-control" id="email" placeholder="Email:"/>
         </div>
      </div>
      <div className="row mt-3">
         <div className="col">
            <label for="address" className="form-label">Address</label>
            <input type="text" className="form-control" placeholder="Address line 1:"/>
            <input type="text" className="form-control mt-3" placeholder="Address line 2:"/>
            <input type="text" className="form-control mt-3" placeholder="City:"/>
            <input type="text" className="form-control mt-3" placeholder="State/Province/Region:"/>
            <input type="text" className="form-control mt-3" placeholder="ZIP:"/>
            <input type="text" className="form-control mt-3 disable" placeholder="United Kingdom:" disabled="" readonly=""/>
            <input type="password" className="form-control mt-3" placeholder="Create password:"/>
         </div>
         <div className="col-12 text-center mt-3 mt-lg-4">
            <button className="btn btn-login login-signup" id="register-btn">Next</button>
         </div>
      </div>
   </div>
   <div className="col-12" id="register-otp-fld" style={{display: "none"}}>
  
      <div className="row mt-3">
         <div className="col">
            <label for="otp" className="form-label">Enter OTP</label>
            <input type="text" className="form-control" placeholder="OTP send to mail"/>
         </div>
         <div className="col-12 text-center mt-3 mt-lg-4">
            <button className="btn btn-login login-signup">SIGN UP</button>
         </div>
      </div>
   </div>
   </div>
 </div>

            </form>
               </div>
            </div>
         </div>
      </section>
       
        </div>
        )
        
    }
    }
    
    
    
    export default Login;