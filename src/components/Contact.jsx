import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
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

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  padding: 3rem;
  background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
  color: white;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  svg {
    font-size: 1.8rem;
    color: white;
    margin-top: 0.3rem;
  }

  div {
    h4 {
      margin: 0 0 0.5rem 0;
      color: white;
      font-size: 1.2rem;
    }

    p {
      margin: 0;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
    }
  }
`;

const ContactForm = styled(motion.form)`
  padding: 3rem;
  background: white;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;

  label {
    display: block;
    margin-bottom: 0.8rem;
    color: #2c3e50;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }

    &::placeholder {
      color: #95a5a6;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <ContactSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </SectionTitle>
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Get in Touch</h3>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@truckdispatch.com</p>
              </div>
            </InfoItem>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </InfoItem>
            <InfoItem
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>123 Trucking Street, Suite 100<br />City, State 12345</p>
              </div>
            </InfoItem>
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Send us a Message</h3>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 