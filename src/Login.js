import React from 'react';

class Login extends React.Component 
{
    

    render() 
    {
         
      return(
        
        <div>
  
  <section class="login">
         <div class="container">
            <div class="row d-flex justify-content-center">
               <div class="col-11 col-lg-8">
                  <h2 class="title-h2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Login Now</h2>
                  <p class="mt-4 title-p" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">Get access to your Orders, Wishlist and Recommendations</p>
               </div>
               <div class="col-11 col-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1500">
                  <form action="" class="form-sec p-3 p-lg-5 ">
              
<ul class="nav nav-tabs nav-fill mb-3 mb-lg-4" id="ex1" role="tablist">
   <li class="nav-item" role="presentation">
     <a class="nav-link active" id="ex2-tab-1" data-mdb-toggle="tab" href="#ex2-tabs-1" role="tab" aria-controls="ex2-tabs-1" aria-selected="true" >Login</a>
   </li>
   <li class="nav-item" role="presentation">
     <a class="nav-link" id="ex2-tab-2" data-mdb-toggle="tab" href="#ex2-tabs-2" role="tab" aria-controls="ex2-tabs-2" aria-selected="false">Register</a>
   </li>
 </ul>

 <div class="tab-content" id="ex2-content">
   <div class="tab-pane fade show active" id="ex2-tabs-1" role="tabpanel" aria-labelledby="ex2-tab-1" >
   <div class="col-12" id="key-pwd">
      <div class="col">
         <label for="username" class="form-label mt-3">Username </label>
         <input type="text" class="form-control" id="username" placeholder="Username"/>
      </div>
      <div class="col">
         <label for="pwd" class="form-label mt-3">Password</label>
         <input type="password" class="form-control" id="pwd" placeholder="Password"/>
      </div>
      <div class="form-check d-flex justify-content-center mt-4">
         <input class="form-check-input me-2" type="checkbox" value="" id="remember-pwd"/>
         <label class="form-check-label" for="remember-pwd">
            Remember me
         </label>
       </div>
      <div class="col-12 text-center mt-3">
         <button class="btn btn-login login-signup">Login</button>
      </div>
      <div class="col-12 text-center mt-3">
         <a href="#" id="forget-pwd">Lost your password?</a>
      </div>
    </div>



    <div class="col-12" id="find-pwd" style={{display: "none"}}>
  
      <div class="col">
         <label for="forget-pwd" class="form-label">Enter Email Address </label>
         <input type="text" class="form-control" id="forget-pwd" placeholder="Email address"/>
      </div>
      <div class="col-12 text-center mt-3">
         <button class="btn btn-login login-signup">Email me password</button>
      </div>
   </div>

   </div>
   <div class="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2" >
   <div class="col-12" id="register-otp">
      <div class="row row-cols-1 row-cols-lg-2">
         <div class="col">
            <label for="fname" class="form-label mt-3">First Name  </label>
            <input type="text" class="form-control" id="fname" placeholder="First Name:"/>
         </div>
         <div class="col">
            <label for="lname" class="form-label mt-3">Last Name  </label>
            <input type="text" class="form-control" id="lname" placeholder="Last Name:"/>
         </div>
         <div class="col">
            <label for="ph-no" class="form-label  mt-3">Phone Number  </label>
            <input type="text" class="form-control" id="ph-no" placeholder="Phone Number:"/>
         </div>
         <div class="col">
            <label for="email" class="form-label mt-3">Email address  </label>
            <input type="text" class="form-control" id="email" placeholder="Email:"/>
         </div>
      </div>
      <div class="row mt-3">
         <div class="col">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" placeholder="Address line 1:"/>
            <input type="text" class="form-control mt-3" placeholder="Address line 2:"/>
            <input type="text" class="form-control mt-3" placeholder="City:"/>
            <input type="text" class="form-control mt-3" placeholder="State/Province/Region:"/>
            <input type="text" class="form-control mt-3" placeholder="ZIP:"/>
            <input type="text" class="form-control mt-3 disable" placeholder="United Kingdom:" disabled="" readonly=""/>
            <input type="password" class="form-control mt-3" placeholder="Create password:"/>
         </div>
         <div class="col-12 text-center mt-3 mt-lg-4">
            <button class="btn btn-login login-signup" id="register-btn">Next</button>
         </div>
      </div>
   </div>
   <div class="col-12" id="register-otp-fld" style={{display: "none"}}>
  
      <div class="row mt-3">
         <div class="col">
            <label for="otp" class="form-label">Enter OTP</label>
            <input type="text" class="form-control" placeholder="OTP send to mail"/>
         </div>
         <div class="col-12 text-center mt-3 mt-lg-4">
            <button class="btn btn-login login-signup">SIGN UP</button>
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