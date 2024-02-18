import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "HomePage.module.scss";

const HomePageHero = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle click event on the button
  const navigateToShop = () => {
    navigate("/shop"); // Navigate to the shop page
  };

  return (
    <div className="hero d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col className="text-dark text-center homepage__hero-text">
            <h1 className="text-xl">Nature's Embrace for Your Living Space</h1>
            <h5>
              Discover the serene touch of greenery to transform your home
              <br /> into a haven of tranquility.
            </h5>
            <Button
              href="#"
              className="mt-4 btn-success"
              onClick={navigateToShop}
            >
              Explore Our Collection
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageHero;
