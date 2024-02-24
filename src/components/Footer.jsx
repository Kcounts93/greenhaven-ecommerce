import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logos/GreenHaven.png"; // Update the path as necessary

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={3} className="footer-brand">
            <NavLink to="/">
              <img src={logo} alt="Greenhaven logo" height="50" />
            </NavLink>
            <p>Bringing nature to your home.</p>
          </Col>
          <Col md={3}>
            <h5>Shop</h5>
            <Nav className="flex-column">
              <Nav.Link
                as={NavLink}
                to="/plants"
                className="nav-item text-dark"
              >
                Plants
              </Nav.Link>
              <Nav.Link as={NavLink} to="/pots" className="nav-item text-dark">
                Pots
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/accessories"
                className="nav-item text-dark"
              >
                Accessories
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Help</h5>
            <Nav className="flex-column">
              <Nav.Link
                as={NavLink}
                to="/shipping"
                className="nav-item text-dark"
              >
                Shipping Information
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/returns"
                className="nav-item text-dark"
              >
                Returns Policy
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faq" className="nav-item text-dark">
                FAQ
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="nav-item text-dark">
                <FaFacebook /> Facebook
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-dark">
                <FaInstagram /> Instagram
              </Nav.Link>
              <Nav.Link href="#" className="nav-item text-dark">
                <FaTwitter /> Twitter
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        {/* ... Rest of your footer content */}
      </Container>
    </footer>
  );
};

export default Footer;
