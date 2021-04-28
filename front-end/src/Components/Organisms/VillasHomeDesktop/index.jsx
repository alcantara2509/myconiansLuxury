/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, ParagraphDesktop } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerVillas from '../../../assets/images/bannerVillas.jpg';
import { DarkButton } from '../../Atoms';
import './style.css';

const LinkSectionHome = () => (
  <section className="link-section-home-desktop desktop">
    <img src={bannerVillas} alt="villa" className="link-section-image-desktop" />
    <section className="villas-home-desk-info">
      <section className="home-sections-desktop-title">
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          VILLA HOLIDAYS
        </MainTitle>
      </section>
      <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
        Our accommodation portfolio only includes
        <br />
        the most exclusive properties in Mykonos.
        <br />
        <br />
        Experience the perfect balance between
        <br />
        ultimate luxury and the comfort of your own
        <br />
        home. Outstanding villas, breathtaking views,
        <br />
        unique experiences you will never forget.
      </ParagraphDesktop>
      <section className="home-sections-desktop-btn">
        <DarkButton linkTo="/villas">
          See All Villas
        </DarkButton>
      </section>
    </section>
  </section>
);

export default LinkSectionHome;