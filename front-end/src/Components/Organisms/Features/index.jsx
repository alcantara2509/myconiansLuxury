/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Colors from '../../../Colors';
import { MainTitle, Paragraph, ServicesHomeTitle } from '../../Atoms/Texts';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Features = ({ title, allVillas, villaName }) => {
  const [amenities, setAmenities] = useState([]);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const fechtInfo = await allVillas;
      const filterInfo = await fechtInfo.find((e) => e.villas_name === villaName);
      if (filterInfo) {
        const listAmenities = filterInfo.amenities.split('*');
        const listSpec = filterInfo.spec.split('*');
        setAmenities(listAmenities);
        setSpecs(listSpec);
      }
    };
    getInfo();
  }, [allVillas]);

  const renderSpecs = () => specs.map((spec, id) => (
    <Paragraph key={id} props={{ textColor: Colors.primaryColor }}>{spec}</Paragraph>
  ));

  const renderAmenities = () => amenities.map((amenitie, id) => (
    <Paragraph key={id} props={{ textColor: Colors.primaryColor }}>{amenitie}</Paragraph>
  ));

  return (
    <section className="features-container">
      <MainTitle props={{ textColor: Colors.primaryColor }}>{title}</MainTitle>
      <section className="features-wrapper">
        <section className="specs-container">
          <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
            {languages(english, portuguese, spanish).title1}
          </ServicesHomeTitle>
          {renderSpecs()}
        </section>
        <section className="amenities-container">
          <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
            {languages(english, portuguese, spanish).title2}
          </ServicesHomeTitle>
          {renderAmenities()}
        </section>
      </section>
    </section>
  );
};

export default Features;
