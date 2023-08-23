import React from "react";
import TopBar from "../components/TopBar";
import { Container, Col, Row, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <TopBar />
      <section className="first-section">
        <Container>
          <Row>
            <Col md={6} sm={12} className="first-section__left">
              <div className="button">Header</div>
              <h1 className="title">
                A small business is only as good as its tools
              </h1>
              <p className="para">
                We’re different. Flex is the only saas business <br/> platform that
                lets you run your business on one <br/> platform, seamlessly across
                all digital channels.
              </p>
              <div className="buttons">
                <Link className="demobuttom" to="/">Request a Demo</Link>
                <Link className="signupbutton" to="/signup">Sign Up</Link>

              </div>
            </Col>

            <Col md={6} sm={12} className="first-section__right">
              <img src="assets/sectionOne.png" alt="error" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
