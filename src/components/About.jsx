import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTruck, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  
  &::after {
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

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AboutText = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const ValueItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    width: 50px;
    height: 3px;
    background: #007bff;
    transition: all 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100px;
      background: #ff6b6b;
    }

    .icon-wrapper {
      transform: rotateY(180deg);
      background: #ff6b6b;
    }

    svg {
      color: white;
    }
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #007bff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.5s ease;
  }

  svg {
    font-size: 2.5rem;
    color: white;
    transition: all 0.3s ease;
  }

  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
`;

const About = () => {
  const values = [
    {
      icon: <FaTruck />,
      title: 'Reliable Service',
      description: 'We ensure timely and efficient dispatching for all your trucking needs.',
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted Partnerships',
      description: 'Building strong relationships with carriers and shippers for mutual success.',
    },
    {
      icon: <FaChartLine />,
      title: 'Growth Focused',
      description: 'Helping your business grow through optimized logistics solutions.',
    },
  ];

  return (
    <AboutSection>
      <Container>
        <SectionTitle>About Us</SectionTitle>
        <AboutContent>
          <AboutText>
            <h3>Your Trusted Partner in Truck Dispatching</h3>
            <p>
              With over a decade of experience in the trucking industry, we've built
              a reputation for excellence in dispatching services. Our team of
              dedicated professionals works tirelessly to ensure your cargo reaches
              its destination safely and on time.
            </p>
            <p>
              We understand the challenges of the trucking business and are
              committed to providing solutions that help you succeed. Our
              comprehensive services cover all aspects of dispatching, from load
              matching to route optimization.
            </p>
          </AboutText>
          <ValuesContainer>
            {values.map((value, index) => (
              <ValueItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="icon-wrapper">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </ValueItem>
            ))}
          </ValuesContainer>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 