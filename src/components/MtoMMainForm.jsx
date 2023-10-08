import React from "react";
import MtoMForm from "../components/MtoMForm";

function MtoMMainForm({ setNextForm }) {

  return (
    <div className="fillformcontainer__downside">
      <div className="fillformcontainer__downside__monthwrapper">
        <div className="head">
          <div className="maintitle">
            <h2>Earning before interest and Taxes</h2>
            <p>Mont to Month | YTD</p>
          </div>
        </div>
        <MtoMForm setNextForm={setNextForm} />
      </div>
    </div>
  );
}

export default MtoMMainForm;
