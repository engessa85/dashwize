import React from "react";
import "../sass/pages/_index.scss";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__wrapper">
        <div className="signin__wrapper__left">
          <div className="signin__wrapper__left__container">
            <img
              className="signin__wrapper__left__container--image"
              src="assets/secondary_logo.png"
              alt="error"
            />
            <h1 className="signin__wrapper__left__container--title">Sign In</h1>
            <p className="signin__wrapper__left__container--lead">
              To Access Business Up
            </p>
            <form className="signin__wrapper__left__container--form">
              <div className="signin__wrapper__left__container--formcontent">
                <label htmlFor="email" className="label">
                  Email*
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder=""
                  name="email"
                />
              </div>
              <div className="signin__wrapper__left__container--formcontent">
                <label htmlFor="password" className="label">
                  Password*
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder=""
                  name="password"
                />
              </div>
              <div className="signin__wrapper__left__container--forget">
                <a href="#password">Forget your password?</a>
              </div>
              <button className="signin__wrapper__left__container--button">
                Next
              </button>
            </form>
            <div className="signin__wrapper__left__container--or">Or</div>
            <div className="signin__wrapper__left__container--social">
              <a href="#slack">
                <img className="icon" src="assets/slack.png" alt="error" />
              </a>
              <a href="#google">
                <img className="icon" src="assets/google.png" alt="error" />
              </a>
              <a href="#facebook">
                <img className="icon" src="assets/facebook.png" alt="error" />
              </a>
              <a href="#twitter">
                <img className="icon" src="assets/twitter.png" alt="error" />
              </a>
              <a href="#linkedin">
                <img className="icon" src="assets/linkedin.png" alt="error" />
              </a>
            </div>
          </div>
        </div>
        <div className="signin__wrapper__right">
          <div className="signin__wrapper__right__container">
            <img
              className="signin__wrapper__right__container--image"
              src="assets/login_detail.png"
              alt="error"
            />
            <div className="signin__wrapper__right__container--lead">
              <p>Your life's work, powered by our life's work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
