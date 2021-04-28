/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, ParagraphDesktop } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerServices from '../../../assets/images/bannerServices.jpg';
import { DarkButton } from '../../Atoms';

const LinkSectionHome = () => (
  <section className="link-section-home-desktop desktop">
    <img src={bannerServices} alt="villa" className="link-section-image-desktop" />
    <section className="villas-home-desk-info">

      <section className="home-sections-desktop-title">
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          LUXURY CONCIERGE
        </MainTitle>
      </section>
      <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
        Our leading premium lifestyle management
        <br />
        and concierge services are provided by a
        <br />
        dedicated team of lifestyle managers that
        <br />
        always satisfy our clients preferences.
        <br />
        <br />
        Your personal concierge will be 24/7 at your
        <br />
        disposal on all locations.
      </ParagraphDesktop>
      <section className="home-sections-desktop-btn">
        <DarkButton linkTo="/services">
          Find out more
        </DarkButton>
      </section>
    </section>
  </section>
);

export default LinkSectionHome;
