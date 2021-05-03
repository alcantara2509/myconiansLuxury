import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../Colors';
import { ServicesHomeTitle, Paragraph } from '../../Components/Atoms/Texts';
import { checkHeart, heartClick } from '../../Utils';
import imgError from '../../Utils/imgError';

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
                see Villa
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
              Villa
              {' '}
              {' '}
              {e.yachts_name}
            </ServicesHomeTitle>
          </section>
          <section className="wish-link-content">
            <Link to={`/villas/${e.yachts_name}`}>
              <Paragraph props={{ textColor: Colors.primaryColor }}>
                see Villa
              </Paragraph>
            </Link>
          </section>
        </section>
      </section>
    </>
  ))
);

export default wishCard;
