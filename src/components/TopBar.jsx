import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <li>
          <NavLink to="/signin">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="button">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
