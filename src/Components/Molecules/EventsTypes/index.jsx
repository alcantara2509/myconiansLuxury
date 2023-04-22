/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesHomeTitle, Paragraph, ItalicHighlight } from '../../Atoms/Texts';
import { iconArrowRight } from '../../../assets';
import Colors from '../../../Colors';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const EventsTypes = ({
  image, title, paragraph, link, side, reverse,
}) => (
  <section className={`event-planning-container ${reverse}`}>
    <img src={image} alt={title} className="image-size-type-events mobile" />
    <div
      className="image-size-type-events desktop"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      id={side}
    />
    <section className="event-planning-itens">
      <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
        {title}
      </ServicesHomeTitle>
      <section className="type-paragraph">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          {paragraph}
        </Paragraph>
      </section>
      <Link to={link} className="find-out-more">
        <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).link}
          <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
        </ItalicHighlight>
      </Link>
    </section>
  </section>
);

export default EventsTypes;
