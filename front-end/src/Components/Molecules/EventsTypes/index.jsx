/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesHomeTitle, Paragraph, ItalicHighlight } from '../../Atoms/Texts';
import { iconArrowRight } from '../../../assets';
import Colors from '../../../Colors';
import './style.css';

const EventsTypes = ({
  image, title, paragraph, link,
}) => (
  <>
    <img src={image} alt={title} className="image-size-type" />
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
        Find Out more
        <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
      </ItalicHighlight>
    </Link>
  </>
);

export default EventsTypes;
