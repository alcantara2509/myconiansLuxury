/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Colors from '../../../Colors';
import { MainTitle, Paragraph, ServicesHomeTitle } from '../../Atoms/Texts';
import './style.css';

const Features = ({ title, allYachts, yachtName }) => {
  const [amenities, setAmenities] = useState([]);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const fechtInfo = await allYachts;
      const filterInfo = await fechtInfo.find((e) => e.yachts_name === yachtName);
      if (filterInfo) {
        const listAmenities = filterInfo.amenities.split('*');
        const listSpec = filterInfo.spec.split('*');
        setAmenities(listAmenities);
        setSpecs(listSpec);
      }
    };
    getInfo();
  }, [allYachts]);

  const renderSpecs = () => specs.map((spec) => (
    <Paragraph props={{ textColor: Colors.primaryColor }}>{spec}</Paragraph>
  ));

  const renderAmenities = () => amenities.map((amenitie) => (
    <Paragraph props={{ textColor: Colors.primaryColor }}>{amenitie}</Paragraph>
  ));

  return (
    <section className="features-container">
      <MainTitle props={{ textColor: Colors.primaryColor }}>{title}</MainTitle>
      <section className="features-wrapper">
        <section className="specs-container">
          <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
            specifications
          </ServicesHomeTitle>
          {renderSpecs()}
        </section>
        <section className="amenities-container">
          <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
            amenities
          </ServicesHomeTitle>
          {renderAmenities()}
        </section>
      </section>
    </section>
  );
};

export default Features;
