import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  iconLinkedIn, iconInstagram, iconTwitter, iconArrowUp,
} from '../../../assets';
import './style.css';

const Footer = () => (
  <footer className="footer-container">
    <section className="footer-arrow-content">
      <Link to="#top" className="footer-arrow">
        <img src={iconArrowUp} alt="icon" className="arrow-icon" />
      </Link>
    </section>
    <h2 className="footer-title">Myconian Luxury ®</h2>
    <section className="footer-elements-container">
      <section>
        <h3 className="footer-subtitle">Contact</h3>
        <p className="footer-p">Phone: +30.690.707.4177</p>
        <p className="footer-p">WhatsApp: +30.690.707.4177</p>
        <p className="footer-p">E-mail: villas@luxuryholidaysgreece.com</p>
      </section>
      <section className="social-container">
        <h3 className="footer-subtitle">Social</h3>
        <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
          <img src={iconLinkedIn} alt="LinkedIn" className="social-icons" />
        </a>
        <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
          <img src={iconInstagram} alt="Instagram" className="social-icons" />
        </a>
        <a target="_blank" href="https://twitter.com/" rel="noreferrer">
          <img src={iconTwitter} alt="Twitter" className="social-icons" />
        </a>
      </section>
    </section>
  </footer>
);

export default Footer;
