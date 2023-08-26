import React from "react";
import { Col } from "react-bootstrap";

function ContactIcon({imagelink, title, lead, info}) {
  return (
    <Col className="col" md={4} sm={12}>
      <img src={imagelink} alt="error" />
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="lead">
        <p>{lead}</p>
      </div>
      <div className="contact">
        <p>{info}</p>
      </div>
    </Col>
  );
}

export default ContactIcon;
