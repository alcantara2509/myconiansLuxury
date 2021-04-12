/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const MenuContent = ({ toggle }) => (
  <section className={toggle}>
    <section className="links-container">
      <NavLink className="links" exact to="/" activeClassName="selected">Home</NavLink>
      <NavLink className="links" to="/villas" activeClassName="selected">Villas</NavLink>
      <NavLink className="links" to="/yachts" activeClassName="selected">Yachts</NavLink>
      <NavLink className="links" to="/services" activeClassName="selected">24/7 Services</NavLink>
      <NavLink className="links" to="/events" activeClassName="selected">Event Planning</NavLink>
      <NavLink className="links" to="/measures" activeClassName="selected">Covid-19 Measures</NavLink>
      <NavLink className="links" to="/blog" activeClassName="selected">Blog</NavLink>
    </section>
    <section className="wish-link-container">
      <NavLink className="links" to="/wishlist" activeClassName="selected">My Wishlist</NavLink>
    </section>
    <section className="languages-container" />
  </section>
);

export default MenuContent;
