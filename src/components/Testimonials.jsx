import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  margin-bottom: 1rem;
  color: #000000;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #00f2fe, #4facfe);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #000000;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.gradientColor};
    border-radius: 15px;
    z-index: 0;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #00f2fe, #4facfe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 242, 254, 0.3);
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  color: #ffc107;
  font-size: 1.2rem;
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #000000;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  font-style: italic;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #00f2fe;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  svg {
    width: 70%;
    height: 70%;
    color: #000000;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0;
    color: #000000;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #000000;
    font-size: 0.9rem;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(to right, #ff6b6b, #ff8e8e);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(to right, #ff6b6b, #ff8e8e);
    transition: width 0.1s linear;
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cardColors = [
    {
      gradientColor: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 142, 0.1) 100%)'
    },
    {
      gradientColor: 'linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(0, 86, 179, 0.1) 100%)'
    },
    {
      gradientColor: 'linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(33, 136, 56, 0.1) 100%)'
    }
  ];

  const testimonials = [
    {
      stars: 5,
      quote: 'The dispatching service has been a game-changer for our business. Their team is professional and always responsive. We\'ve seen a significant improvement in our operations and efficiency.',
      author: {
        name: 'John Smith',
        role: 'Owner, Smith Trucking',
      },
    },
    {
      stars: 5,
      quote: 'We\'ve been working with this dispatching service for over a year now, and they\'ve consistently delivered excellent results. Their attention to detail and customer service is outstanding.',
      author: {
        name: 'Sarah Johnson',
        role: 'Operations Manager, Johnson Logistics',
      },
    },
    {
      stars: 5,
      quote: 'The level of service and attention to detail is outstanding. They\'ve helped us optimize our routes and increase efficiency. Our business has grown significantly since partnering with them.',
      author: {
        name: 'Mike Williams',
        role: 'Fleet Manager, Williams Transport',
      },
    },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 15);
    }

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setProgress(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setProgress(0);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <SectionSubtitle>
          Don't just take our word for it. Here's what our clients have to say about our services.
        </SectionSubtitle>
        <TestimonialsContainer>
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              gradientColor={cardColors[currentIndex].gradientColor}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <StarsContainer>
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </StarsContainer>
              <Quote>{testimonials[currentIndex].quote}</Quote>
              <AuthorContainer>
                <AuthorImage>
                  <FaUser />
                </AuthorImage>
                <AuthorInfo>
                  <h4>{testimonials[currentIndex].author.name}</h4>
                  <p>{testimonials[currentIndex].author.role}</p>
                </AuthorInfo>
              </AuthorContainer>
              <ProgressBar progress={progress} />
            </TestimonialCard>
          </AnimatePresence>
          <NavigationButtons>
            <NavButton onClick={prevTestimonial} disabled={currentIndex === 0}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={nextTestimonial} disabled={currentIndex === testimonials.length - 1}>
              <FaChevronRight />
            </NavButton>
          </NavigationButtons>
        </TestimonialsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;