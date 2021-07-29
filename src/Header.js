import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
return (

  <>

  <header>
    <div className="container-fluid pl-lg-5 pr-lg-5">
      <div className="row pt-3 pb-3">
        <div className="col-md-3 col-3 d-flex d-lg-none d-md-none align-items-center">
          <i className="fa fa-bars text-white"></i>
        </div>
        <div className="col-md-3 col-6 d-flex align-items-center">
          <NavLink to="Home">
            <img src={"img/logo.png"} className="w-75"/>
          </NavLink>
        </div>
        <div className="col-md-3 col-3 d-flex d-lg-none d-md-none align-items-center justify-content-end">
          <NavLink to="Cart">
            <img src={"img/cart.png"} style={{width: "21px"}}/>
          </NavLink>
        </div>
        <div className="col-md-6 d-flex align-items-center w-100">
          <div className="d-flex top_ser w-100">
            <input type="text" name="" placeholder="Search for Construction materials"/>
            <button>search</button>
          </div>
        </div>
        <div className="col-md-3 top_link_cart d-lg-flex d-md-flex d-none ">
          <div className="text-white d-flex">
            
              <img src={"img/user.png"} className="mr-2 mt-1"/>
              <div>
                <NavLink to="Login">
                <p className="mb-0">My Account</p>
                <span>Login/Signup</span>
                </NavLink>
              </div>
            
          </div>
          <div className="text-white d-flex">
            <img src={"img/cart.png"} className="mr-2 mt-1"/>
            <div>
              <NavLink to="Cart"><p className="mb-0">My Cart</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0 bg-white side_bar" >
      <span className="close_side d-flex d-lg-none d-md-none">
        <i className="fa fa-times"></i>
      </span>
      <div className="row w-100 mt-5 mt-lg-0 ml-0 mr-0 pt-3 pb-3">
        <div className="col-md-12">
          <ul className="p-0 mb-0">
            <li>
              <NavLink to="Allproducts">cement
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">brands
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">best selling
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">material items
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">material items
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">material items
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
            <li>
              <NavLink to="Allproducts">material items
                <i className="fa fa-angle-down"></i>
              </NavLink>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </>
  );
}

export default Header;