import React from "react";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Dashboard() {
  return (
    <>
      <TopBar />
      <div className="maincontainer">
        <div className="wrapper">
          <h1 className="title">
            Modern Self-service BI and Analytics Platform
          </h1>
          <p className="lead">
            business up Analytics helps business users connect, prepare and
            analyze their data, create stunning data <br /> visualizations, and
            discover hidden insights, all within minutes.
          </p>
          <div className="subscribe">
            <Link>Subscribe Now</Link>
          </div>
          <img src="assets/dash1.png" alt="error" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
