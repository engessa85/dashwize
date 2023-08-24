import React from "react";
import TopBar from "../components/TopBar";
import { Container, Col, Row, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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
                We’re different. Flex is the only saas business <br /> platform
                that lets you run your business on one <br /> platform,
                seamlessly across all digital channels.
              </p>
              <div className="buttons">
                <Link className="demobuttom" to="/">
                  Request a Demo
                </Link>
                <Link className="signupbutton" to="/signup">
                  Sign Up
                </Link>
              </div>
            </Col>

            <Col md={6} sm={12} className="first-section__right">
              <img src="assets/sectionOne.png" alt="error" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="second-section">
        <Container>
          <Row>
            <Col md={6} sm={12} className="second-section__left">
              <h1 className="title">
                Your life's work,
                <br /> powered by our life's work
              </h1>
              <span className="line"></span>
              <p className="para">
                A unique and powerful software suite to transform the way you
                work. Designed for businesses of all sizes, built by a company
              </p>
              <p className="para">
                Run your entire business on Zoho with our unified cloud
                software, designed to help you break down silos between
                departments and increase organizational efficiency.
              </p>
              <div className="buttons">
                <Link className="getstart" to="/">
                  Get Started
                </Link>
              </div>
            </Col>

            <Col md={6} sm={12} className="second-section__right">
              <img src="assets/sectionTwo.png" alt="error" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="third-section">
        <Container>
          <Row>
            <Col md={6} sm={12} className="third-section__left">
              <h1 className="title">
                Join 6,000+ <br /> startups growing <br /> with dashwize
              </h1>
              <div className="para">
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#00ff80" }}
                    className="icon"
                  />
                  <p>Mauris pellentesque congue libero nec</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#00ff80" }}
                    className="icon"
                  />
                  <p>Suspendisse mollis tincidunt</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#00ff80" }}
                    className="icon"
                  />
                  <p>Praesent varius justo vel justo pulvinar</p>
                </div>
              </div>
              <div className="buttons">
                <Link className="signupbutton" to="/signup">
                  Learn More
                </Link>
                <Link className="demobuttom" to="/">
                  Get Started
                </Link>
              </div>
            </Col>

            <Col md={6} sm={12} className="first-section__right">
              <img src="assets/sectionThree.png" alt="error" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
