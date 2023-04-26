/* eslint-disable import/no-cycle */
import React from "react";
import { MainTitle, ItalicHighlight, Paragraph } from "../../Atoms/Texts";
import Colors from "../../../Colors";
import { DestinationsTypes } from "../../Molecules";
import {
  destinationsCannes,
  destinationsCapri,
  destinationsCorfu,
  destinationsCrete,
  destinationsDubai,
  destinationsIbiza,
  destinationsKefalonia,
  destinationsLefkada,
  destinationsMiami,
  destinationsMykonos,
  destinationsNaxos,
  destinationsParos,
  destinationsRhodes,
  destinationsSaintTropez,
  destinationsSantorini,
  destinationsTulum,
} from "../../../assets";
import languages from "../../../Utils/languages";
import { english, portuguese, spanish } from "./languages";
import "./style.css";

const IntroDestinations = () => (
  <section className="intro-services-container">
    <section className="border-bottom-container">
      <section className="intro-services-content-resp">
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).title}
        </MainTitle>
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).paragraph}
        </Paragraph>
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).paragraph2}
        </Paragraph>
        <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
          {languages(english, portuguese, spanish).subTitle}
        </ItalicHighlight>
      </section>
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsMykonos}
        title={languages(english, portuguese, spanish).mykonos}
        paragraph={languages(english, portuguese, spanish).mykonosP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsSantorini}
        title={languages(english, portuguese, spanish).santorini}
        paragraph={languages(english, portuguese, spanish).santoriniP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsNaxos}
        title={languages(english, portuguese, spanish).naxos}
        paragraph={languages(english, portuguese, spanish).naxosP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsParos}
        title={languages(english, portuguese, spanish).paros}
        paragraph={languages(english, portuguese, spanish).parosP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsKefalonia}
        title={languages(english, portuguese, spanish).kefalonia}
        paragraph={languages(english, portuguese, spanish).kefaloniaP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsCorfu}
        title={languages(english, portuguese, spanish).corfu}
        paragraph={languages(english, portuguese, spanish).corfuP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsRhodes}
        title={languages(english, portuguese, spanish).rhodes}
        paragraph={languages(english, portuguese, spanish).rhodesP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsCrete}
        title={languages(english, portuguese, spanish).crete}
        paragraph={languages(english, portuguese, spanish).creteP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsLefkada}
        title={languages(english, portuguese, spanish).lefkada}
        paragraph={languages(english, portuguese, spanish).lefkadaP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsIbiza}
        title={languages(english, portuguese, spanish).ibiza}
        paragraph={languages(english, portuguese, spanish).ibizaP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsDubai}
        title={languages(english, portuguese, spanish).dubai}
        paragraph={languages(english, portuguese, spanish).dubaiP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsSaintTropez}
        title={languages(english, portuguese, spanish).saintTropez}
        paragraph={languages(english, portuguese, spanish).saintTropezP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsCapri}
        title={languages(english, portuguese, spanish).capri}
        paragraph={languages(english, portuguese, spanish).capriP}
        side="left"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsCannes}
        title={languages(english, portuguese, spanish).cannes}
        paragraph={languages(english, portuguese, spanish).cannesP}
        link="parties"
        reverse="reverse"
      />
    </section>
    <section className="border-bottom-container">
      <DestinationsTypes
        image={destinationsMiami}
        title={languages(english, portuguese, spanish).miami}
        paragraph={languages(english, portuguese, spanish).miamiP}
        side="left"
      />
    </section>
    <DestinationsTypes
      image={destinationsTulum}
      title={languages(english, portuguese, spanish).tulum}
      paragraph={languages(english, portuguese, spanish).tulumP}
      link="parties"
      reverse="reverse"
    />
  </section>
);

export default IntroDestinations;
