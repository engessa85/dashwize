import React from "react";
import DataInputCard from "./DataInputCard";

function ErpDataInput() {
  return (
    <div className="all">
      <h1>ERP</h1>
      <>
        <div className="cardcontainer">
          <DataInputCard imagepath={"assets/sodoo.png"} lead={"Odoo"} />
          <DataInputCard imagepath={"assets/sqbooks.png"} lead={"QuickBooks"} />
          <DataInputCard
            imagepath={"assets/smicrosiftDemond.png"}
            lead={"Microsoft Dynamics"}
          />
          <DataInputCard
            imagepath={"assets/ssalesforce.png"}
            lead={"Sales Force"}
          />
        </div>
      </>
    </div>
  );
}

export default ErpDataInput;
