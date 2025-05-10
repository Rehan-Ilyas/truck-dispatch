import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTruck,
} from 'react-icons/fa';

const FooterSection = styled.footer`
  background: linear-gradient(to right, #1a1a1a, #2d2d2d);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #007bff, #00bfff);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #fff;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background: #007bff;
    }
  }

  p {
    color: #b3b3b3;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      color: #b3b3b3;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: '•';
        color: #007bff;
      }
    }
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2rem;
    color: #007bff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;

  a {
    color: #b3b3b3;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      color: #fff;
      background: #007bff;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #b3b3b3;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <Logo to="/">
              <FaTruck />
              Truck Dispatch
            </Logo>
            <p>
              Professional truck dispatching services for all your transportation needs.
              We help you streamline your logistics and grow your business.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </SocialLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Contact Info</h3>
            <ul>
              <li>123 Trucking Street, Suite 100</li>
              <li>City, State 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@truckdispatch.com</li>
            </ul>
          </FooterColumn>
        </FooterGrid>
        <Copyright>
          &copy; {new Date().getFullYear()} Truck Dispatch. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 