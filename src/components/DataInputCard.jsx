import React from "react";
import { Link } from "react-router-dom";


function DataInputCard({imagepath, lead, path}) {
  return (
    <div className="linkcontainer">
      <Link  to={path}>
        <div className="carditem">
          <img src={imagepath} alt="error" />
          <p>{lead}</p>
        </div>
      </Link>
    </div>
  );
}

export default DataInputCard;
