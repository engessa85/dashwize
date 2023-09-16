import React from "react";
import SignInUpLoader from "./SignInUpLoader";
import { useState, useEffect } from "react";
import ProfitLossForm from "./ProfitLossForm";

function ProfitLossMainForm() {
  const [loader, setLoader] = useState(false);
  const [mainLoader, setMainLoader] = useState(true);
  const [validate, setValidate] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setMainLoader(false)
    }, 3000)
  })

  const handelValidate = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
        setValidate(true);
    }, 2000);
  };

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
            <button className="validate" onClick={handelValidate}>
              Validate
            </button>
          </div>
          {loader && (
            <div className="loader">
              <SignInUpLoader middleCircleColor={"#2A3342"} />
            </div>
          )}
          {<ProfitLossForm validate={validate} setValidate={setValidate} />}
        </div>
      )}
    </div>
  );
}

export default ProfitLossMainForm;
