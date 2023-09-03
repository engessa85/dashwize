import React from "react";
import DataInputCard from "./DataInputCard";

function FilesDataInput() {
  return (
    <div className="all">
      <h1>Files</h1>
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
        </div>
      </>
    </div>
  );
}

export default FilesDataInput;
