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
  background: #333;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.8rem;

      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  svg {
    font-size: 1.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
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
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/services/box-truck">Box Truck</Link>
              </li>
              <li>
                <Link to="/services/dry-van">Dry Van</Link>
              </li>
              <li>
                <Link to="/services/reefer">Reefer</Link>
              </li>
              <li>
                <Link to="/services/power-only">Power Only</Link>
              </li>
              <li>
                <Link to="/services/hotshot">Hotshot</Link>
              </li>
              <li>
                <Link to="/services/flatbed">Flatbed / Step Deck</Link>
              </li>
            </ul>
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