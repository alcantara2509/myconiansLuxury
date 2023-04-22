/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { ServicesTypes } from '../../Molecules';
import {
  pictureConcierge, pictureFood, pictureTransfer, pictureSecurity, pictureAesthetic,
} from '../../../assets';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IntroServices = () => (
  <section className="intro-services-container">
    <section className="intro-services-content-resp">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).title}
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).paragraph}
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
      </ItalicHighlight>
    </section>
    <section className="intro-services-types-container">
      <ServicesTypes
        image={pictureConcierge}
        title={languages(english, portuguese, spanish).servicesTitle1}
        paragraph={languages(english, portuguese, spanish).servicesParagraph1}
      />
      <ServicesTypes
        image={pictureFood}
        title={languages(english, portuguese, spanish).servicesTitle2}
        paragraph={languages(english, portuguese, spanish).servicesParagraph2}
      />
      <ServicesTypes
        image={pictureTransfer}
        title={languages(english, portuguese, spanish).servicesTitle3}
        paragraph={languages(english, portuguese, spanish).servicesParagraph3}
      />
      <ServicesTypes
        image={pictureSecurity}
        title={languages(english, portuguese, spanish).servicesTitle4}
        paragraph={languages(english, portuguese, spanish).servicesParagraph4}
      />
      <ServicesTypes
        image={pictureAesthetic}
        title={languages(english, portuguese, spanish).servicesTitle5}
        paragraph={languages(english, portuguese, spanish).servicesParagraph5}
      />
    </section>
  </section>
);

export default IntroServices;
