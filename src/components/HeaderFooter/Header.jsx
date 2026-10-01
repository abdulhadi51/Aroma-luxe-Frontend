import React, { useEffect, useState } from "react";
import "./HeaderFooter.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {

  const user = JSON.parse(localStorage.getItem("loginUser"));

  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("loginUser");
    alert("Logout Successfully");
    navigate("/Login");
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeProduct = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 top-contact">
              <span>
                <i className="fa-solid fa-envelope"></i> info@aromaluxe.com
              </span>

              <span className="ms-4">
                <i className="fa-solid fa-phone"></i> +92 300 1234567
              </span>
            </div>

            <div className="col-md-6 text-end social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg luxury-navbar sticky-top">

        <div className="container">

          <Link className="navbar-brand brand-logo" to="/">
            Aroma<span>Luxe</span>
          </Link>

          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarContent"
          >

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

            <div className="nav-icons">

              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>

              <a href="#">
                <i className="fa-regular fa-heart"></i>
              </a>

              {/* Cart */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCartOpen(true);
                }}
                style={{ position: "relative" }}
              >
                <i className="fa-solid fa-cart-shopping"></i>

                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    minWidth: "18px",
                    height: "18px",
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {totalItems}
                </span>
              </a>

              {user ? (
                <div className="m-2 dropdown d-inline-block">

                  <button
                    className="btn btn-warning text-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    🙂 - {user.fullname}
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>

                  </ul>

                </div>
              ) : (
                <Link to="/Login">
                  <i className="fa-regular fa-user"></i>
                </Link>
              )}

            </div>

          </div>
        </div>
      </nav>

      {/* Cart Side Panel */}
      {cartOpen && (
        <>

          {/* Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 999,
            }}
          ></div>

          {/* Side Panel */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "400px",
              maxWidth: "90%",
              height: "100vh",
              background: "white",
              zIndex: 1000,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >

            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                paddingBottom: "15px",
              }}
            >

              <h3>Your Cart</h3>

              <button
                onClick={() => setCartOpen(false)}
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

            </div>

            {/* Products */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                marginTop: "15px",
              }}
            >

              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (

                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "10px",
                      borderBottom: "1px solid #ddd",
                      padding: "15px 0",
                    }}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />

                    <div style={{ flex: 1 }}>

                      <h5>{item.title}</h5>

                      <p>Rs. {item.price}</p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >

                        <button
                          onClick={() => decreaseQuantity(index)}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(index)}
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeProduct(index)}
                          style={{
                            marginLeft: "auto",
                            border: "none",
                            background: "none",
                            color: "red",
                          }}
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  </div>

                ))
              )}

            </div>

            {/* Checkout */}
            {cart.length > 0 && (

              <div
                style={{
                  borderTop: "1px solid #ddd",
                  paddingTop: "15px",
                }}
              >

                <h4>
                  Total: Rs. {totalPrice.toFixed(2)}
                </h4>

                <button
                  onClick={goToCheckout}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "black",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>

              </div>

            )}

          </div>

        </>
      )}

    </>
  );
}

export default Header;
