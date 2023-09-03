import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userAuthorized, setUserAuthorized] = useState(true);
  const email = useSelector((state) => state.sigin.email);
  const navigate = useNavigate()
  
  useEffect(() => {
    const tokenIs = localStorage.getItem("accesstoken");
    if (tokenIs !== null) {
      setUserAuthorized(false);
    }
  }, []);

  const handleLogout = (e)=>{
    // e.preventDefault();
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken")
    localStorage.removeItem("email")
    navigate("/")

  }

  return (
    <nav>
      <Link to="/" className="title">
        <img src="assets/primary_logo.png" alt="error" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <div className="siteparts">
          <li>
            <NavLink to="/about">Products</NavLink>
          </li>
          <li>
            <NavLink to="/services">Customers</NavLink>
          </li>
          <li>
            <NavLink to="/Pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Company</NavLink>
          </li>
        </div>

        {userAuthorized ? (
          <li>
            <NavLink to="/signin">Log In</NavLink>
          </li>
        ):null}
        { userAuthorized ? (
          <li>
            <NavLink to="/signup" className="button">
              Sign Up
            </NavLink>
          </li>
        ):null}
        { userAuthorized === false? (
          <li>
            <NavLink to="/signup" className="">
            {email}
            </NavLink>
          </li>
        ):null}
        {userAuthorized === false? (
          <li>
            <a href="" className="button" onClick={handleLogout}>
              Log Out
            </a>
          </li>
        ):null}
      </ul>
    </nav>
  );
}

export default TopBar;
