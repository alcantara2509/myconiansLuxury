import React from 'react';

const Cards = (cardProps) => {
  const {
    image, name, bath, rooms, guests,
  } = cardProps;

  return (
    <section key={name} className="card-container">
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <section className="icons-container">
        <section className="bath">
          <p>{bath}</p>
        </section>

        <section className="rooms">
          <p>{rooms}</p>
        </section>

        <section className="guests">
          <p>{guests}</p>
        </section>
      </section>
    </section>
  );
};

export default Cards;
