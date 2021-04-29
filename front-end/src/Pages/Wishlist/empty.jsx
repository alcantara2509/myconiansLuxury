import React from 'react';
import { iconFavs } from '../../assets';
import Colors from '../../Colors';
import { Paragraph } from '../../Components/Atoms/Texts';

const renderEmpty = () => (
  <section className="empty-container">
    <img src={iconFavs} alt="icon" className="empty-icon" />
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Your wishlist is empty!
      <br />
      Tap heart button to start saving items.
    </Paragraph>
  </section>
);

export default renderEmpty;
