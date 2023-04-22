/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import languages from "../../../Utils/languages";
import { english, portuguese, spanish } from "./languages";
import "./style.css";

const MenuContent = ({ toggle, lang }) => (
  <section className={toggle}>
    <section className="links-container">
      <NavLink className="links" to="/villas" activeClassName="selected">
        {languages(english, portuguese, spanish).link1}
      </NavLink>
      <NavLink className="links" to="/yachts" activeClassName="selected">
        {languages(english, portuguese, spanish).link2}
      </NavLink>
      <NavLink className="links" to="/destinations" activeClassName="selected">
        {languages(english, portuguese, spanish).link3}
      </NavLink>
      <NavLink className="links" to="/services" activeClassName="selected">
        {languages(english, portuguese, spanish).link4}
      </NavLink>
      <NavLink className="links" to="/events" activeClassName="selected">
        {languages(english, portuguese, spanish).link5}
      </NavLink>
      {/* <NavLink className="links" to="/blog" activeClassName="selected">Blog</NavLink> */}
    </section>
    <section className="wish-link-container">
      <NavLink className="links" to="/wishlist" activeClassName="selected">
        {languages(english, portuguese, spanish).link6}
      </NavLink>
    </section>
    <section className="languages-container">{lang}</section>
  </section>
);

export default MenuContent;
