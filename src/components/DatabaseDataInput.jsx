import React from "react";
import DataInputCard from "./DataInputCard";

function DatabaseDataInput() {
  return (
    <div className="all">
      <h1>Database</h1>
      <>
        <div className="cardcontainer">
          <DataInputCard
            imagepath={"assets/samazonrds.png"}
            lead={"Amazon RDS"}
          />
          <DataInputCard
            imagepath={"assets/samazonredshift.png"}
            lead={"Amazon Redshift"}
          />
          <DataInputCard
            imagepath={"assets/smicrosoftazur.png"}
            lead={"Microsoft Azur"}
          />
          <DataInputCard imagepath={"assets/ssql.png"} lead={"SQL"} />
          <DataInputCard imagepath={"assets/smysql.png"} lead={"My SQL"} />
        </div>
      </>
      <>
        <div className="cardcontainer">
          <DataInputCard
            imagepath={"assets/slocalstorage.png"}
            lead={"Local Database"}
          />
        </div>
      </>
    </div>
  );
}

export default DatabaseDataInput;
