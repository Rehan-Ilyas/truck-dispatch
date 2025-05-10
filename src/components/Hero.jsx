import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* dark overlay for readability */
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2; /* above video and overlay */
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 800;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); /* Stronger shadow for contrast */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: #0056b3;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <BackgroundVideo
        autoPlay
        loop
        muted
        playsInline
        src="/HeroVideo.mp4" // replace with your video path
        type="video/mp4"
      />
      <Overlay />
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Professional Truck Dispatching Services</Title>
        <Subtitle>
          Streamline your logistics with our expert dispatching solutions. 
          Get the best rates and reliable service for all your trucking needs.
        </Subtitle>
        <CTAButton to="/contact">Get Started</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
