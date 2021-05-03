import React from 'react';
import { MainTitle, ItalicHighlight } from '../../Atoms/Texts';
import map from '../../../assets/icons/map.svg';
import Colors from '../../../Colors';
import './style.css';

const IslandCruises = () => (
  <section className="island-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      Island Cruises
    </MainTitle>
    <section className="island-highlight-wrapper">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Explore the islands near Mykonos with the comfort of a luxury yacht
      </ItalicHighlight>
    </section>
    <section className="island-map">
      <img src={map} alt="map" className="map" />
    </section>
  </section>
);

export default IslandCruises;
