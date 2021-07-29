import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
import Header from './Header';
import Footer from './Footer';
SwiperCore.use([Navigation,Thumbs]);
function Productdetails() {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return(
	<>

  <Header/>
	<section className="mt-5 mb-5  mb-5 details_page">
		<div className="container-fluid pl-lg-5 pr-lg-5">
			<div className="row">
				<div className="col-md-4">
					<div className="pos_sti"> 

					<Swiper spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
					<SwiperSlide>
						<img src={"img/ambuja_ppc.jpg"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/ceppcgacc0001.png"}/>
					</SwiperSlide><SwiperSlide>
						<img src={"img/Ambuja-Cement.jpg"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/ceppcgacc0001.png"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/UltraTech-Cement-1024x576.jpg"}/>
					</SwiperSlide>

					</Swiper>
					<Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
					<SwiperSlide>
						<img src={"img/ambuja_ppc.jpg"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/ceppcgacc0001.png"}/>
					</SwiperSlide><SwiperSlide>
						<img src={"img/Ambuja-Cement.jpg"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/ceppcgacc0001.png"}/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={"img/UltraTech-Cement-1024x576.jpg"}/>
					</SwiperSlide>
					</Swiper>
				  </div>
				</div>

				<div className="col-md-6 mr-auto det_text">
					<h4 className="mb-0 mt-3 mt-lg-0">Ramco Supergrade Cement</h4>
					<p className="write_rat">
						<span>Write Your Review</span>
					</p>

					<p>
						Availability:
						<span className="stok">In stock</span>
					</p>

					<p className="old_price mb-0">
						<span>M.R.P: </span>
						<del> Rs.480.00 </del>
					</p>

					<p className="special_price mb-0">
						<span>Sale Price: </span>
						<span className="price_label">Rs.350.00</span>
						<span>per Bag</span>
						<span className="deal_percent">
							<span>27% off</span>
						</span>
					</p>
					<p className="taxnote">* Inclusive of all Taxes</p>

					<p className="mb-0">
						by 
						<span className="stok">Ramco</span>
					</p>

					<span style={{fontsize: "x-small"}}>Ramco cement price.</span>

					<p>Prices Displayed are per 50 KG Bag. Free shipping for orders above 50 Bags.</p>

					<div className="qty-block">
						<label for="qty">Qty:</label>
						<div className="cart-plus-minus">
							<span type="button" className="btn cart-minus-1">-</span>
							<input type="text" name="qty" id="qty" maxlength="12" value="150" title="Qty" className="input-text qty"/>
							<span type="button" className="btn cart-plus-1">+</span>
						</div>
						<input type="hidden" id="minorder" value="150"/>
						<div className="min-qty">Minimum Order Qty : 150</div>
					</div>

					<div className="row mt-4">
						<div className="col-md-6">
							<button className="add_btn">ADD TO CART</button>
						</div>
						<div className="col-md-6">
							<button className="pro_btn">PROCEED TO CHECKOUT</button>
						</div>
					</div>

					<p className="text_uper mt-4 mb-0">Delivery </p>
					<p className=""><b>Usually Delivers in 12 to 48 hours</b> </p>

					<p className="text_uper mt-4">Shipping</p>
					<p className="">Free shipping on all orders
						<small>(Subject to order value)</small>
					</p>


					<p className="text_uper mt-4">Easy Payment Options</p>
					<p className="">
						<ul className="pl-3">
							<li>Net banking & Credit/ Debit/ UPI</li>
							<li>Cash on Delivery</li>
							<li>Demand Draft / Cheque / Money order</li>
						</ul>
					</p>

					<div className="accordion" id="accordionExample">
					  <div className="card">
					    <div className="card-header" id="headingOne">
					      <h2 className="mb-0">
					        <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					          Product Description
					        </button>
					      </h2>
					    </div>

					    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
					      <div className="card-body">
					        
						Ramco Cements Super Grade is a PPC grade cement manufactured as per IS 1489 (Part 1):1991.

						Ramco Cements Super Grade is produced either by grinding together Portland Cement clinker and pozzolona with addition of gypsum or calcium sulphate, or by intimately and uniformly blending Portland Cement and fine Pozzolona.

						World over Ramco Cements Super Grade is preferred due to its ability to produce a durable concrete where the life of a concrete structure is given more importance.

						Ramco Cements Super Grade produces less heat of hydration and offers greater resistance to the attack of aggressive waters than normal Portland Cement. Moreover, it reduces the leaching of calcium hydroxide liberated during the setting and hydration of cement.    
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" id="headingTwo">
					      <h2 className="mb-0">
					        <button className="btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					          Product Specifications
					        </button>
					      </h2>
					    </div>

					    <div id="collapseTwo" className=" show" aria-labelledby="headingTwo" data-parent="#accordionExample">
					      <div className="card-body">
					        
							<div className="product-full-content">
							   <div className="product-full-content-inner">
							      <strong>Additional Information</strong>
							      <table className="data-table w-100" id="product-attribute-specs-table">
							         <tbody>
							            <tr className="">
							               <th className="label">SKU</th>
							               <td className="data last">CEOTHRRAC0004</td>
							            </tr>
							            <tr className="">
							               <th className="label">Size</th>
							               
							               <td className="data last">
							                  50Kg                        
							               </td>
							            </tr>
							            <tr className="">
							               <th className="label">Brand / Manufacturer</th>

							               <td className="data last">
							                  Ramco                        
							               </td>
							            </tr>
							         </tbody>
							      </table>
							   </div>
							</div>    
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="mt-5 mb-5 related">
		<div className="container-fluid pl-lg-5 pr-lg-5">
			<div className="row mt-5 mb-5">
				<div className="col-md-12 text-center">
					<h3 className="mb-0">RELATED PRODUCTS</h3>
				</div>
			</div>
			<div className="row text-center cate_row">
				<div className="col-md-12">


				<Swiper slidesPerView={4} spaceBetween={30} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
  				"clickable": true }} navigation={true} className="mySwiper">
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				<SwiperSlide>
					<div className=" mb-4">
				          <div className="bor_ra">
				            <img src={"img/brick_image.png"}/>
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
				</SwiperSlide>
				</Swiper>
				</div>

			</div>
		</div>
	</section>


	<Footer/>


	</>
	);
}


export default Productdetails;