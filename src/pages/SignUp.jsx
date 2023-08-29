import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import signUpApiCall from "../services/signUpApiCall";
import { useDispatch } from "react-redux";
import SignInUpLoader from "../components/SignInUpLoader";
import { BiErrorCircle } from "react-icons/bi";
import { useSelector } from "react-redux/es/hooks/useSelector";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [inputValid, setInputValid] = useState(false);
  const { message, pending, error, authorized } = useSelector(
    (state) => state.sigup
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(authorized);

  useEffect(() => {
    if (authorized) {
      navigate("/signin");
    }
  }, [navigate, authorized]);

  const handelSignup = (e) => {
    e.preventDefault();
    if(name.length === 0 || email.length === 0 || password.length === 0 || password2.length === 0){
      setInputValid(true)
    }else{
      setInputValid(false)
      signUpApiCall({ name, email, password, password2 }, dispatch);
    }
    
  };
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {inputValid && name.length <=0 ? (
                  <label htmlFor="name" className="warning">
                    Name can't be empty
                  </label>
                ) : null}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {inputValid && email.length <= 0 ? (
                  <label htmlFor="email" className="warning">
                    Email can't be empty
                  </label>
                ) : null}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {inputValid && password.length <= 0 ? (
                  <label htmlFor="password" className="warning">
                    Password can't be empty
                  </label>
                ) : null}
              </div>
              <div className="signup__wrapper__left__container--formcontent">
                <label htmlFor="confirmpassword" className="label">
                  Confirm Password*
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder=""
                  name="confirmpassword"
                  id="confirmpassword"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
                {inputValid && password2.length <= 0 ? (
                  <label htmlFor="password" className="warning">
                    Password can't be empty
                  </label>
                ) : null}
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
              <button
                className="signup__wrapper__left__container--button"
                onClick={handelSignup}
              >
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
              {pending && <SignInUpLoader middleCircleColor={"#FFFFFF"} />}
              {error && (
                <div className="signup__wrapper__left__container--error">
                  <BiErrorCircle className="icon" />
                  <p>{`Error: ${message}`}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
