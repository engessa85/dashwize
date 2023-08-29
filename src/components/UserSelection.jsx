import React from "react";
import { Link } from "react-router-dom";

function UserSelection({imageLink, title, lead, linktext}) {
  return (
    <div className="part">
      <img src={imageLink} alt="arror" className="image" />
      <h1 className="head">{title}</h1>
      <p className="lead">
        {lead}
      </p>
      <div className="learn">
        <Link >{linktext}</Link>
      </div>
    </div>
  );
}

export default UserSelection;
