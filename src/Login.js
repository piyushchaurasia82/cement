import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

function Login(){
    return(

        <>
        <Header/>

        <section className="mt-5 mb-5 pt-5 pb-5 login_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className="title">CUSTOMER LOGIN/SIGNUP</h2>
                        </div>
                        <div className="col-md-6">
                            <h6>REGISTERED CUSTOMERS</h6>
                            <hr/>
                            <p className="font_monst gry_col mb-4">If you have an account, sign in with your email address.</p>
                            <input type="number" name="number" placeholder="Phone Number" className="mb-4"/>
                            <input type="text" name="password" placeholder="OTP" className="mb-4"/>
                            <div className="d-flex justify-content-between">
                                <NavLink to="#" className="knw_btn">sign in</NavLink>
                                <NavLink to="#" className="knw_btn active">Resend OTP</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 mt-lg-0 mt-md-0 mt-5">
                            <h6>NEW CUSTOMERS</h6>
                            <hr/>
                            <p className="font_monst gry_col mb-4">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                            <input type="text" name="name" placeholder="Full Name" className="mb-4"/>
                            <input type="number" name="number" placeholder="Phone Number" className="mb-4"/>
                            <input type="number" name="agent code" placeholder="Agent Code" className="mb-4"/>
                            <input type="text" name="password" placeholder="OTP" className="mb-4"/>
                            <NavLink to="#" className="knw_btn">create an account</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
         </>

    );
}


export default Login;