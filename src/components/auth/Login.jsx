// Login.jsx
import React, { useState } from "react";
import "./Login.css"
import { Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()



  const loginUser = async (event) => {

    event.preventDefault();
    let loginData =
    {
      email: email,
      password: password,
    };
    console.log(loginData);


    try {
      const response = await axios.post("http://localhost:3000/login", loginData)
      alert(response.data.message)
      localStorage.setItem("loginUser", JSON.stringify(response.data.user))
      navigate("/")


    } catch (error) {
      alert(error.response?.data?.message)
      console.log(error.message);
      console.log(error.respond?.data);
    }

  }

  return (
    <>
      {/* INTERNAL CSS */}


      <div className="login-container">
        {/* LEFT SIDE */}
        <div className="login-left">
          <img
            src="https://images.unsplash.com/photo-1705675451868-014a161e591b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="brand"
          />

          <div className="overlay">
            <div className="brand-box">
              <h1>Mini Store</h1>

              <p>
                Discover premium fashion, gadgets and trending
                products with modern shopping experience.
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
        <div className="login-right">
          <div className="login-card">

            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Login to continue shopping</p>
            </div>

            <form onSubmit={loginUser}>
              {/* EMAIL */}
              <div className="form-group">
                <label>Username or Email</label>

                <div className="input-box">
                  <i className="fa fa-user"></i>

                  <input
                    type="text"
                    placeholder="Enter username or email"
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
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* FORGOT */}
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>

              {/* LOGIN BUTTON */}
              <button className="login-btn" type="submit">
                Login Account
              </button>

              {/* REGISTER BUTTON */}
              <Link
                type="button"
                className="register-btn text-center text-decoration-none"
                to="/register"
              >
                Create Account
              </Link>
            </form>

            {/* DIVIDER */}
            <div className="divider">
              <span>OR CONTINUE WITH</span>
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

export default Login;