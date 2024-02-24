import React from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logos/GreenHaven.png"; // Ensure the path to your logo is correct

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className="justify-content-between bg-transparent"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GreenHaven Logo"
          />
          GreenHaven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        {/* Toggle button for mobile view */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
            {/* You can add more Nav.Link items as needed */}
          </Nav>
          <Nav>
            <NavItem>
              <NavLink to="/profile" className="nav-link">
                <MdOutlinePersonOutline size={24} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" className="nav-link">
                <MdOutlineShoppingCart size={24} />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
