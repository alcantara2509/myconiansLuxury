/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Popup from 'reactjs-popup';
// import Colors from '../../../Colors';
// import { checkHeart, heartClick } from '../../../Utils';
import { EnquireButton } from '../../Atoms';
// import { Paragraph, ServicesHomeTitle } from '../../Atoms/Texts';
import './style.css';

const Form = () =>
  // const [reload, setReload] = useState('');
  // const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  (
    <Popup
      trigger={EnquireButton}
      modal
      nested
    >
      {(close) => (
        <section className="form-wrapper">
          <section className="modal">
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
            <form action="">
              <label htmlFor="name">Name:*</label>
              <input required type="text" id="name" name="name" />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" />
              <label htmlFor="email">Email:*</label>
              <input required type="email" id="email" name="email" />
              <section className="checkIO">
                <section className="checks">
                  <label htmlFor="check-in">Check-in:*</label>
                  <input required className="input-mid" type="date" id="check-in" name="check-in" />
                </section>
                <section className="checks">
                  <label htmlFor="check-out">Check-out:*</label>
                  <input required className="input-mid" type="date" id="check-out" name="check-out" />
                </section>
              </section>
              <section className="checkIO">
                <section className="checks">
                  <label required htmlFor="guests">Guests:*</label>
                  <input className="input-mid" type="number" id="guests" name="guests" />
                </section>
                <section className="checks">
                  <label htmlFor="price">Check-out:*</label>
                  <select className="input-mid" name="price" id="price">
                    <option value="select">- select -</option>
                    <option value="1000">0 - 1000 €</option>
                    <option value="3000">1000 - 3000 €</option>
                    <option value="5000">3000 - 5000 €</option>
                    <option value="10000">5000 - 10000 €</option>
                    <option value="20000">10000 - 20000 €</option>
                  </select>
                </section>
              </section>
              <label htmlFor="notes">Notes, Concierge Services:</label>
              <textarea name="notes" id="notes" cols="30" rows="4" style={{ outline: 0 }} />
            </form>
            {/* {
              favoriteVillas
                ? (
                  <section className="favs-container">
                    <Paragraph props={{ textColor: Colors.primaryColor }}>
                      My Wishlist:
                    </Paragraph>
                    {
                favoriteVillas.map((e) => (
                  <section className="favVilla">
                    <section className="sec-villa-name">
                      <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
                        Villa
                        {' '}
                        {' '}
                        {e}
                      </ServicesHomeTitle>
                    </section>
                    <section className="sec-fav-btn">
                      <button
                        className="fav-button"
                        type="button"
                        onClick={() => heartClick(e.villas_name, reload, setReload)}
                      >
                        {checkHeart(e.villas_name)}
                      </button>
                    </section>
                  </section>
                ))
              }
                  </section>
                )
                : null
              } */}
            <section className="sec-send-btn">
              <button type="button" className="send-btn">send</button>
            </section>
          </section>
        </section>
      )}
    </Popup>

  );
export default Form;