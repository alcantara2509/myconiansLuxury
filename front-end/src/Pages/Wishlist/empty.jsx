import React from 'react';
import { iconEmptyFavs } from '../../assets';
import Colors from '../../Colors';
import { Paragraph } from '../../Components/Atoms/Texts';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const renderEmpty = () => (
  <section className="empty-container">
    <img src={iconEmptyFavs} alt="icon" className="empty-icon" />
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).subTitle1}
      <br />
      {languages(english, portuguese, spanish).subTitle2}
    </Paragraph>
  </section>
);

export default renderEmpty;
