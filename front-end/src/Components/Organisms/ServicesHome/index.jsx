import React from 'react';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
// eslint-disable-next-line import/no-cycle
import { ServicesMolecules } from '../../Molecules';
import { iconConcierge, iconTravel, iconBespoke } from '../../../assets';
import './style.css';

const ServicesHome = () => (
  <section className="services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }} style={{ padding: '0 80px' }}>
      Luxury services
    </MainTitle>
    <section className="services-molecules-container-desktop">
      <ServicesMolecules title="vip concierge" source={iconConcierge}>
        Enjoy your holidays in
        <br />
        Mykonos with exceptional
        <br />
        quality of service, for those
        <br />
        who desire experiences of a
        <br />
        lifetime.. We provide VIP
        <br />
        reservations from the best
        <br />
        restaurants, beach clubs,
        <br />
        luxury parties and more.
      </ServicesMolecules>
      <ServicesMolecules title="travel experts" source={iconTravel}>
        Our travel experts will make a
        <br />
        unique itinerary according to
        <br />
        your wishes, of multiple
        <br />
        destinations, with a detailed
        <br />
        reference in terms of lodging,
        <br />
        transportation services and
        <br />
        activities, taking your whole
        <br />
        traveling experience to the
        <br />
        next level.
      </ServicesMolecules>
      <ServicesMolecules title="bespoke services" source={iconBespoke}>
        Upon request we can arrange
        <br />
        absolutely anything during
        <br />
        your stay in Mykonos. We
        <br />
        have a variety of luxury
        <br />
        services you can combine
        <br />
        with any of our charters.
        <br />
        From 24/7 concierge services
        <br />
        to tailor-made memorable
        <br />
        experiences.
      </ServicesMolecules>
    </section>
  </section>
);

export default ServicesHome;
