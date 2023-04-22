/* eslint-disable react/prop-types */
import React from 'react';
import { ServicesHomeTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';

const EventsTypes = ({
  image, title, paragraph, side,
}) => (
  <section className="event-planning-container">
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
    </section>
  </section>
);

export default EventsTypes;
