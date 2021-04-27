/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, ParagraphDesktop } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerVillas from '../../../assets/images/bannerVillas.jpg';
import { DarkButton } from '../../Atoms';
import './style.css';

const LinkSectionHome = () => (
  <section className="link-section-home-desktop desktop">
    <img src={bannerVillas} alt="villa" className="link-section-image" />
    <section className="villas-home-desk-info">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        VILLA HOLIDAYS
      </MainTitle>
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
      <DarkButton linkTo="/villas">
        See All Villas
      </DarkButton>
    </section>
  </section>
);

export default LinkSectionHome;
