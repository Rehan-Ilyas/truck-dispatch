import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: 0;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #e94560;
    border-radius: 1.5px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #d1d1d1;
  margin-bottom: 3.5rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PricingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  max-width: 350px;
  width: 100%;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: #e94560;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #e94560, #0f3460);
    z-index: 1;
  }
`;

const PriceContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  span {
    font-size: 0.9rem;
    color: #d1d1d1;
    font-weight: normal;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    color: #ffffff;
    font-size: 1rem;
    padding: 0.6rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }

    svg {
      color: #e94560;
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2.5rem;
  background: #e94560;
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;

  &:hover {
    background: #ff5776;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.4);
  }
`;

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <Container>
        <SectionTitle>Pricing Plans</SectionTitle>
        <SectionSubtitle>
          Select a plan tailored to your business needs. Enjoy our core features with enhanced benefits as you grow.
        </SectionSubtitle>
        <PricingGrid>
          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <PriceContainer>
            </PriceContainer>
            <FeaturesList>
              <li>
                <FaCheck />
                Box Truck - 10%
              </li>
              <li>
                <FaCheck />
                Hot Shot - 5%
              </li>
              <li>
                <FaCheck />
                FlatBed/StepDeck - 5%
              </li>
              <li>
                <FaCheck />
                Dry Van - 5%
              </li>
            </FeaturesList>
            <CTAButton to="/contact">
              Get Started
            </CTAButton>
          </PricingCard>
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;