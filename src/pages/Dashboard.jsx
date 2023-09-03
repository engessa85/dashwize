import React from "react";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import SignInUpLoader from "../components/SignInUpLoader";
function Dashboard() {
  const payment = useSelector((state) => state.payment);


  

  const handleSubscribe = () => {
    console.log("Going to paypal");
  };

  // console.log(payment);

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
          {payment.payed_ceo === false ? (
            <>
              <div className="subscribe">
                <Link onClick={handleSubscribe}>Subscribe Now</Link>
              </div>
              <p style={{ color: "red", fontSize: "15px" }}>Not subscribed</p>
            </>
          ) : (
            <>
              <div className="subscribe">
                <Link to="/userhome">Back to Home</Link>
              </div>
              <p style={{ color: "red", fontSize: "15px" }}>
                Already subscribed
              </p>
            </>
          )}
          {payment.pending && <SignInUpLoader middleCircleColor={"#FFFFFF"} />}
          <img src="assets/dash1.png" alt="error" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
