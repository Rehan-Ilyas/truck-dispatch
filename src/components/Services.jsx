import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaTruckMoving,
  FaSnowflake,
  FaTruckPickup,
  FaTruckLoading,
  FaTruckMonster,
} from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #ff6b6b, #ff8e8e);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 0.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #2c3e50;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.2rem;
`;

const LearnMore = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: linear-gradient(to right, #ff6b6b, #ff8e8e);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(255, 107, 107, 0.3);

  &:hover {
    background: linear-gradient(to right, #ff5252, #ff7676);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
  }
`;

const Services = () => {
  const services = [
    {
      image: 'box-truck-removebg-preview.png',
      title: 'Box Truck',
      description: 'Perfect for local and regional deliveries with our box truck services.',
      path: '/services/box-truck',
    },
    {
      image: 'dry-van-removebg-preview.png',
      title: 'Dry Van',
      description: 'Secure and efficient dry van transportation for your cargo.',
      path: '/services/dry-van',
    },
    {
      image: 'refer-truck-removebg-preview.png',
      title: 'Reefer',
      description: 'Temperature-controlled transportation for sensitive goods.',
      path: '/services/reefer',
    },
    {
      image: 'power_only-removebg-preview.png',
      title: 'Power Only',
      description: 'Flexible power-only solutions for your transportation needs.',
      path: '/services/power-only',
    },
    {
      image: 'https://purepng.com/public/uploads/thumbnail//white-truck-gcg.png',
      title: 'Hotshot',
      description: 'Fast and reliable hotshot services for time-sensitive deliveries.',
      path: '/services/hotshot',
    },
    {
      image: 'flat-bed.jpg',
      title: 'Flatbed / Step Deck',
      description: 'Specialized transportation for oversized and heavy loads.',
      path: '/services/flatbed',
    },
  ];

  return (
    <ServicesSection>
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceImage>
                <img src={service.image} alt={service.title} />
              </ServiceImage>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMore to={service.path}>Learn More</LearnMore>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 