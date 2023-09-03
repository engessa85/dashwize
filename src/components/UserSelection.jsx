import React from "react";
import { Link } from "react-router-dom";

function UserSelection({ imageLink, title, lead, linktext, path, payed, dataimport }) {
  return (
    <div className="part">
      <img src={imageLink} alt="arror" className="image" />
      <h1 className="head">{title}</h1>
      <p className="lead">{lead}</p>
      <div className="learnsection">
        <div className="learn">
          <Link to={path}>{linktext}</Link>
        </div>
        {payed && (
          <div className="start">
            <Link to={dataimport}>Start</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSelection;
