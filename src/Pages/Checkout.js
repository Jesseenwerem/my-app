import React, { useState } from "react";
import Header from "../Components/Header";
import PaystackPop from "@paystack/inline-js";

function Checkout() {
  return (
    <>
      <Header />
<div className="text_container_2">
<h1 className="make_payment">Make Payment</h1>
</div>
      
      <div className="payment-form_container">
        <div className="payment-form-wrapper">
          <form id="paymentForm" className="payment-form">
            <div className="name_container">
              <input
                type="text"
                placeholder="*First Name"
                className="name-inputs"
              />
              <input
                type="text"
                placeholder="*Last Name"
                className="name-inputs"
              />
            </div>

            <div className="number_container">
              <label className="number-label">+234</label>
              <input
                type="Number"
                placeholder="*Enter Your Phone Number "
                className="number-inputs"
              />

              <label className="number-label">+234</label>

              <input
                type="Number"
                placeholder="* Enter Your Additional Phone Number"
                className="number-inputs"
              />
            </div>
            <div className="adress-container">
              <input
                type="text"
                placeholder="Enter your Adress"
                className="adress_input"
              />
            </div>

            <div className="info-container">
              <input
                type="text"
                placeholder="Enter Additional Information"
                className="info_input"
              />
            </div>

            <div className="location_container">
              <input
                type="text"
                placeholder="*First Name"
                className="location-inputs"
              />
              <input
                type="text"
                placeholder="*Last Name"
                className="location-inputs"
              />
            </div>
          </form>
        </div>

        <div className="order-container">
          <div className="delivery_text_container">
            <p>Purchase summary</p>
          </div>

          <div className="item_text_container">
            <p>item total</p>
          </div>

          <div className="total_text_container">
            <p>item total</p>
          </div>

          <div className="pay_btn_container">
            <button>Confirm Payment</button>
          </div>
        </div>

        <div className="vehicle-information">
          <div className="vehicle-name-container">
            <p>car name</p>
          </div>

          <div className="vehicle-price-container">
            <p>car name</p>
          </div>

          <div className="vehicle-model-container">
            <p>car name</p>
          </div>
          <div className="img-container-1">
            {/* <img className="" src={require("../Images/audi.jpg")}  alt="" /> */}
          </div>
        </div> 
      </div>
    </>
  );
}

export default Checkout;
