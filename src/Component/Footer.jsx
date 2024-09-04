import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../assets/Logo.svg'; // Replace with the correct path to your logo

const Footer = () => {
  return (
    <section id='Footer'>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={Logo} alt="Eagle City" className="footer-logo" />
          <h3>Eagle City</h3>
          <p>Your journey to a better living starts here.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>+44 1234 567890</p>
          <p>info@eaglecity.com</p>
          <p>123 Eagle Street, London, UK</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Eagle City. All Rights Reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
