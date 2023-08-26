import React from "react";
import TopBar from "../components/TopBar";
import { Container, Col, Row, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PersonIcon from "../components/PersonIcon";

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

      <section className="fourth-section">
        <Container>
          <Row className="fourth-section__rowone">
            <Col md={12} sm={12}>
              <div className="features">FEATURES</div>
              <h1 className="title">
                Gain more insight into how people use your
              </h1>

              <p className="para">
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage every aspect of your
                business in one secure platform.
              </p>
              <div className="image">
                <img src="assets/sectionFour.png" alt="error" />
              </div>
            </Col>
          </Row>
          <Row className="fourth-section__rowtwo">
            <Col className="col" md={4} sm={12}>
              <img className="image" src="assets/frameleft.png" alt="error" />
              <h1 className="title">Measure your performance</h1>
              <p className="lead">
                Stay connected with your team and
                <br /> make quick decisions wherever
                <br />
                you are.
              </p>
            </Col>
            <Col className="col" md={4} sm={12}>
              <img className="image" src="assets/framecenter.png" alt="error" />
              <h1 className="title">Custom analytics</h1>
              <p className="lead">
                Get a complete sales dashboard in
                <br /> the cloud. See activity, revenue and <br /> social
                metrics all in one place.
              </p>
            </Col>
            <Col className="col" md={4} sm={12}>
              <img className="image" src="assets/frameleft.png" alt="error" />
              <h1 className="title">Team management</h1>
              <p className="lead">
                Our calendar lets you know what is <br /> happening with
                customer and <br />
                projects so you
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fifth-section">
        <Container>
          <Row className="fifth-section__rowone">
            <Col md={12} sm={12}>
              <div className="features">
                <span>PRICING</span>
              </div>
              <h1 className="title">Dashwize pricing plan for your startup</h1>
              <p className="para">
                Pricing that scales with your business immediately.
              </p>
            </Col>
          </Row>
          <Row className="fifth-section__rowtwo">
            <Col className="col" md={4} sm={12}>
              <div className="features">PRICING</div>
              <h1 className="title">Basic Plan</h1>
              <div className="pricing">
                <p>10/mth</p>
              </div>
              <p className="lead">Billed Anually</p>
              <div className="para">
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Complete documentation</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Working materials in Figma</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>100GB cloud storage</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>500 team members</p>
                </div>
              </div>
              <div className="button">
                <Link className="demobuttom" to="/">
                  Request a Demo
                </Link>
              </div>
            </Col>
            <Col className="col" md={4} sm={12}>
              <div className="features">PRICING</div>
              <h1 className="title">Freelancer Plan</h1>
              <div className="pricing">
                <p>99/mth</p>
              </div>
              <p className="lead">Billed Anually</p>
              <div className="para">
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Complete documentation</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Working materials in Figma</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>100GB cloud storage</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>500 team members</p>
                </div>
              </div>
              <div className="button">
                <Link className="demobuttom" to="/">
                  Request a Demo
                </Link>
              </div>
            </Col>
            <Col className="col" md={4} sm={12}>
              <div className="features">PRICING</div>
              <h1 className="title">Enterprise Plane</h1>
              <div className="pricing">
                <p>799/mth</p>
              </div>
              <p className="lead">Billed Anually</p>
              <div className="para">
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Complete documentation</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>Working materials in Figma</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>100GB cloud storage</p>
                </div>
                <div className="chek">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#22C55E" }}
                    className="icon"
                  />
                  <p>500 team members</p>
                </div>
              </div>
              <div className="button">
                <Link className="demobuttom" to="/">
                  Request a Demo
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sixth-section">
        <Container>
          <Row className="sixth-section__rowone">
            <Col md={12} sm={12}>
              <div className="features">TEAM</div>
              <h1 className="title">Our team is the best in the business</h1>
              <p className="para">
                Highly professional and capable of running your business across
                all digital channels.
              </p>
            </Col>
          </Row>
          <Row className="sixth-section__rowtwo">
            <PersonIcon
              iconlink={"assets/ellipse1.png"}
              name={"Macauley Herring"}
              position={"CEO & Founder"}
            />
            <PersonIcon
              iconlink={"assets/ellipse2.png"}
              name={"Ivan Mathews"}
              position={"CTO"}
            />
            <PersonIcon
              iconlink={"assets/ellipse3.png"}
              name={"Elen Benitez"}
              position={"CPO"}
            />
            <PersonIcon
              iconlink={"assets/ellipse4.png"}
              name={"Kacy Wade"}
              position={"Customer Success"}
            />
          </Row>
          <Row className="sixth-section__rowtwo">
            <PersonIcon
              iconlink={"assets/ellipse5.png"}
              name={"Alya Levine"}
              position={"Backend Developer"}
            />
            <PersonIcon
              iconlink={"assets/ellipse6.png"}
              name={"Rosemary Hernandez"}
              position={"iOS Developer"}
            />
            <PersonIcon
              iconlink={"assets/ellipse7.png"}
              name={"Theo Morales"}
              position={"Frontend Developer"}
            />
            <PersonIcon
              iconlink={"assets/ellipse8.png"}
              name={"Ishmael Dunlop"}
              position={"Product Designer"}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
