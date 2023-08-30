import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NumbersSection() {
  return (
    <section className="eight-section">
      <Container>
        <Row className="eight-section__rowone">
          <Col md={12} sm={12}>
            <div className="features">NUMBERS</div>
            <h1 className="title">We believe in the power of data</h1>
            <p className="para">
              Flex is the only business platform that lets you run your business
              on one platform,
              <br /> seamlessly across all digital channels.
            </p>
          </Col>
        </Row>
        <Row className="eight-section__rowtwo">
          <Col className="col" md={3} sm={12}>
            <div className="title">
              <p>235.000</p>
            </div>
            <div className="lead">
              <p>Projects completed</p>
            </div>
          </Col>
          <Col className="col" md={3} sm={12}>
            <div className="title">
              <p>$10m</p>
            </div>
            <div className="lead">
              <p>APR</p>
            </div>
          </Col>
          <Col className="col" md={3} sm={12}>
            <div className="title">
              <p>+50.000</p>
            </div>
            <div className="lead">
              <p>Hours Saved Annually</p>
            </div>
          </Col>
          <Col className="col" md={3} sm={12}>
            <div className="title">
              <p>3.500</p>
            </div>
            <div className="lead">
              <p>Unique Users</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NumbersSection;
