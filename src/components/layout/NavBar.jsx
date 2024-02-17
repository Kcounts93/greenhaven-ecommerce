import React from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          GreenHaven
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services">
            Services
          </Nav.Link>
          {/* Add more Nav.Link items here */}
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <NavItem>
          <NavLink to="/cart" className="nav-link">
            <MdOutlinePersonOutline size={24} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cart" className="nav-link">
            <MdOutlineShoppingCart size={24} />
          </NavLink>
        </NavItem>
      </Container>
    </Navbar>
  );
};

export default NavBar;
