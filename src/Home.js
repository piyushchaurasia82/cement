import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => (
  
   <>


    <Header/>
    
    <div id="demo" className="carousel slide" data-ride="carousel">

    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img/homepage_1589207033914.jpeg"/>
      </div>
      <div className="carousel-item">
        <img src="img/homepage_1566658122724.png"/>
      </div>
      <div className="carousel-item">
        <img src="img/homepage_1589207033914.jpeg"/>
      </div>
    </div>
    
    <NavLink className="carousel-control-prev" to="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </NavLink>
    <NavLink className="carousel-control-next" to="#demo" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </NavLink>
  </div>






    <Footer/>
   </>

);

export default Home;
