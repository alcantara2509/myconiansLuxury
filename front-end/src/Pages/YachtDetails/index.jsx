/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { ExtraServices, MenuDesktop, MenuMobile } from '../../Components/Molecules';
import {
  Footer, YachtDetailsInfo, FeaturesYacht, DarkSectionYacht,
} from '../../Components/Organisms';
import {
  checkHeart, heartClick, imgError, setLocalStorage,
} from '../../Utils';
import { fetchYachtImages } from '../../Services/fetchYachts';
import 'react-alice-carousel/lib/alice-carousel.css';
import { iconArrowLeft, iconArrowRight } from '../../assets';
import './style.css';
import { Paragraph } from '../../Components/Atoms/Texts';
import Colors from '../../Colors';

const VillaDetails = () => {
  const {
    isFetching, setIsFetching, allYachts,
  } = useContext(MLContext);

  const [reload, setReload] = useState('');
  const [cover, setCover] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const yachtName = useLocation().pathname.slice(8);

  useEffect(() => {
    setLocalStorage();
  }, [reload]);

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      const apiResponseImg = await fetchYachtImages(yachtName);
      setAllImages(apiResponseImg);
      setIsFetching(false);
    })();
  }, [yachtName]);

  useEffect(() => {
    const getCover = () => {
      const cvr = allImages.find((e) => e.url.includes('Cover'));
      if (cvr) {
        setCover(cvr);
      }
    };

    getCover();
  }, [allImages]);

  const items = () => allImages.map((image, id) => (
    <img
      key={id}
      className="image-size-details"
      src={image.url}
      onError={imgError}
      alt={image.id}
    />
  ));

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    if (activeIndex <= 0) setActiveIndex(allImages.length - 1);
  };

  const slideNext = () => {
    if (activeIndex <= allImages.length - 1) setActiveIndex(activeIndex + 1);
    if (activeIndex >= allImages.length - 1) setActiveIndex(0);
  };

  const onSlideChange = (e) => {
    setActiveIndex(e.item);
  };

  const Carousel = () => [
    <AliceCarousel
      items={items()}
      disableDotsControls
      disableButtonsControls
      infinite
      activeIndex={activeIndex}
      onSlideChanged={onSlideChange}
      autoHeight
    />,
    <section className="carousel-control-btns">
      <div className="btn-prev-c" onClick={slidePrev}>
        <img src={iconArrowLeft} alt="icon" />
      </div>
      <div className="slide-counter">
        <Paragraph props={{ textColor: Colors.primaryColor }}>
          {`${activeIndex + 1} / ${allImages.length}`}
        </Paragraph>
      </div>
      <div className="btn-next-c" onClick={slideNext}>
        <img src={iconArrowRight} alt="icon" />
      </div>
    </section>,
  ];

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villa-details-container">
          <MenuMobile />
          <MenuDesktop />
          <section className="villa-details-cover-container">
            {
              cover
                ? <img src={cover.url} alt="villa cover" className="cover-size" onError={imgError} />
                : <img src="" alt="villa cover" className="cover-size" onError={imgError} />
            }
          </section>
          <section className="fav-button-villa-details">
            <button
              className="fav-button"
              type="button"
              onClick={() => heartClick(yachtName, reload, setReload)}
            >
              {checkHeart(yachtName)}
            </button>
          </section>
          <YachtDetailsInfo />
          {Carousel()}
          <FeaturesYacht title="yacht features" allYachts={allYachts} yachtName={yachtName} />
          <DarkSectionYacht />
          <ExtraServices />
          <Footer />
        </main>
      )
  );
};

export default VillaDetails;
