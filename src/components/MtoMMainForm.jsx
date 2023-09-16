
import React, { useState } from "react";
import MtoMForm from "../components/MtoMForm";
import SignInUpLoader from "../components/SignInUpLoader";

function MtoMMainForm({setNextForm}) {
    const [validate, setValidate] = useState(false);
    const [loader, setLoader] = useState(false);

    const handelValidate = () => {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          setValidate(true);
        }, 2000);
      };

  return (
    <div className="fillformcontainer__downside">
            <div className="fillformcontainer__downside__monthwrapper">
              <div className="head">
                <div className="maintitle">
                  <h2>Earning before interest and Taxes</h2>
                  <p>Mont to Month | YTD</p>
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
              <MtoMForm
                validate={validate}
                setValidate={setValidate}
                setNextForm={setNextForm}
              />
            </div>
          </div>
  )
}

export default MtoMMainForm