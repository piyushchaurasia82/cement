import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

function Footer() {
  return (
   <>

  <footer className="mt-5 pt-5 pb-5">
    <div className="container-fluid pl-lg-5 pr-lg-5">

      <div className="row mb-5">
        <div className="col-md-4 w-100">
          <p>Get the latest trending news</p>
          <div className="d-flex top_ser w-100">
            <input type="text" name="" placeholder="Email"/>
            <button style={{width:'23%'}}>Subscribe</button>
          </div>
        </div>
        <div className="col-md-4 w-100 text-center">
          <p>Contact Us</p>
          <span className="mr-4">1234567890</span>
          <span>|</span>
          <span className="ml-4">EMAIL</span>
        </div>
      </div>
      <hr/>
      <div className="row mt-5">
        <div className="col-md-3">
          <p>ABOUT</p>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </li>
            
          </ul>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
            
            </div>
            <div className="col-md-4">
              <p>POLICIES</p>
              <ul>
                <li>
                  <NavLink to="#">Privacy policy </NavLink>
                </li>
                <li>
                  <NavLink to="#">Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="#">Shipping& returns</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <p>Follow us</p>
          <ul className="d-flex justify-content-between">
            <li>
              <NavLink to="#">
                <i className="fa fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="fa fa-instagram"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="fa fa-twitter"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="fa fa-youtube"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <section className="bottom_bar d-block d-lg-none d-md-none" >
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <NavLink to="#">
            <i className="fa fa-home"></i>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to="#">
            <i className="fa fa-user"></i>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to="#">
            <i className="fa fa-shopping-cart"></i>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to="#">
            <i className="fa fa-heart"></i>
          </NavLink>
        </div>
      </div>
    </div>
  </section>

   </>
  );
}

export default Footer;
