import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Allproducts from './Allproducts';
import Productdetails from './Productdetails';
import './App.css';

function App() {
  return (

<Header/>,
   <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Allproducts" component={Allproducts}/>
      <Route exact path="/Productdetails" component={Productdetails}/>
      </Switch>
   </BrowserRouter>

  );
}



export default App;
