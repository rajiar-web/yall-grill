import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Listing from "./Listing";
import ProductDetails from "./ProductDetails";
import Newsletter from "./Newsletter";
import Header from "./inc/Header";import Footer from "./inc/Footer";
const routing = (
  
  <Router>
    <div>
      <Header />    
      <Switch>
        <Route exact path="/" component={App} />

     
        <Route path="/listing" component={Listing} />
        <Route path="/productdetails" component={ProductDetails} />
        <Route path="/newsletter" component={Newsletter} />
        {/* <Route component={Notfound} /> */}
      </Switch>
      <Footer />    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

