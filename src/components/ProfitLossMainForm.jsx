import React from "react";
import SignInUpLoader from "./SignInUpLoader";
import { useState, useEffect } from "react";
import ProfitLossForm from "./ProfitLossForm";

function ProfitLossMainForm() {
  const [mainLoader, setMainLoader] = useState(true);
  


  useEffect(()=>{
    setTimeout(()=>{
      setMainLoader(false)
    }, 2000)
  })


  return (
    <div className="fillformcontainer__downside">
      {mainLoader ? (
        <div style={{padding:"8rem"}}>
          <SignInUpLoader middleCircleColor={"#2A3342"}/>
        </div>
      ) : (
        <div className="fillformcontainer__downside__monthwrapper">
          <div className="head">
            <div className="maintitle">
              <h2>Profit | Loss</h2>
              <p>Calculating profits and losses</p>
            </div>
          </div>
          {<ProfitLossForm />}
        </div>
      )}
    </div>
  );
}

export default ProfitLossMainForm;
