import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import ProfitLossMainForm from "../components/ProfitLossMainForm";
import MtoMMainForm from "../components/MtoMMainForm";

function FillForm() {
  const [nextForm, setNextForm] = useState(false);

  return (
    <>
      <TopBar />
      <div className="fillformcontainer">
        <div className="fillformcontainer__upside">
          <h1>Fill Form</h1>
        </div>
        {nextForm === false ? <MtoMMainForm setNextForm={setNextForm} /> : <ProfitLossMainForm />}
      </div>
      <Footer />
    </>
  );
}

export default FillForm;
