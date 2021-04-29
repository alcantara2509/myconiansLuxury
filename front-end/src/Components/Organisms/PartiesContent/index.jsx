import React from 'react';
import { pictureYachtparty1, pictureYachtparty2 } from '../../../assets';
import Colors from '../../../Colors';
import { Paragraph, ParagraphDesktop } from '../../Atoms/Texts';
import './style.css';

const PartiesContent = () => (
  <section className="wedding-content-container">
    <section className="section-wed">
      <img className="image-size-wedding" src={pictureYachtparty1} alt="wedding" />
      <section className="intro-services-content-resp mobile">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          Bachelor, hen party or just a yacht party for
          <br />
          dancing to the biggest tunes, in front of the
          <br />
          amazing Aegean coastline with friends.
          <br />
          <br />
          We can arrange everything for your yacht party
          <br />
          from start to finish. From selecting the ideal
          <br />
          party yacht, famous DJs, design lighting, finger
          <br />
          food, drinks, wines, champagne, bartenders,
          <br />
          waiters, hostess, and the list goes on.
        </Paragraph>
      </section>
      <section className="intro-services-content-resp desktop">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          Bachelor, hen party or just a yacht party for
          <br />
          dancing to the biggest tunes, in front of the
          <br />
          amazing Aegean coastline with friends.
          <br />
          <br />
          We can arrange everything for your yacht party
          <br />
          from start to finish. From selecting the ideal
          <br />
          party yacht, famous DJs, design lighting, finger
          <br />
          food, drinks, wines, champagne, bartenders,
          <br />
          waiters, hostess, and the list goes on.
        </ParagraphDesktop>
      </section>
    </section>

    <section className="section-wed-reverse">
      <img className="image-size-wedding" src={pictureYachtparty2} alt="wedding" />
      <section className="intro-services-content-resp mobile">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          Our extensive knowledge, experience, and
          <br />
          contacts will ensure your yacht event is
          <br />
          planned to perfection. We can provide you
          <br />
          with an exclusive insight into experiencing a
          <br />
          World-Class celebration.
          <br />
          Our Mykonos yacht event planners manage all
          <br />
          the key ingredients to deliver truly remarkable
          <br />
          and bespoke yacht events with our events
          <br />
          design and event planning service.
        </Paragraph>
      </section>
      <section className="intro-services-content-resp desktop">
        <ParagraphDesktop props={{ textColor: Colors.primaryColor }}>
          Our extensive knowledge, experience, and
          <br />
          contacts will ensure your yacht event is
          <br />
          planned to perfection. We can provide you
          <br />
          with an exclusive insight into experiencing a
          <br />
          World-Class celebration.
          <br />
          Our Mykonos yacht event planners manage all
          <br />
          the key ingredients to deliver truly remarkable
          <br />
          and bespoke yacht events with our events
          <br />
          design and event planning service.
        </ParagraphDesktop>
      </section>
    </section>
  </section>
);

export default PartiesContent;
