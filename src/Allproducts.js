import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Allproducts() {
return (

	<>
	<Header/>

	<section className="mt-5 mb-5  mb-5">
		<div className="container-fluid pl-lg-5 pr-lg-5">
			<div className="row">
				<div className="col-md-12">
					<p>
						<NavLink to="#">
							<span>Home</span>
						</NavLink>
						<span>/</span>
						<NavLink to="#">
							<span>Cement</span>
						</NavLink>
						<span>/</span>
						<NavLink to="#">
							<span>OPC 53</span>
						</NavLink>
						
					</p>

				</div>
			</div>
			<div className="row">
				<div className="col-12 d-block d-lg-none d-md-none mb-4">
					<button type="button" className="btn btn-filter" data-toggle="modal" data-target="#myModal">
					FILTER
					</button>
				</div>
				<div className="col-12 d-block d-lg-none d-md-none">
					
					  <div className="modal" id="myModal">
					    <div className="modal-dialog">
					      <div className="modal-content">
					      
					        
					        <div className="modal-header">
					          <h4 className="modal-title">FILTER</h4>
					          <button type="button" className="close" data-dismiss="modal">&times;</button>
					        </div>
					        
					        
					        <div className="modal-body">
								<div className="accordion" id="accordionExample">
								  <div className="card">
								    <div className="card-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								      <h5 className="mb-0">
								         Brand
								      </h5>
								    </div>

								    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" >
								      <div className="card-body">
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> ACC </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0">  Ambuja  </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0">   Bangur   </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0">    JK Lakshmi    </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> JK Super </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0">  Lafarge  </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> UltraTech </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Wonder </p>
								        	<input type="checkbox" name=""/>
								        </div>
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header collapsed" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								      <h5 className="mb-0">
								     	Price
								      </h5>
								    </div>
								    <div id="collapseTwo" className="show" aria-labelledby="headingTwo">
								      <div className="card-body">
								       <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Rs.100 - Rs.150 </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Rs.150 - Rs.200 </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Rs.200 - Rs.250 </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Rs.250 - Rs.300 </p>
								        	<input type="checkbox" name=""/>
								        </div>
								        <div className="d-flex justify-content-between align-items-center mb-3">
								        	<p className="mb-0"> Rs.300 - Rs.350 </p>
								        	<input type="checkbox" name=""/>
								        </div>
								      </div>
								    </div>
								  </div>
								</div>
					        </div>
					        
					      </div>
					    </div>
					  </div>
					  
					</div>
				


				<div className="col-md-3 mb-4 mb-lg-0 mb-md-0 d-lg-block d-md-block d-none">
					<p><b>FILTER</b></p>
					<div className="accordion" id="accordionExample">
					  <div className="card">
					    <div className="card-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					      <h5 className="mb-0">
					         Brand
					      </h5>
					    </div>

					    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" >
					      <div className="card-body">
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> ACC </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0">  Ambuja  </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0">   Bangur   </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0">    JK Lakshmi    </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> JK Super </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0">  Lafarge  </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> UltraTech </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Wonder </p>
					        	<input type="checkbox" name=""/>
					        </div>
					      </div>
					    </div>
					  </div>
					  <div className="card">
					    <div className="card-header collapsed" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					      <h5 className="mb-0">
					     	Price
					      </h5>
					    </div>
					    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
					      <div className="card-body">
					       <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Rs.100 - Rs.150 </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Rs.150 - Rs.200 </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Rs.200 - Rs.250 </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Rs.250 - Rs.300 </p>
					        	<input type="checkbox" name=""/>
					        </div>
					        <div className="d-flex justify-content-between align-items-center mb-3">
					        	<p className="mb-0"> Rs.300 - Rs.350 </p>
					        	<input type="checkbox" name=""/>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
				<div className="col-md-9">
					<div className="row cate_row text-center">
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				            <NavLink to="Productdetails">
				            <img src="img/ceppcgacc0001.png"/>
				            </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				            <NavLink to="Productdetails">
				            <img src="img/ceppcgacc0001.png"/>
				            </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				           <NavLink to="Productdetails"> 
				           <img src="img/ceppcgacc0001.png"/>
				           </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				          <NavLink to="Productdetails">  
				          <img src="img/ceppcgacc0001.png"/>
				          </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				            <NavLink to="Productdetails">
				            <img src="img/ceppcgacc0001.png"/>
				            </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				         <NavLink to="Productdetails">   
				         <img src="img/ceppcgacc0001.png"/>
				         </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
				          </div>
						</div>
						<div className="col-md-3 col-6 mb-4">
				          <div className="bor_ra">
				           <NavLink to="Productdetails"> 
				           <img src="img/ceppcgacc0001.png"/>
				           </NavLink>
				            <p>Greenstone's AAC Brick - 600mmX200mmX100mm (4")</p>
				            <div className="price_box">
				              <span>M.R.P: </span>
				              <span>Rs.40.00</span>
				            </div>
				            <div className="price_box">
				              <span>Sale Price:  </span>
				              <p>Rs.38.00 <span>per Nos</span></p>
				            </div>
				            <div>
				              <button className="cart_btn">Add to cart</button>
				            </div>
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

export default Allproducts;