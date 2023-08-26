import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function PersonIcon({name, position, iconlink}) {
  return (
    <Col className="col" md={3} sm={12}>
      <img className="image" src={iconlink} alt="error" />
      <h1 className="title">{name}</h1>
      <p className="lead">{position}</p>
      <div className="social">
        <Link to="/">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "#4f4f4f" }}
            className="icon"
          />
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#4f4f4f" }}
            className="icon"
          />
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#4f4f4f" }}
            className="icon"
          />
        </Link>
      </div>
    </Col>
  );
}

export default PersonIcon;
