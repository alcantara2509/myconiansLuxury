import React from 'react';
import { MainTitle, ItalicHighlight } from '../../Atoms/Texts';
import map from '../../../assets/icons/map.svg';
import Colors from '../../../Colors';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IslandCruises = () => (
  <section className="island-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <section className="island-highlight-wrapper">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
      </ItalicHighlight>
    </section>
    <section className="island-map">
      <img src={map} alt="map" className="map" />
    </section>
  </section>
);

export default IslandCruises;
