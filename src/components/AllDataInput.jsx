import React from "react";
import DataInputCard from "./DataInputCard";

function AllDataInput() {
  return (
    <div className="all">
      <h1>All</h1>
      <>
        <div className="cardcontainer">
          <DataInputCard imagepath={"assets/sform.png"} lead={"Fill Forms"} />
          <DataInputCard
            imagepath={"assets/slocaldriver.png"}
            lead={"Local drive"}
          />
          <DataInputCard imagepath={"assets/sexcel.png"} lead={"EXCEL Sheet"} />
          <DataInputCard
            imagepath={"assets/slinkdata.png"}
            lead={"Link data"}
          />
          <DataInputCard imagepath={"assets/sftp.png"} lead={"FTP"} />
        </div>
      </>
      <>
        <div className="cardcontainer">
          <DataInputCard
            imagepath={"assets/sgoogledrive.png"}
            lead={"Google Drive"}
          />
          <DataInputCard imagepath={"assets/sdropbox.png"} lead={"Drop Box"} />
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
        </div>
      </>
      <>
        <div className="cardcontainer">
          <DataInputCard imagepath={"assets/ssql.png"} lead={"SQL"} />
          <DataInputCard imagepath={"assets/smysql.png"} lead={"My SQL"} />
          <DataInputCard
            imagepath={"assets/slocalstorage.png"}
            lead={"Local Database"}
          />
          <DataInputCard imagepath={"assets/sodoo.png"} lead={"Odoo"} />
          <DataInputCard imagepath={"assets/sqbooks.png"} lead={"QuickBooks"} />
        </div>
      </>
      <>
        <div className="cardcontainer">
          <DataInputCard
            imagepath={"assets/smicrosiftDemond.png"}
            lead={"Microsoft Dynamics"}
          />
          <DataInputCard imagepath={"assets/ssalesforce.png"} lead={"Sales Force"} />
          <DataInputCard
            imagepath={"assets/sshopyfy.png"}
            lead={"Shopify"}
          />
          <DataInputCard imagepath={"assets/ssala.png"} lead={"Sala"} />
          <DataInputCard imagepath={"assets/bigecommerce.png"} lead={"Big Ecommerce"} />
        </div>
      </>
    </div>
  );
}

export default AllDataInput;
