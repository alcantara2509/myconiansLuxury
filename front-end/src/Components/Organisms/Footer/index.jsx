import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { iconFavs } from '../../../assets';
import './style.css';

const Footer = () => (
  <section className="footer-container">
    <section className="footer-arrow-content">
      <Link to="#top" className="footer-arrow">
        <img src={iconFavs} alt="icon" className="arrow-icon" />
      </Link>
    </section>
    <h2 className="footer-title">Myconian Luxury ®</h2>
    <h3 className="footer-subtitle">Contact</h3>
    <p className="footer-p">Phone: +30.690.707.4177</p>
    <p className="footer-p">WhatsApp: +30.690.707.4177</p>
    <p className="footer-p">E-mail: villas@luxuryholidaysgreece.com</p>
    <section className="socail-container">
      <h3 className="footer-subtitle">Social</h3>
      <img src={iconFavs} alt="LinkedIn" className="social-icons" />
      <img src={iconFavs} alt="Instagram" className="social-icons" />
      <img src={iconFavs} alt="Twitter" className="social-icons" />
    </section>
  </section>
);

export default Footer;
