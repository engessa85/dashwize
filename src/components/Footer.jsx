import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="footer__rowone">
          <img src="assets/logo_footer.png" alt="" />
        </Row>
        <Row className="footer__rowtwo">
          <div className="col">
            <Link>Product</Link>
          </div>
          <div className="col">
            <Link>Features</Link>
          </div>
          <div className="col">
            <Link>Pricing</Link>
          </div>
          <div className="col">
            <Link>Resources</Link>
          </div>
          <div className="col">
            <Link>Careers</Link>
          </div>
          <div className="col">
            <Link>Help</Link>
          </div>
          <div className="col">
            <Link>Privacy</Link>
          </div>
        </Row>
        <span className="footer__line"></span>
        <Row className="footer__rowthree">
          <p>© 2023 dashwize. All rights reserved.</p>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
