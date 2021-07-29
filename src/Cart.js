import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

function Cart() {
    return(

        <>
        <Header/>

        <section className="mt-5 mb-5 cart">
            <div className="container-fluid pl-lg-5 pr-lg-5">
                <div  className="row accordion" id="accordionExample">
                    <div  className="cart_page">
                        <div  className="col-md-9 cart_display  " >
                            <ul  id="wizardStatus">
                            <li  className="current" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">My Cart</li>
                            <li  className=" collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Contact Details</li>
                            <li >Payment Details</li>
                            <li >Confirmation</li>
                            </ul>
                        </div>
                        <div  className="col-md-9">
                            <div  className="crt_pdge cart_display collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div  className="bd_seprate">
                                <div  className="cart_table head1">
                                    <div  className="col-md-4 col-xs-4 pds">
                                        <p >Product Details</p>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        <p >Type</p>
                                    </div>
                                    <div  className="col-md-1 col-xs-1">
                                        <p >Quantity</p>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        <p >Unit Price</p>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        <p >Total Price</p>
                                    </div>
                                    <div  className="col-md-1 col-xs-1">
                                        <p >Action</p>
                                    </div>
                                </div>
                                
                                <div  className="cart_table hdbids">
                                    <div  className="col-md-4 col-xs-4">
                                        <div  className="pro_img">
                                        <img  src={"img/Shree-Jung-rodhak-PPC-Cement.jpg"}/></div>
                                        <div  className="pro_content">
                                        <h3 >Shree Jung rodhak PPC Cement</h3>
                                                                                
                                    </div>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        
                                        <div  className="wt">
                                        <p > - </p>
                                        </div>
                                    </div>
                                    <div  className="col-md-1 col-xs-1">
                                        <div  className="qty"><input  min="0" name="quantity" placeholder="0" type="number" className="ng-untouched ng-pristine ng-valid"/></div>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        <div  className="ut_price">
                                        <p >₹337</p>
                                        </div>
                                    </div>
                                    <div  className="col-md-2 col-xs-2">
                                        <div  className="tt_price mc_sd1">
                                        <p >₹19,546</p>
                                        
                                        </div>
                                    </div>
                                    <div  className="col-md-1 col-xs-1">
                                        <ul  className="act">
                                        
                                        <li ><NavLink to="#">Remove</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <div  className="check_button">
                                <ul >
                                    <li >
                                    <NavLink to="#" className="prev12 aerobtn"  > Continue Shopping</NavLink>
                                    </li>
                                    
                                    <li ><NavLink to="#" className="next12 aerobtn">Continue to Checkout</NavLink></li>
                                </ul>
                            </div>
                            </div>


                            <div  className="crt_pdge cart_display collapse " className="crt_pdge cart_display collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="bd_seprate">
                                <div className="panel-body">
                                    <div className="col-md-12 col-sm-12">
                                        <h3>Delivery Address</h3>
                                    </div>
                                    <form autocomplete="false" novalidate="" className="ng-untouched ng-pristine ng-valid">
                                        <div className="">
                                        <div className="col-md-12">
                                            <ul className="prof_edit">
                                                <li>Address:</li>
                                                <li>
                                                    <div className="radio radio-primary"><input checked="" id="radio1" name="radio1" type="radio" value="1"/><label for="radio1"> Home </label></div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-primary"><input id="radio2" name="radio1" type="radio" value="2"/><label for="radio2"> Work </label></div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-primary"><input id="radio3" name="radio1" type="radio" value="3"/><label for="radio3"> Site </label></div>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="">
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="email">Name *</label>
                                            <input className="form-control input_vg ng-untouched ng-pristine ng-valid" id="email" name="biller_name" placeholder="" type="text"/>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="email">Mobile No. *</label>
                                            <input className="form-control input_vg ng-untouched ng-pristine ng-valid" id="email" name="phone" placeholder="" type="text"/>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="pincode">Email *</label>
                                            <input className="form-control input_vg ng-untouched ng-pristine ng-valid" id="pincode" name="email112" placeholder="" type="text"/>
                                        </div>
                                        </div>
                                        <div className="">
                                        <div className="form-group col-md-8 col-sm-8">
                                            <label for="country">Delivery Address *</label>
                                            <textarea className="form-control input_vg3 ng-untouched ng-pristine ng-valid" id="delivary" name="address" placeholder="" rows="3"></textarea>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="name">City *</label>
                                            <singleselect>
                                                <div className="">
                                                    <div className="">
                                                    <input autocomplete="off" className="form-control input_vg selecta ng-untouched ng-pristine ng-valid" id="city" placeholder="" type="text" value=""/>
                                                    </div>
                                                </div>
                                            </singleselect>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4 ">
                                            <label for="email">Postal Code *</label>
                                            <singleselectpincode>
                                                <div className="">
                                                    <div className="">
                                                    <input autocomplete="off" className="form-control input_vg selecta ng-untouched ng-pristine ng-valid" id="pincode" placeholder="" type="text" value=""/>
                                                    </div>
                                                </div>
                                            </singleselectpincode>
                                        </div>
                                        </div>
                                        <div className="">
                                        <div className="form-group col-md-8 col-sm-8">
                                            <label for="country">Order Notes </label>
                                            <textarea className="form-control input_vg3 ng-untouched ng-pristine ng-valid" id="delivery_notes" name="delivery_notes" placeholder="Optional Instructions for Order, delivery contact person..." rows="3"></textarea>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="sitepersonname">Site Person's Name</label>
                                            <input className="form-control input_vg ng-untouched ng-pristine ng-valid" id="sitepersonname" name="site_person_name" placeholder="" type="text"/>
                                        </div>
                                        <div className="form-group col-md-4 col-sm-4">
                                            <label for="email">Site Person's Mobile No</label>
                                            <input className="form-control input_vg ng-untouched ng-pristine ng-valid" id="email" name="phone1" placeholder="" type="text"/>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="col-md-12 col-sm-12">
                                        <h3>Billing Address</h3>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="checkbox"><label><input checked="true" id="check" type="checkbox" value=""/><span className="cr">
                                        <i className="cr-icon glyphicon glyphicon-ok fa fa-check"></i></span> Billing address is same as shipping address </label></div>
                                    </div>
                                    
                                    <div className="col-md-12 col-sm-12">
                                        <div className="checkbox"><label><input id="gst" type="checkbox" value=""/><span className="cr"><i className="cr-icon glyphicon glyphicon-ok fa fa-check"></i></span> Do you have GST Number? </label></div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div  className="check_button">
                                <ul >
                                    <li >
                                    <NavLink to="#" className="prev12 aerobtn"  > Continue Shopping</NavLink>
                                    </li>
                                    
                                    <li ><NavLink to="#" className="next12 aerobtn">Continue to Checkout</NavLink></li>
                                </ul>
                            </div>
                            </div>


                            <div  className="crt_pdge cart_mobi">
                            <div  className="bd_seprate">
                                
                                <div  className="mobi_cart">
                                    <div  className="col-xs-3">
                                        <div  className="mobi_prod">
                                        <img src={"img/Shree-Jung-rodhak-PPC-Cement.jpg"}/></div>
                                    </div>
                                    <div  className="col-xs-9">
                                        <div  className="row">
                                        <div  className="col-xs-9">
                                            <div  className="mobi_head">
                                                <h3 >Shree Jung rodhak PPC Cement</h3>
                                            </div>
                                        </div>
                                        <div  className="col-xs-3">
                                            <div  className="del_btn">
                                                <NavLink to="#"><span  aria-hidden="true" className="">Remove</span></NavLink>
                                            </div>
                                        </div>
                                        <div  className="col-xs-6">
                                            
                                            <div  className="wt">
                                                <p > - </p>
                                            </div>
                                        </div>
                                        <div  className="col-xs-6">
                                            <div  className="qty">
                                                <input  name="quant1ity" placeholder="0" type="number" min="50" className="ng-untouched ng-pristine ng-valid"/>
                                            </div>
                                        </div>
                                        <div  className="col-xs-5">
                                            <div  className="tt_price">
                                                <p >₹19,546</p>
                                                
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                            <div  className="check_button_mobi mob3">
                                <ul >
                                    <li ><NavLink to="#" className=""  >Continue Shopping</NavLink></li>
                                    
                                    <li ><NavLink to="#" className="">Checkout</NavLink></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div  className="col-md-3">
                            <div  className="discnt">
                            <div  className="subtotal">
                                <div  className="col-md-6 col-xs-6 cost">
                                    <ul >
                                        <li >Product Total</li>
                                        <li >Shipping</li>
                                        
                                        <li  className="gst_cursor"><i  className="fa fa-angle-down"></i> Total GST</li>
                                        <li  className="br_slide">GST on Products</li>
                                        <li  className="br_slide">GST on Shipping</li>
                                        
                                    </ul>
                                </div>
                                <div  className="col-md-6 col-xs-6 price">
                                    <ul >
                                        <li >₹15,270</li>
                                        <li >₹0</li>
                                        
                                        <li >₹4,276</li>
                                        <li  className="br_slide">₹4,276</li>
                                        <li  className="br_slide">₹0</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div  className="col-md-6 col-xs-6 tprice">
                                <p >Sub Total</p>
                            </div>
                            <div  className="col-md-6 col-xs-6 tprice">
                                <p  className="cst">₹19,546</p>
                            </div>
                            <div  className="">
                                <div  className="col-md-6 col-xs-6 tprice ">
                                    <p > Total Payable </p>
                                </div>
                                <div  className="col-md-6 col-xs-6 tprice ">
                                    <p > ₹19,546 </p>
                                </div>
                            </div>
                            <div  className="">
                                <div  className="col-md-6 col-xs-6 tprice tsave">
                                    <p >You Save!</p>
                                </div>
                                
                                <div  className="col-md-6 col-xs-6 tprice tsave">
                                    
                                    <p  className="cst">₹0</p>
                                </div>
                                
                            </div>
                            <div  className="">
                                
                            </div>
                            </div>
                            <div  className="discnt">
                            <h3 >Apply Coupon Code</h3>
                            <div  className="fields">
                                <form   className="ng-untouched ng-pristine ng-valid">
                                    <input  name="coupen" type="text" className="ng-untouched ng-pristine ng-valid"/><button  name="" type="button">Apply</button>
                                </form>
                                <span  className="coupan_msg"></span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            <Footer/>
         </>

    );
}


export default Cart;