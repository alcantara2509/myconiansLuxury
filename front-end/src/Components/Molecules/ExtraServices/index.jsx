import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../../Colors';
import { ItalicHighlight, MainTitle, Paragraph } from '../../Atoms/Texts';
import { iconArrowRight } from '../../../assets';
import './style.css';

const ExtraServices = () => (
  <section className="extra-services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      Extra Services
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Upon request we can arrange absolutely anything.
      Bigger villas, larger yachts, extra staff, VIP services,
      taylor-made experiences - everything you need!
    </Paragraph>
    <br />
    <Link to="/services" className="find-out-more">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        FIND OUT MORE
        <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
      </ItalicHighlight>
    </Link>
  </section>
);

export default ExtraServices;
