import React from 'react';
import { Link } from 'react-router-dom';
import { iconArrowRight } from '../../assets';
import Colors from '../../Colors';
import { ServicesHomeTitle, Paragraph } from '../../Components/Atoms/Texts';
import { checkHeart, heartClick } from '../../Utils';
import imgError from '../../Utils/imgError';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const wishCard = (listYachts, reload, setReload) => (
  listYachts.map((e) => (
    <>
      <section className="wish-villa-container mobile">
        <img src={e.cover} alt={e.yachts_name} onError={imgError} className="wish-img" />
        <section className="wish-villa-info">
          <section className="wish-heart-content">
            <button
              className="fav-button"
              type="button"
              onClick={() => heartClick(e.yachts_name, reload, setReload)}
            >
              {checkHeart(e.yachts_name)}
            </button>
          </section>
          <section className="wish-title-content">
            <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
              {e.yachts_name}
              &apos;
            </ServicesHomeTitle>
          </section>
          <section className="wish-link-content">
            <Link to={`/villas/${e.yachts_name}`}>
              <Paragraph props={{ textColor: Colors.primaryColor }}>
                {languages(english, portuguese, spanish).seeYacht}
                <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
              </Paragraph>
            </Link>
          </section>
        </section>
      </section>

      <section className="wish-villa-container desktop">
        <section className="wish-villa-info">
          <section className="wish-heart-content">
            <button
              className="fav-button"
              type="button"
              onClick={() => heartClick(e.yachts_name, reload, setReload)}
            >
              {checkHeart(e.yachts_name)}
            </button>
          </section>
          <img src={e.cover} alt={e.yachts_name} onError={imgError} className="wish-img" />
          <section className="wish-title-content">
            <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
              {e.yachts_name}
            </ServicesHomeTitle>
          </section>
          <section className="wish-link-content">
            <Link to={`/yachts/${e.yachts_name}`}>
              <Paragraph props={{ textColor: Colors.primaryColor }}>
                {languages(english, portuguese, spanish).seeYacht}
                <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
              </Paragraph>
            </Link>
          </section>
        </section>
      </section>
    </>
  ))
);

export default wishCard;
