import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaBox,
  FaSnowflake,
  FaRoad,
  FaBolt,
  FaShippingFast,
  FaLayerGroup,
  FaCheckCircle
} from 'react-icons/fa';

// Common styles
const gradientBackground = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
const gradientAccent = 'linear-gradient(to right, #00f2fe, #4facfe)';
const boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: ${gradientBackground};
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #ffffff;
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${gradientAccent};
    border-radius: 2px;
  }
`;

// Trucks Section Styles
const TrucksSection = styled.div`

`;

const TrucksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const TruckCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  }
`;

// RTS Financial Section Styles
const FinancialSection = styled.div`
  padding: 4rem 0rem;
`;

const FinancialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

// Tracking Section Styles
const TrackingSection = styled.div`
  padding: 4rem 0rem;
  
`;

const TrackingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionSubtitle = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #ffffff;
  position: relative;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${gradientAccent};
    border-radius: 2px;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${TruckCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LearnMore = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #0066cc, #0099ff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #0099ff, #0066cc);
  }
`;

const TrackingImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TrackingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  svg {
    color: #4ECDC4;
  }
`;

// Service data
const servicesData = [
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
    image: 'flat-bed.jpg',
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
  }
];

const rtsFinancialData = {
  image: '/images/financial-services.jpg',
  title: 'RTS Financial Services',
  description: 'Comprehensive financial solutions for your transportation business.',
  features: [
    'Quick and easy factoring services',
    'Competitive rates and flexible terms',
    '24/7 online access to funds',
    'Dedicated account management',
    'No long-term contracts required',
    'Fast approval process'
  ],
  longDescription: 'Our RTS Financial Services provide comprehensive financial solutions tailored for transportation businesses. We offer quick and easy factoring services with competitive rates and flexible terms. Get access to funds 24/7 with our online platform and dedicated account management.'
};

const trackingDeviceData = {
  image: '/images/tracking-device.jpg',
  title: 'Advanced Tracking Solutions',
  description: 'State-of-the-art tracking devices for real-time fleet monitoring.',
  features: [
    'Real-time GPS tracking',
    'Advanced telematics',
    'Driver behavior monitoring',
    'Fuel consumption tracking',
    'Maintenance alerts',
    'Custom reporting tools'
  ],
  longDescription: 'Our advanced tracking solutions provide comprehensive fleet monitoring capabilities. With real-time GPS tracking, advanced telematics, and driver behavior monitoring, you can optimize your fleet operations and improve efficiency. Get detailed insights into fuel consumption, maintenance needs, and driver performance.'
};

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        
        {/* Trucks Section */}
        <TrucksSection>
          <SectionSubtitle>Trucks</SectionSubtitle>
          <TrucksGrid>
            {servicesData.map((service, index) => (
              <TruckCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <LearnMore to={service.path}>Learn More</LearnMore>
                </ServiceContent>
              </TruckCard>
            ))}
          </TrucksGrid>
        </TrucksSection>

        {/* RTS Financial Section */}
        <FinancialSection>
          <SectionSubtitle>RTS Financial</SectionSubtitle>
          <FinancialCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceTitle>{rtsFinancialData.title}</ServiceTitle>
            <ServiceDescription>{rtsFinancialData.description}</ServiceDescription>
            <FeatureList>
              {rtsFinancialData.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FaCheckCircle />
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
            <LearnMore to="/#services">Learn More</LearnMore>
          </FinancialCard>
        </FinancialSection>

        {/* Tracking Device Section */}
        <TrackingSection>
          <SectionSubtitle>Tracking Device</SectionSubtitle>
          <TrackingCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TrackingImage>
              <img src={trackingDeviceData.image} alt={trackingDeviceData.title} />
            </TrackingImage>
            <TrackingContent>
              <ServiceTitle>{trackingDeviceData.title}</ServiceTitle>
              <ServiceDescription>{trackingDeviceData.description}</ServiceDescription>
              <FeatureList>
                {trackingDeviceData.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FaCheckCircle />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              <LearnMore to="/#services">Learn More</LearnMore>
            </TrackingContent>
          </TrackingCard>
        </TrackingSection>
      </Container>
    </ServicesSection>
  );
};

export default Services; 