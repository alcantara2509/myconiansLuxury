/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { EventsTypes, EventsTypes2 } from '../../Molecules';
import {
  bannerWeddings, bannerYachtparties, pictureEvents,
} from '../../../assets';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IntroEvents = () => (
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

    <EventsTypes
      image={bannerWeddings}
      title={languages(english, portuguese, spanish).servicesTitle1}
      paragraph={languages(english, portuguese, spanish).servicesParagraph1}
      link="weddings"
      side="left"
    />
    <EventsTypes
      image={bannerYachtparties}
      title={languages(english, portuguese, spanish).servicesTitle2}
      paragraph={languages(english, portuguese, spanish).servicesParagraph2}
      link="parties"
      reverse="reverse"
    />
    <EventsTypes2
      image={pictureEvents}
      title={languages(english, portuguese, spanish).servicesTitle3}
      paragraph={languages(english, portuguese, spanish).servicesParagraph3}
      side="left"
    />
  </section>
);

export default IntroEvents;
