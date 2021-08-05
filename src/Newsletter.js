import React from 'react';
import axios from 'axios';
// import {toast,ToastContainer} from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class NewsLetter extends React.Component
{
   constructor(props){
      super(props);
 
      this.state = {
          fields: {},
          errors: {},
          email: '',
         
      }
     
       this.handleChange = this.handleChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
      toast.configure();
   }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

//alert('test');
 
 
 
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Please fill out this field.";
      }

      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }  
     
      this.setState({errors: errors});
     
    //  this.state.errors["email"]  

     return formIsValid;
 }
  
 newsSubmit(e){
      e.preventDefault();

      if(this.handleValidation())
      {
        
         let apiUrl;
         let fields = this.state.fields;
         apiUrl = 'http://127.0.0.1/yaalgrill/insert-newsLetter';
         let formData = new FormData();
         formData.append('inputEmail', fields['email']);
       
          console.log(formData);
         axios({
           method: 'post',
           url: apiUrl,
           data: formData,
           config: { headers: {'Content-Type': 'application/json' }}
           })
           .then ((response) => {
            //console.log(response);
            var resData = response.data;
           
              
              if (resData.msg === 'success') {
               toast.success("Well Done! We will get in touch with you as soon as possible.");
               this.resetForm();
               } else  {
                  toast.error(resData.msg);
               
            }
            
             
     
           })
           .catch(function (response) {
               //handle error
               console.log(response)
           });
     
      }else{
         toast.error(this.state.errors["email"]);
       //  alert("Form has errors.")
      }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;   
      this.setState({fields});
  }

  
    onFormSubmit(e) {
      e.preventDefault();
      console.log(this.state.startDate)
      
    }
   resetForm()
   {
      this.state = {
     
          fields: {},
          errors: {},
         
          email: '',
        
      }
   }
   
   render(){
     
return (
   
 <div>

<ToastContainer />
<form name="newsform" className="newsform" onSubmit= {this.newsSubmit.bind(this)}>
         <div className="input-group email-field mt-5 position-relative">
          <input type="text" className="form-control custom-form-control" id="email" name="email" placeholder="ENTER EMAIL ID" aria-label="Recipient's username with two button addons" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
          <button type="submit" name="submit" className="btn btn-subscribe position-absolute end-0">Subscribe</button>
         </div>
 </form>
      </div>
      );
}
}
export default NewsLetter;