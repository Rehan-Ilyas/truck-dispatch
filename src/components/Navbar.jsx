import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTruck, 
  FaBars, 
  FaTimes, 
  FaBox, 
  FaSnowflake, 
  FaRoad, 
  FaBolt, 
  FaShippingFast, 
  FaLayerGroup, 
  FaHome, 
  FaInfoCircle, 
  FaDollarSign, 
  FaEnvelope, 
  FaChevronDown,
  FaMoneyBillWave,
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 58px;
    width: auto;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background: #000000;
    padding: 2rem;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 1001;
    overflow-y: auto;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000000;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #000000;
    
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: #000000;
    
    &::after {
      width: 100%;
    }
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ServicesDropdown = styled.div`
  position: relative;
  cursor: pointer;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000000;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #000000;
    
    &::after {
      width: 100%;
    }
  }

  svg {
    font-size: 1.2rem;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: #2c3e50;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const MobileNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    text-align: left;
  }

  .chevron {
    margin-left: auto;
    flex-shrink: 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const services = [
  { 
    name: 'Trucks',
    items: [
      { name: 'Box Truck', path: '/services/box-truck', icon: <FaBox /> },
      { name: 'Dry Van', path: '/services/dry-van', icon: <FaShippingFast /> },
      { name: 'Reefer', path: '/services/reefer', icon: <FaSnowflake /> },
      { name: 'Power Only', path: '/services/power-only', icon: <FaBolt /> },
      { name: 'Hotshot', path: '/services/hotshot', icon: <FaRoad /> },
      { name: 'Flatbed / Step Deck', path: '/services/flatbed', icon: <FaLayerGroup /> }
    ]
  },
  {
    name: 'RTS Financial',
    items: [
      { name: 'Financial Services', path: '/services/financial', icon: <FaMoneyBillWave /> }
    ]
  },
  {
    name: 'Tracking',
    items: [
      { name: 'Tracking Solutions', path: '/services/tracking', icon: <FaMapMarkerAlt /> }
    ]
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/Logo.png" alt="Logo" />
        </Logo>

        <DesktopNavLinks>
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FaHome /> Home
          </NavLink>
          <NavLink as="button" onClick={() => scrollToSection('about')}>
            <FaInfoCircle /> About
          </NavLink>
          <ServicesDropdown
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <FaTruck /> Services <FaChevronDown />
            {isDesktopServicesOpen && (
              <DropdownMenu
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {services.map((category, index) => (
                  <React.Fragment key={index}>
                    <DropdownItem as="div" style={{ color: '#ff6b6b', fontWeight: 'bold', padding: '0.5rem 1rem' }}>
                      {category.name}
                    </DropdownItem>
                    {category.items.map((item, itemIndex) => (
                      <DropdownItem key={itemIndex} to={item.path}>
                        {item.icon} {item.name}
                      </DropdownItem>
                    ))}
                    {index < services.length - 1 && (
                      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenu>
            )}
          </ServicesDropdown>
          <NavLink as="button" onClick={() => scrollToSection('pricing')}>
            <FaDollarSign /> Pricing
          </NavLink>
          <NavLink as="button" onClick={() => scrollToSection('contact')}>
            <FaEnvelope /> Contact
          </NavLink>
        </DesktopNavLinks>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
              <NavLinks
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                isOpen={isMenuOpen}
              >
                <MobileNavItem as={Link} to="/" onClick={() => {
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  <FaHome /> <span>Home</span>
                </MobileNavItem>
                <MobileNavItem as="button" onClick={() => scrollToSection('about')}>
                  <FaInfoCircle /> <span>About</span>
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsServicesOpen(!isServicesOpen)}>
                  <FaTruck /> <span>Services</span> <FaChevronDown className="chevron" />
                </MobileNavItem>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {services.map((category, index) => (
                      <React.Fragment key={index}>
                        <MobileNavItem as="div" style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                          {category.name}
                        </MobileNavItem>
                        {category.items.map((item, itemIndex) => (
                          <MobileNavItem
                            key={itemIndex}
                            as={Link}
                            to={item.path}
                            onClick={closeMenu}
                            style={{ paddingLeft: '2rem' }}
                          >
                            {item.icon} <span>{item.name}</span>
                          </MobileNavItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </motion.div>
                )}
                <MobileNavItem as="button" onClick={() => scrollToSection('pricing')}>
                  <FaDollarSign /> <span>Pricing</span>
                </MobileNavItem>
                <MobileNavItem as="button" onClick={() => scrollToSection('contact')}>
                  <FaEnvelope /> <span>Contact</span>
                </MobileNavItem>
              </NavLinks>
            </>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
