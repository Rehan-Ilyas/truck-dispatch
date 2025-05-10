import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTruck, FaBars, FaTimes, FaBox, FaSnowflake, FaRoad, FaBolt, FaShippingFast, FaLayerGroup, FaHome, FaInfoCircle, FaDollarSign, FaEnvelope, FaChevronDown } from 'react-icons/fa';


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
    height: 72px;
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

const MobileNavItem = styled.div`  display: flex;
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const services = [
    { name: 'Box Truck', path: '/services/box-truck', icon: <FaBox /> },
    { name: 'Dry Van', path: '/services/dry-van', icon: <FaTruck /> },
    { name: 'Reefer', path: '/services/reefer', icon: <FaSnowflake /> },
    { name: 'Power Only', path: '/services/power-only', icon: <FaBolt /> },
    { name: 'Hotshot', path: '/services/hotshot', icon: <FaShippingFast /> },
    { name: 'Flatbed / Step Deck', path: '/services/flatbed', icon: <FaLayerGroup /> },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/Logo.png" alt="Truck Dispatch Logo" />
        </Logo>

        <DesktopNavLinks>
          <NavLink to="/">
            <FaHome />
            Home
          </NavLink>
          <NavLink to="/about">
            <FaInfoCircle />
            About Us
          </NavLink>
          <ServicesDropdown
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <FaTruck />
            Services
            <FaChevronDown />
            <AnimatePresence>
              {isDesktopServicesOpen && (
                <DropdownMenu
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service) => (
                    <DropdownItem key={service.name} to={service.path}>
                      {service.icon}
                      {service.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </ServicesDropdown>
          <NavLink to="/pricing">
            <FaDollarSign />
            Pricing
          </NavLink>
          <NavLink to="/contact">
            <FaEnvelope />
            Contact Us
          </NavLink>
        </DesktopNavLinks>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
        
        <AnimatePresence>
          {isMenuOpen && (
            <NavLinks
              isOpen={isMenuOpen}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div variants={itemVariants}>
                <MobileNavItem as={Link} to="/" onClick={closeMenu}>
                  <FaHome />
                  <span>Home</span>
                </MobileNavItem>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileNavItem as={Link} to="/about" onClick={closeMenu}>
                  <FaInfoCircle />
                  <span>About Us</span>
                </MobileNavItem>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MobileNavItem
                  onClick={(e) => {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                >
                  <FaTruck />
                  <span>Services</span>
                  <FaChevronDown className="chevron" />
                </MobileNavItem>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {services.map((service) => (
                        <motion.div
                          key={service.name}
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                        >
                          <MobileNavItem
                            as={Link}
                            to={service.path}
                            onClick={closeMenu}
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </MobileNavItem>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={itemVariants}>
                <MobileNavItem as={Link} to="/pricing" onClick={closeMenu}>
                  <FaDollarSign />
                  <span>Pricing</span>
                </MobileNavItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <MobileNavItem as={Link} to="/contact" onClick={closeMenu}>
                  <FaEnvelope />
                  <span>Contact Us</span>
                </MobileNavItem>
              </motion.div>
            </NavLinks>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 
