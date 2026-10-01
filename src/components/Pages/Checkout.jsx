import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";




function Checkout() {

  const [cart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [delivery, setDelivery] = useState("standard");

  const shipping = delivery === "standard" ? 200 : 500;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0

  );

  const navigate = useNavigate();

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (cart.lenght===0) {
    navigate("/",{replace: true});
  }
},[navigate]);

  const total = subtotal + shipping;

  return (
    <div className="checkout-page">

      <header className="checkout-header">

        <div className="logo">
          AROMA LUXE
        </div>

        <div className="secure">
          🔒 Secure Checkout
        </div>

      </header>

      <main className="checkout-container">

        <div className="checkout-heading">

          <h1>Checkout</h1>

          <p>
            Complete your information to place your order.
          </p>

        </div>

        <div className="checkout-grid">

          {/* LEFT SIDE */}

          <div className="checkout-left">

            {/* Contact */}

            <section className="checkout-card">

              <h2>Contact Information</h2>

              <div className="form-grid">

                <div className="form-group full">

                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />

                </div>

                <div className="form-group full">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="+92 300 0000000"
                  />

                </div>

              </div>

            </section>

            {/* Address */}

            <section className="checkout-card">

              <h2>Shipping Address</h2>

              <div className="form-grid">

                <div className="form-group">

                  <label>First Name</label>

                  <input
                    type="text"
                    placeholder="First name"
                  />

                </div>

                <div className="form-group">

                  <label>Last Name</label>

                  <input
                    type="text"
                    placeholder="Last name"
                  />

                </div>

                <div className="form-group full">

                  <label>Address</label>

                  <input
                    type="text"
                    placeholder="Street address"
                  />

                </div>

                <div className="form-group">

                  <label>City</label>

                  <input
                    type="text"
                    placeholder="City"
                  />

                </div>

                <div className="form-group">

                  <label>Postal Code</label>

                  <input
                    type="text"
                    placeholder="Postal code"
                  />

                </div>

                <div className="form-group full">

                  <label>Province</label>

                  <select>

                    <option>
                      Select province
                    </option>

                    <option>
                      Sindh
                    </option>

                    <option>
                      Punjab
                    </option>

                    <option>
                      Khyber Pakhtunkhwa
                    </option>

                    <option>
                      Balochistan
                    </option>

                    <option>
                      Islamabad Capital Territory
                    </option>

                  </select>

                </div>

              </div>

            </section>

            {/* Delivery */}

            <section className="checkout-card">

              <h2>Delivery Method</h2>

              <label className="option-card">

                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={delivery === "standard"}
                  onChange={() => setDelivery("standard")}
                />

                <div>

                  <strong>
                    Standard Delivery
                  </strong>

                  <span>
                    Delivery within 3–5 business days
                  </span>

                </div>

                <b>
                  Rs. 200
                </b>

              </label>

              <label className="option-card">

                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={delivery === "express"}
                  onChange={() => setDelivery("express")}
                />

                <div>

                  <strong>
                    Express Delivery
                  </strong>

                  <span>
                    Delivery within 1–2 business days
                  </span>

                </div>

                <b>
                  Rs. 500
                </b>

              </label>

            </section>

            {/* Payment */}

            <section className="checkout-card">

              <h2>Payment Method</h2>

              <label className="option-card">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />

                <div>

                  <strong>
                    Cash on Delivery
                  </strong>

                  <span>
                    Pay when your order arrives.
                  </span>

                </div>

              </label>

              <label className="option-card">

                <input
                  type="radio"
                  name="payment"
                />

                <div>

                  <strong>
                    Credit / Debit Card
                  </strong>

                  <span>
                    Secure card payment.
                  </span>

                </div>

              </label>

            </section>

          </div>

          {/* RIGHT SIDE */}

          <aside className="checkout-right">

            <section className="checkout-card order-summary">

              <h2>
                Order Summary
              </h2>

              {cart.length === 0 ? (

                <p>
                  Your cart is empty.
                </p>

              ) : (

                cart.map((item) => (

                  <div
                    className="order-product"
                    key={item.id}
                  >

                    <div className="product-image">

                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                    </div>

                    <div className="product-details">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <strong>
                      Rs. {(item.price * item.quantity).toFixed(2)}
                    </strong>

                  </div>

                ))

              )}

              {/* Coupon */}

              <div className="coupon">

                <input
                  type="text"
                  placeholder="Discount code"
                />

                <button type="button">
                  Apply
                </button>

              </div>

              {/* Prices */}

              <div className="price-row">

                <span>
                  Subtotal
                </span>

                <span>
                  Rs. {subtotal.toFixed(2)}
                </span>

              </div>

              <div className="price-row">

                <span>
                  Shipping
                </span>

                <span>
                  Rs. {shipping.toFixed(2)}
                </span>

              </div>

              <div className="price-row">

                <span>
                  Discount
                </span>

                <span>
                  Rs. 0.00
                </span>

              </div>

              <div className="total-row">

                <span>
                  Total
                </span>

                <strong>
                  Rs. {total.toFixed(2)}
                </strong>

              </div>

              <button className="place-order">
                Place Order
              </button>

              <p className="checkout-note">
                This is a UI-only checkout. No payment will be processed.
              </p>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Checkout;
