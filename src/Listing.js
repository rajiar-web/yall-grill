import React from 'react';
import axios from 'axios';
class Listing extends React.Component 
{
   
  constructor()
  {
     super();
     this.state={
        products:[],
        category:[],
      
       
        
     }
   
  }


 onItemClick(e){
  e.preventDefault();
  // this.setState({ input: e.target.value });
  // this.setState({cinput: e.target.value})
  alert("hi");
 }

  componentDidMount()
  {
    
   
     
      axios.get('http://127.0.0.1/yaalgrill/Api_controller/get_category')
    
     .then(response=> {
         const ct = response.data;
        this.setState({category:response.data})
      console.log(this.state.category)
       
     })
     .catch(error => console.log(error));

    


     axios.get('http://127.0.0.1/yaalgrill/Api_controller/get_products')
    
     .then(response=> {
         const pt = response.data;
        this.setState({products:response.data})
      console.log(this.state.products)
       
     })
     .catch(error => console.log(error));
   
   

  }
  render()
  {
    const baseurl = 'http://127.0.0.1/yaalgrill/Api_controller/get_category';
 
    const myDivStyle = {
     maxwidth: '100%',
     height: 'auto'
    
   };
 
 
 
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
            {
         this.state.category.map((ctt,k)=>{
          
                             return (
              <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={this.onItemClick} value={ctt.c_id}>{ctt.c_category}</a>
              </li>
               )  
                    
              })
              }
            
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
    {
         this.state.products.map((ptt,k)=>{
          
                             return (
      <div className="col-12 col-md-4"  data-aos="fade-up" data-aos-duration="700">
        <div className="card card-cover home-item-card h-100 overflow-hidden text-white rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100 p-3 p-md-4 py-4 text-white text-shadow-1">
            <p className="item-p">Chicken</p>
            <a href={"/productdetails/"+ptt.p_slug}>
            <h4>{ptt.p_title}
            </h4>
            </a>
            <img src={window.baseurl+"assets/front/img/products/"+ptt.p_image} alt=""/>
            <ul className="d-flex list-unstyled mt-4">
              
              <li className="me-3 price">
                <h3 className="mb-0">£{ptt.p_price}</h3>
                <p className="mb-0">{ptt.p_subtitle}</p>
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

)  
                    
})
}
    


    </div>



  </div>
</section>

        </div>

)
        
}
}



export default Listing;