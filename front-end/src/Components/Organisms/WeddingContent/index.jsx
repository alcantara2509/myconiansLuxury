import React from 'react';
import { pictureWeddings1, pictureWeddings2, pictureWeddings3 } from '../../../assets';
import Colors from '../../../Colors';
import { Paragraph, ParagraphDesktop } from '../../Atoms/Texts';
import './style.css';

const WeddingContent = () => (
  <section className="wedding-content-container">
    <section className="section-wed">
      <img className="image-size-wedding" src={pictureWeddings1} alt="wedding" />
      <section className="intro-services-content-resp mobile">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          We bring a fresh perspective and innovative
          <br />
          approach to wedding design, event planning
          <br />
          & management, merged with traditional
          <br />
          wedding planning and etiquette.
          <br />
          We expertly guide the lovebirds through the
          <br />
          wedding planning process to create an event
          <br />
          reflective of the couple&apos;s personality.
        </Paragraph>
      </section>
      <section className="intro-services-content-resp desktop">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          We bring a fresh perspective and innovative
          <br />
          approach to wedding design, event planning
          <br />
          & management, merged with traditional
          <br />
          wedding planning and etiquette.
          <br />
          We expertly guide the lovebirds through the
          <br />
          wedding planning process to create an event
          <br />
          reflective of the couple&apos;s personality.
        </ParagraphDesktop>
      </section>
    </section>

    <section className="section-wed-reverse">
      <img className="image-size-wedding" src={pictureWeddings2} alt="wedding" />
      <section className="intro-services-content-resp mobile">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          What characterizes us is the fact that we
          <br />
          truly listen and understand your wishes and
          <br />
          your vision and then we are ready to go all
          <br />
          the way to make it real.
          <br />
          With our attention to detail, a flair for design
          <br />
          and a passion for delivering truly unique
          <br />
          wedding events, we can seamlessly produce
          <br />
          an exceptional and unique wedding
          <br />
          experience.
        </Paragraph>
      </section>
      <section className="intro-services-content-resp desktop">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          What characterizes us is the fact that we
          <br />
          truly listen and understand your wishes and
          <br />
          your vision and then we are ready to go all
          <br />
          the way to make it real.
          <br />
          With our attention to detail, a flair for design
          <br />
          and a passion for delivering truly unique
          <br />
          wedding events, we can seamlessly produce
          <br />
          an exceptional and unique wedding
          <br />
          experience.
        </ParagraphDesktop>
      </section>
    </section>

    <section className="section-wed">
      <img className="image-size-wedding" src={pictureWeddings3} alt="wedding" />
      <section className="intro-services-content-resp mobile">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          If you are dreaming of a splendid honeymoon
          <br />
          in a place that combines style with class, then
          <br />
          search no more and start picturing the
          <br />
          perfect honeymoon in Mykonos!
        </Paragraph>
      </section>
      <section className="intro-services-content-resp desktop">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          If you are dreaming of a splendid honeymoon
          <br />
          in a place that combines style with class, then
          <br />
          search no more and start picturing the
          <br />
          perfect honeymoon in Mykonos!
        </ParagraphDesktop>
      </section>
    </section>
  </section>
);

export default WeddingContent;
