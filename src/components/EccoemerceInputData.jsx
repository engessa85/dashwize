import React from "react";
import DataInputCard from "./DataInputCard";

function EccoemerceInputData() {
  return (
    <div className="all">
      <h1>E-Commerce</h1>
      <>
        <div className="cardcontainer">
          <DataInputCard imagepath={"assets/sshopyfy.png"} lead={"Shopify"} />
          <DataInputCard imagepath={"assets/ssala.png"} lead={"Sala"} />
          <DataInputCard
            imagepath={"assets/bigecommerce.png"}
            lead={"Big Ecommerce"}
          />
        </div>
      </>
    </div>
  );
}

export default EccoemerceInputData;
