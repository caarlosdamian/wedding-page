import React from "react";

import arrow from "../../assets/icon-arrow-light.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <section className="header-container">
      <div className="header-label-container">
        <h1 className="header-title">Mariana & Carlos</h1>
        <h3 className="header-subtitle">
          Diciembre 03,2022 - Reserva la Cofradia.
        </h3>
        <a href="#middle">
          <img src={arrow} alt="arrow" className="header-mobile-arrow" />
        </a>
      </div>
      <img src='https://i.ibb.co/NTnTtcr/paris3.jpg' alt="weeding" className="header-img" />
    </section>
  );
};
