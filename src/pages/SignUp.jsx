import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup__wrapper">
        <div className="signup__wrapper__left">
          <div className="signup__wrapper__left__container">
            <img
              className="signup__wrapper__left__container--image"
              src="assets/secondary_logo.png"
              alt="error"
            />
            <h1 className="signup__wrapper__left__container--title">
              Join Our Community
            </h1>
            <p className="signup__wrapper__left__container--lead">
              Start Your Journy With Our Product
            </p>
            <form className="signup__wrapper__left__container--form">
              <div className="signup__wrapper__left__container--formcontent">
                <label htmlFor="name" className="label">
                  Name*
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  name="name"
                  id="name"
                />
              </div>
              <div className="signup__wrapper__left__container--formcontent">
                <label htmlFor="email" className="label">
                  Email*
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder=""
                  name="email"
                  id="email"
                />
              </div>
              <div className="signup__wrapper__left__container--formcontent">
                <label htmlFor="password" className="label">
                  Password*
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder=""
                  name="password"
                  id="password"
                />
              </div>
              <div className="signup__wrapper__left__container--forget">
                <div className="remember">
                  <input
                    type="checkbox"
                    id="Remember"
                    name="Remember"
                    value="Remember"
                  />
                  <p>Remember me</p>
                </div>
                <a href="#password">Forget your password?</a>
              </div>
              <button className="signup__wrapper__left__container--button">
                Sign Up
              </button>
              <button className="signup__wrapper__left__container--google">
                <img className="icon" src="assets/google.png" alt="error" />
                <p>Sign in With Google</p>
              </button>
              <div className="signup__wrapper__left__container--haveaccount">
                <p>
                  Already Have an account? <Link to="/signin">Sig in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
