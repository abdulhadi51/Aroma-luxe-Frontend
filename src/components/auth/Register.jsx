// Register.jsx
import React, { useState } from "react";
import "./Register.css"
import { Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {

  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  
  const registerUser = async (event) => {

    event.preventDefault();

    let userData =
    {
      fullname: fullname,
      email: email,
      password: password,
    };
    console.log(userData);


    try {
      const response = await axios.post("http://localhost:3000/register", userData)
      alert("Registered successfully")
      navigate("/login")

    } catch (error) {
      alert("Something went wrong")
      // console.log(error.message);
      // console.log(error.respond?.data);
    }

  }

  return (
    <>
      {/* INTERNAL CSS */}


      <div className="register-container">

        {/* LEFT SIDE */}
        <div className="register-left">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
            alt="brand"
          />

          <div className="overlay">
            <div className="brand-box">
              <h1>Mini Store</h1>

              <p>
                Join our modern ecommerce platform and explore
                premium products with a beautiful shopping experience.
              </p>

              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="register-right">
          <div className="register-card">

            <div className="register-header">
              <h2>Create Account</h2>
              <p>Register and start shopping today</p>
            </div>

            <form onSubmit={registerUser}>

              {/* FULL NAME */}
              <div className="form-group">
                <label>Full Name</label>

                <div className="input-box">
                  <i className="fa fa-user"></i>

                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label>Email Address</label>

                <div className="input-box">
                  <i className="fa fa-envelope"></i>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="form-group">
                <label>Password</label>

                <div className="input-box">
                  <i className="fa fa-lock"></i>

                  <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>


              {/* REGISTER BTN */}
              <button className="register-btn" type="submit">
                Create Account
              </button>

              {/* LOGIN BTN */}
              <Link
                type="button"
                className="login-btn text-center text-decoration-none"
                to="/login"
              >
                Already Have Account?
              </Link>

            </form>

            {/* DIVIDER */}
            <div className="divider">
              <span>OR SIGNUP WITH</span>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="social-login">

              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-google"></i>
              </a>

              <a href="#">
                <i className="fab fa-github"></i>
              </a>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;