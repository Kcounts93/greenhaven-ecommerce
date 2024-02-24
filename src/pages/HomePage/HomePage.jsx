import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../../components/Hero";
import homeBackground from "../../assets/images/home-hero.webp";
import PlantCard from "../../components/PlantCard";
import plantData from "../../data/PlantData";

function HomePage() {
  return (
    <>
      <Hero
        title="Nature's Embrace for Your Living Space"
        subtitle="Discover the serene touch of greenery to transform your home into a haven of tranquility."
        buttonText="Explore Our Collection"
        buttonLink="/shop"
        backgroundImage={homeBackground}
      />
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {plantData.slice(0, 6).map((plant, index) => (
            <Col key={index}>
              <PlantCard plant={plant} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
