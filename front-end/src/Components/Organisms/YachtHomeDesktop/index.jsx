/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, ParagraphDesktop } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerYachts from '../../../assets/images/bannerYachts.jpg';
import { DarkButton } from '../../Atoms';

const LinkSectionHome = () => (
  <section className="link-section-home-desktop desktop">
    <section className="villas-home-desk-info">
      <section className="home-sections-desktop-title">
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          LUXURY YACHTING
        </MainTitle>
      </section>
      <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
        Explore the best of Greece on a luxury yacht
        <br />
        charter. A list of luxury services and activities
        <br />
        added to make your yacht holidays unique.
        <br />
        <br />
        Charter a yacht and explore the nearby
        <br />
        islands, practice water sports and discover
        <br />
        spectacular beaches.
      </ParagraphDesktop>
      <section className="home-sections-desktop-btn">
        <DarkButton linkTo="/yachts">
          See Yacht Charter
        </DarkButton>
      </section>
    </section>
    <img src={bannerYachts} alt="villa" className="link-section-image-desktop" />
  </section>
);

export default LinkSectionHome;
