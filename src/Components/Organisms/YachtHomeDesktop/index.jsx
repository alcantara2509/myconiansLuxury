/* eslint-disable react/prop-types */
import React from "react";
import { MainTitle, ParagraphDesktop } from "../../Atoms/Texts";
import Colors from "../../../Colors";
import bannerYachts from "../../../assets/images/bannerWorldwide.jpeg";
import { DarkButton } from "../../Atoms";
import languages from "../../../Utils/languages";
import { english, portuguese, spanish } from "../YachtHome/languages";

const LinkSectionHome = () => (
  <section className="link-section-home-desktop desktop">
    <section className="villas-home-desk-info">
      <section className="home-sections-desktop-title">
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).title}
        </MainTitle>
      </section>
      <section className="villas-home-paragraph-container">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).paragraph}
        </ParagraphDesktop>
      </section>
      <section className="home-sections-desktop-btn">
        <DarkButton linkTo="/destinations">
          {languages(english, portuguese, spanish).darkButton}
        </DarkButton>
      </section>
    </section>
    <img
      src={bannerYachts}
      alt="villa"
      className="link-section-image-desktop"
    />
  </section>
);

export default LinkSectionHome;
