import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
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

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid #000000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(to right, #00f2fe, #4facfe);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.5rem;
  }

  .info {
    h3 {
      color: #000000;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    p {
      color: #000000;
      margin: 0;
    }
  }
`;

const ContactForm = styled.form`
  background: #ffffff;
  padding: 3rem;
  border-radius: 15px;
  border: 1px solid #000000;

  h3 {
    color: #000000;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #000000;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #000000;
      border-radius: 8px;
      background: #ffffff;
      color: #000000;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #00f2fe;
        box-shadow: 0 0 0 2px rgba(0, 242, 254, 0.2);
      }

      &::placeholder {
        color: #666666;
      }
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to right, #00f2fe, #4facfe);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 242, 254, 0.3);
    }
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
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </SectionTitle>
        <SectionSubtitle>
          Get in touch with us for all your transportation needs.
        </SectionSubtitle>
        <ContactGrid>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="info">
                <h3>Email</h3>
                <p>info@truckdispatch.com</p>
              </div>
            </ContactCard>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="icon-wrapper">
                <FaPhone />
              </div>
              <div className="info">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </ContactCard>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="info">
                <h3>Address</h3>
                <p>123 Trucking Street, Suite 100<br />City, State 12345</p>
              </div>
            </ContactCard>
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3>Send us a Message</h3>
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </div>
            <button type="submit">Send Message</button>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;