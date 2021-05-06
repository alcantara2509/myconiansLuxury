import React from 'react';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
// eslint-disable-next-line import/no-cycle
import { ServicesMolecules } from '../../Molecules';
import { iconConcierge, iconTravel, iconBespoke } from '../../../assets';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const ServicesHome = () => (
  <section className="services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }} style={{ padding: '0 80px' }}>
      {languages(english, portuguese, spanish).mainTitle}
    </MainTitle>
    <section className="services-molecules-container-desktop">
      <ServicesMolecules
        title={languages(english, portuguese, spanish).title1}
        source={iconConcierge}
      >
        {languages(english, portuguese, spanish).paragraph1}
      </ServicesMolecules>
      <ServicesMolecules
        title={languages(english, portuguese, spanish).title2}
        source={iconTravel}
      >
        {languages(english, portuguese, spanish).paragraph2}
      </ServicesMolecules>
      <ServicesMolecules
        title={languages(english, portuguese, spanish).title3}
        source={iconBespoke}
      >
        {languages(english, portuguese, spanish).paragraph3}
      </ServicesMolecules>
    </section>
  </section>
);

export default ServicesHome;
