import React from "react";
import { useState, useEffect } from "react";
import signInApiCall from "../services/signInApiCall";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { BiErrorCircle } from "react-icons/bi";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { pending, error } = useSelector((state) => state.sigin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenIs = localStorage.getItem("accesstoken");
    if (tokenIs !== null) {
      navigate("/");
    }
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    signInApiCall({ email, password }, dispatch);
  };

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
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signin__wrapper__left__container--forget">
                <a href="#password">Forget your password?</a>
              </div>
              <button
                className="signin__wrapper__left__container--button"
                onClick={handleSignIn}
              >
                Next
              </button>
            </form>
            <div className="signin__wrapper__left__container--signup">
              <p>
                Don't Have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
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

            {pending && (
              <div className="signin__wrapper__left__container--loader">
                <ThreeCircles
                  height="50"
                  width="50"
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor="#22C55E"
                  innerCircleColor="#2A3342"
                  middleCircleColor="#22C55E"
                />
              </div>
            )}

            {error && (
              <div className="signin__wrapper__left__container--error">
                <BiErrorCircle className="icon" />
                <p>Error: Invalid username or password</p>
              </div>
            )}
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
