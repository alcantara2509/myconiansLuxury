import React from 'react';
import { pictureYachtparty1, pictureYachtparty2 } from '../../../assets';
import Colors from '../../../Colors';
import { Paragraph } from '../../Atoms/Texts';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const PartiesContent = () => (
  <section className="wedding-content-container">
    <section className="section-wed">
      <img className="image-size-wedding" src={pictureYachtparty1} alt="wedding" />
      <section className="intro-services-content-resp weddings-paragraph">
        <section className="weddings-paragraph-rigth">
          <Paragraph props={{ textColor: Colors.primaryColor }}>
            {languages(english, portuguese, spanish).paragraph1}
          </Paragraph>
        </section>
      </section>
    </section>

    <section className="section-wed-reverse">
      <img className="image-size-wedding" src={pictureYachtparty2} alt="wedding" />
      <section className="intro-services-content-resp weddings-paragraph">
        <section className="weddings-paragraph-left">
          <Paragraph props={{ textColor: Colors.primaryColor }}>
            {languages(english, portuguese, spanish).paragraph2}
          </Paragraph>
        </section>
      </section>
    </section>
  </section>
);

export default PartiesContent;
