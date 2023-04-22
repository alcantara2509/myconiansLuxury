import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../../Colors';
import { ItalicHighlight, MainTitle, Paragraph } from '../../Atoms/Texts';
import { iconArrowRight } from '../../../assets';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const ExtraServices = () => (
  <section className="extra-services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).paragraph}
    </Paragraph>
    <br />
    <Link to="/services" className="find-out-more">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
        <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
      </ItalicHighlight>
    </Link>
  </section>
);

export default ExtraServices;
