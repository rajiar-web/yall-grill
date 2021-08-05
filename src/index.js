import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Listing from "./Listing";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Newsletter from "./Newsletter";
import Header from "./inc/Header";import Footer from "./inc/Footer";
window.baseurl = "http://127.0.0.1/yaalgrill/"
const routing = (
  
  <Router>
    <div>
      <Header />    
      <Switch>
        <Route exact path="/" component={App} />

     
        <Route path="/listing" component={Listing} />
        <Route path="/productdetails" component={ProductDetails} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/login" component={Login} />
        {/* <Route component={Notfound} /> */}
      </Switch>
      <Footer />    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

