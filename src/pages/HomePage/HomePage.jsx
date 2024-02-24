import React from "react";
import Hero from "../../components/Hero";
import homeBackground from "../../assets/images/home-hero.webp";

function HomePage() {
  return (
    <div>
      <Hero
        title="Nature's Embrace for Your Living Space"
        subtitle="Discover the serene touch of greenery to transform your home into a haven of tranquility."
        buttonText="Explore Our Collection"
        buttonLink="/shop"
        backgroundImage={homeBackground}
      />
    </div>
  );
}

export default HomePage;
