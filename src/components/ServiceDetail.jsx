import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

const DetailSection = styled.section`
  padding: 0;
  background: #f8f9fa;
  min-height: 100vh;
`;

const HeroImage = styled.div`
  height: 50vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/homeimg.jpg') center/cover no-repeat;
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DetailText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(to right, #ff6b6b, #ff8e8e);
    }
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    svg {
      color: #28a745;
      font-size: 1.2rem;
    }
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: #1a252f;
    transform: translateX(-5px);
  }

  svg {
    font-size: 1rem;
  }
`;

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceDetails = {
    'box-truck': {
      title: 'Box Truck Services',
      description: 'Our box truck services are perfect for local and regional deliveries. With a capacity of up to 26,000 lbs and 1,700 cubic feet, our box trucks can handle a wide range of cargo types.',
      features: [
        'Capacity: 26,000 lbs',
        'Cargo Space: 1,700 cubic feet',
        'Perfect for local and regional deliveries',
        'Equipped with liftgate for easy loading',
        '24/7 tracking and monitoring',
        'Experienced drivers with clean records'
      ]
    },
    'dry-van': {
      title: 'Dry Van Services',
      description: 'Our dry van services provide secure and efficient transportation for your cargo. With weather-resistant containers and advanced security features, your goods will arrive safely at their destination.',
      features: [
        'Weather-resistant containers',
        'Advanced security features',
        'Multiple size options available',
        'Real-time cargo tracking',
        'Temperature monitoring',
        'Dedicated customer support'
      ]
    },
    'reefer': {
      title: 'Reefer Services',
      description: 'Our refrigerated truck services ensure your temperature-sensitive goods are transported at the perfect temperature. With state-of-the-art cooling systems and 24/7 monitoring, your perishable items are in safe hands.',
      features: [
        'Temperature range: -20°F to 70°F',
        '24/7 temperature monitoring',
        'Advanced cooling systems',
        'Real-time temperature alerts',
        'Experienced cold chain logistics',
        'Compliance with food safety standards'
      ]
    },
    'power-only': {
      title: 'Power Only Services',
      description: 'Our power-only services provide flexible solutions for your transportation needs. We supply the truck and driver while you provide the trailer, giving you maximum flexibility and control.',
      features: [
        'Flexible scheduling',
        'Experienced drivers',
        'Multiple truck options',
        '24/7 dispatch support',
        'Real-time tracking',
        'Competitive rates'
      ]
    },
    'hotshot': {
      title: 'Hotshot Services',
      description: 'Our hotshot services are perfect for time-sensitive deliveries. With smaller, more agile vehicles, we can get your cargo where it needs to be quickly and efficiently.',
      features: [
        'Fast delivery times',
        'Smaller, agile vehicles',
        'Direct point-to-point service',
        'Real-time tracking',
        'Flexible scheduling',
        'Competitive pricing'
      ]
    },
    'flatbed': {
      title: 'Flatbed / Step Deck Services',
      description: 'Our flatbed and step deck services are designed for oversized and heavy loads. With specialized equipment and experienced drivers, we can handle even the most challenging cargo.',
      features: [
        'Capacity up to 48,000 lbs',
        'Multiple deck height options',
        'Specialized loading equipment',
        'Oversized load permits',
        'Experienced drivers',
        '24/7 support'
      ]
    }
  };

  const service = serviceDetails[serviceType] || serviceDetails['box-truck'];

  return (
    <DetailSection>
      <HeroImage>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.h1>
        </HeroContent>
      </HeroImage>
      <Container>
        <DetailContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DetailText>
              <h2>Service Overview</h2>
              <p>{service.description}</p>
              <BackButton to="/services">
                <FaArrowLeft />
                Back to Services
              </BackButton>
            </DetailText>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Key Features</h2>
            <FeaturesList>
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <FaCheck />
                  {feature}
                </motion.li>
              ))}
            </FeaturesList>
          </motion.div>
        </DetailContent>
      </Container>
    </DetailSection>
  );
};

export default ServiceDetail; 