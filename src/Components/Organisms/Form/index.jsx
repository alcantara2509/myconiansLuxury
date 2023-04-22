/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Popup from "reactjs-popup";
import { EnquireButton } from "../../Atoms";
import languages from "../../../Utils/languages";
import { english, portuguese, spanish } from "./languages";
import "./style.css";
import postForm from "../../../Services/postForm";

const Form = () => {
  const wishlist = JSON.parse(localStorage.getItem("favoriteVillas"));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");

  const data = {
    name,
    phone,
    email,
    checkIn,
    checkOut,
    guests,
    price,
    text,
    wishlist,
  };

  return (
    <Popup trigger={EnquireButton} modal nested>
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
              <input
                required
                type="text"
                id="name"
                name="name"
                onChange={({ target }) => setName(target.value)}
              />
              <label htmlFor="phone">
                {languages(english, portuguese, spanish).phone}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={({ target }) => setPhone(target.value)}
              />
              <label htmlFor="email">
                {languages(english, portuguese, spanish).email}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <section className="checkIO">
                <section className="checks">
                  <label htmlFor="check-in">
                    {languages(english, portuguese, spanish).checkIn}
                  </label>
                  <input
                    required
                    className="input-mid"
                    type="date"
                    id="check-in"
                    name="check-in"
                    onChange={({ target }) => setCheckIn(target.value)}
                  />
                </section>
                <section className="checks">
                  <label htmlFor="check-out">
                    {languages(english, portuguese, spanish).checkOut}
                  </label>
                  <input
                    required
                    className="input-mid"
                    type="date"
                    id="check-out"
                    name="check-out"
                    onChange={({ target }) => setCheckOut(target.value)}
                  />
                </section>
              </section>
              <section className="checkIO">
                <section className="checks">
                  <label required htmlFor="guests">
                    {languages(english, portuguese, spanish).guests}
                  </label>
                  <input
                    className="input-mid"
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    onChange={({ target }) => setGuests(target.value)}
                  />
                </section>
                <section className="checks">
                  <label htmlFor="price">
                    {languages(english, portuguese, spanish).daily}
                  </label>
                  <select
                    className="input-mid"
                    name="price"
                    id="price"
                    onChange={({ target }) => setPrice(target.value)}
                  >
                    <option value="select">- select -</option>
                    <option value="1000">0 - 1000 €</option>
                    <option value="3000">1000 - 3000 €</option>
                    <option value="5000">3000 - 5000 €</option>
                    <option value="10000">5000 - 10000 €</option>
                    <option value="20000">10000 - 20000 €</option>
                  </select>
                </section>
              </section>
              <label htmlFor="notes">
                {languages(english, portuguese, spanish).notes}
              </label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="4"
                style={{ outline: 0 }}
                onChange={({ target }) => setText(target.value)}
              />
              <section className="sec-send-btn">
                <button
                  type="submit"
                  className="send-btn"
                  onClick={() => {
                    if (
                      name &&
                      phone &&
                      email &&
                      checkIn &&
                      checkOut &&
                      guests
                    ) {
                      postForm(data);
                      // eslint-disable-next-line no-alert
                      alert("Success!");
                    }
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
