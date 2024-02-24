import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle click event on the button
  const onButtonClick = () => {
    navigate(buttonLink);
  };

  const heroStyles = {
    background: `url(${backgroundImage}) center center / cover no-repeat`, // Set the background image from props
    // Add any other styling here as needed
  };

  return (
    <div
      className="hero d-flex justify-content-center align-items-center"
      style={heroStyles}
    >
      <Container>
        <Row>
          <Col className="text-dark text-center hero-text">
            <h1 className="text-xl">{title}</h1>
            <h5>{subtitle}</h5>
            <Button
              href="#"
              className="mt-4 btn-success"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
