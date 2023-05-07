import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconArrowUp,
} from "../../../assets";
import "./style.css";

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
        <p className="footer-p">Phone: +30 698 404 3180</p>
        <p className="footer-p">WhatsApp: +30 698 404 3180</p>
        <p className="footer-p">E-mail: myconianluxury@gmail.com</p>
      </section>
      <section className="social-container">
        <h3 className="footer-subtitle">Social</h3>
        <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
          <img src={iconFacebook} alt="LinkedIn" className="social-icons" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/myconianluxury"
          rel="noreferrer"
        >
          <img src={iconInstagram} alt="Instagram" className="social-icons" />
        </a>
        <a target="_blank" href="https://pinterest.com/" rel="noreferrer">
          <img src={iconPinterest} alt="Twitter" className="social-icons" />
        </a>
      </section>
    </section>
  </footer>
);

export default Footer;
