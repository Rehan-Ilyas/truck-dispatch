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
      features: [
        'Capacity: 26,000 lbs',
        'Cargo Space: 1,700 cubic feet',
        'Perfect for local and regional deliveries',
        'Equipped with liftgate for easy loading',
        '24/7 tracking and monitoring',
        'Experienced drivers with clean records'
      ],
      longDescription: 'Our box truck services are perfect for local and regional deliveries. With a capacity of up to 26,000 lbs and 1,700 cubic feet, our box trucks can handle a wide range of cargo types. We ensure safe and timely delivery of your goods with our experienced drivers and modern fleet.'
    },
    {
      image: 'dry-van-removebg-preview.png',
      title: 'Dry Van',
      description: 'Secure and efficient dry van transportation for your cargo.',
      path: '/services/dry-van',
      features: [
        'Weather-resistant containers',
        'Advanced security features',
        'Multiple size options available',
        'Real-time cargo tracking',
        'Temperature monitoring',
        'Dedicated customer support'
      ],
      longDescription: 'Our dry van services provide secure and efficient transportation for your cargo. With weather-resistant containers and advanced security features, your goods will arrive safely at their destination. We offer multiple size options to accommodate your specific needs.'
    },
    {
      image: 'refer-truck-removebg-preview.png',
      title: 'Reefer',
      description: 'Temperature-controlled transportation for sensitive goods.',
      path: '/services/reefer',
      features: [
        'Temperature range: -20°F to 70°F',
        '24/7 temperature monitoring',
        'Advanced cooling systems',
        'Real-time temperature alerts',
        'Experienced cold chain logistics',
        'Compliance with food safety standards'
      ],
      longDescription: 'Our refrigerated truck services ensure your temperature-sensitive goods are transported at the perfect temperature. With state-of-the-art cooling systems and 24/7 monitoring, your perishable items are in safe hands. We maintain strict temperature control throughout the journey.'
    },
    {
      image: 'power_only-removebg-preview.png',
      title: 'Power Only',
      description: 'Flexible power-only solutions for your transportation needs.',
      path: '/services/power-only',
      features: [
        'Flexible scheduling',
        'Experienced drivers',
        'Multiple truck options',
        '24/7 dispatch support',
        'Real-time tracking',
        'Competitive rates'
      ],
      longDescription: 'Our power-only services provide flexible solutions for your transportation needs. We supply the truck and driver while you provide the trailer, giving you maximum flexibility and control. Perfect for businesses that own their own trailers.'
    },
    {
      image: 'https://purepng.com/public/uploads/thumbnail//white-truck-gcg.png',
      title: 'Hotshot',
      description: 'Fast and reliable hotshot services for time-sensitive deliveries.',
      path: '/services/hotshot',
      features: [
        'Fast delivery times',
        'Smaller, agile vehicles',
        'Direct point-to-point service',
        'Real-time tracking',
        'Flexible scheduling',
        'Competitive pricing'
      ],
      longDescription: 'Our hotshot services are perfect for time-sensitive deliveries. With smaller, more agile vehicles, we can get your cargo where it needs to be quickly and efficiently. Ideal for urgent shipments and smaller loads.'
    },
    {
      image: 'flat-bed.jpg',
      title: 'Flatbed / Step Deck',
      description: 'Specialized transportation for oversized and heavy loads.',
      path: '/services/flatbed',
      features: [
        'Capacity up to 48,000 lbs',
        'Multiple deck height options',
        'Specialized loading equipment',
        'Oversized load permits',
        'Experienced drivers',
        '24/7 support'
      ],
      longDescription: 'Our flatbed and step deck services are designed for oversized and heavy loads. With specialized equipment and experienced drivers, we can handle even the most challenging cargo. Perfect for construction materials, machinery, and other oversized items.'
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