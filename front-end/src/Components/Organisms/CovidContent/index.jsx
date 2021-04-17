import React from 'react';
import Colors from '../../../Colors';
import { MainTitle, Paragraph, ItalicHighlight } from '../../Atoms/Texts';
import './style.css';

const CovidContent = () => (
  <main className="covid-content-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      enjoy your holidays
      <br />
      without worries
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      We are prepared to offer you a safe stay in
      <br />
      Mykonos, following the Covid-19 measures.
      <br />
      <br />
      Our sanitizing policies are reenforced and our
      <br />
      staff is taking every precaution to keep our
      <br />
      guests comfortable and healthy. We ensure
      <br />
      you will travel with luxury and style, having
      <br />
      the peace of mind that your safety is our top
      <br />
      priority.
      <br />
      <br />
      <br />
      <br />
    </Paragraph>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Please follow the instructions from our
      <br />
      staff and enjoy yourself!
    </ItalicHighlight>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Please wear a mask
      <br />
      <br />
      Respect sneeze & cough etiquette
      <br />
      <br />
      Keep social distance
      <br />
      <br />
      Stay at home if you are not feeling well
      <br />
      <br />
      Wash your hand thoroughly and
      <br />
      use disinfectant provided
      <br />
      <br />
      Avoid close bodily contact
    </Paragraph>
  </main>
);

export default CovidContent;
