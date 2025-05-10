import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #ff6b6b, #ff8e8e);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const PricingCard = styled(motion.div)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  ${props => props.popular && `
    border: 2px solid #ff6b6b;
    transform: scale(1.05);
    
    &:hover {
      transform: scale(1.05) translateY(-10px);
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to right, #ff6b6b, #ff8e8e);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 0 15px 0 15px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1rem;
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: #666;
    font-weight: normal;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    color: #666;
    font-size: 0.95rem;

    svg {
      color: #28a745;
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: ${props => props.popular ? 'linear-gradient(to right, #ff6b6b, #ff8e8e)' : '#2c3e50'};
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: ${props => props.popular ? 'linear-gradient(to right, #ff5252, #ff7676)' : '#1a252f'};
  }
`;

const Pricing = () => {
  const packages = [
    {
      title: 'Our Authority',
      features: [
        'Box Truck - 10%',
        'Hot Shot - 5%',
        'FlatBed/StepDeck - 5%',
        'Dry Van - 5%',
      ],
    },
    {
      title: 'Your Authority',
    
      features: [
        'Box Truck - 10%',
        'Hot Shot - 5%',
        'FlatBed/StepDeck - 5%',
        'Dry Van - 5%',
      ],
      popular: true,
    },

  ];

  return (
    <PricingSection>
      <Container>
        <SectionTitle>Pricing Plans</SectionTitle>
        <SectionSubtitle>
          Choose the perfect plan for your business needs. All plans include our core features
          with additional benefits as you scale up.
        </SectionSubtitle>
        <PricingGrid>
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              popular={pkg.popular}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <PopularBadge>
                  <FaStar />
                </PopularBadge>
              )}
              <PlanTitle>{pkg.title}</PlanTitle>
              <PriceContainer>
               
              </PriceContainer>
              <FeaturesList>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </FeaturesList>
              <CTAButton to="/contact" popular={pkg.popular}>
                Get Started
              </CTAButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing; 