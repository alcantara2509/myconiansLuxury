/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Popup from 'reactjs-popup';
import { EnquireButton } from '../../Atoms';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Form = () => {
  const wishlist = JSON.parse(localStorage.getItem('favoriteVillas'));
  console.log(wishlist);
  return (
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
              <label htmlFor="name">
                {languages(english, portuguese, spanish).name}
              </label>
              <input required type="text" id="name" name="name" />
              <label htmlFor="phone">{languages(english, portuguese, spanish).phone}</label>
              <input type="text" id="phone" name="phone" />
              <label htmlFor="email">{languages(english, portuguese, spanish).email}</label>
              <input required type="email" id="email" name="email" />
              <section className="checkIO">
                <section className="checks">
                  <label htmlFor="check-in">{languages(english, portuguese, spanish).checkIn}</label>
                  <input
                    required
                    className="input-mid"
                    type="date"
                    id="check-in"
                    name="check-in"
                  />
                </section>
                <section className="checks">
                  <label htmlFor="check-out">{languages(english, portuguese, spanish).checkOut}</label>
                  <input
                    required
                    className="input-mid"
                    type="date"
                    id="check-out"
                    name="check-out"
                  />
                </section>
              </section>
              <section className="checkIO">
                <section className="checks">
                  <label required htmlFor="guests">
                    {languages(english, portuguese, spanish).guests}
                  </label>
                  <input className="input-mid" type="number" id="guests" name="guests" min="1" />
                </section>
                <section className="checks">
                  <label htmlFor="price">{languages(english, portuguese, spanish).daily}</label>
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
              <label htmlFor="notes">{languages(english, portuguese, spanish).notes}</label>
              <textarea name="notes" id="notes" cols="30" rows="4" style={{ outline: 0 }} />
              <section className="sec-send-btn">
                <button
                  type="submit"
                  className="send-btn"
                  onClick={() => {
                    console.log('ok');
                  }}
                >
                  {languages(english, portuguese, spanish).button}
                </button>
              </section>
            </form>
          </section>
        </section>
      )}
    </Popup>

  );
};
export default Form;
