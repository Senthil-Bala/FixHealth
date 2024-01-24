import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // You can create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>
              Address: 123 Health Street, Bengaluru, Karnataka
              <br />
              Email: info@fixhealth.com
              <br />
              Phone: +91 (123) 456-7890
            </p>
          </Col>
          <Col md={3}>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p>&copy; 2024 Fix Health. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
