import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import SignInUpLoader from "../components/SignInUpLoader";
import { useState, useEffect } from "react";

function SendEmail() {
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setLoader(false)
    }, 2000)
  },[])
  return (
    <>
      <TopBar />
      <div className="emailcontainer">
        {loader ? (
          <SignInUpLoader middleCircleColor={"rgb(42, 51, 66)"} />
        ) : (
          <div className="emailcontainer__wrapper">
            <h1 className="title">Send Email</h1>

            <form>
              <input className="input" type="text" placeholder="To:" />
              <input className="input" type="text" placeholder="Title:" />
              <textarea
                className="big-input"
                type="text"
                placeholder="Subject:"
              />
              <button className="button">Send</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SendEmail;
