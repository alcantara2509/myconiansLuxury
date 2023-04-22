import React from "react";
import {
  MenuDesktop,
  MenuMobile,
  PagesBanner,
} from "../../Components/Molecules";
import {
  DarkSectionEnjoy,
  Footer,
  IntroDestinations,
} from "../../Components/Organisms";
import { bannerDestinations } from "../../assets";
import languages from "../../Utils/languages";
import { english, portuguese, spanish } from "./languages";

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerDestinations}
      subTitle={languages(english, portuguese, spanish).subTitle}
    />
    <IntroDestinations />
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Events;
