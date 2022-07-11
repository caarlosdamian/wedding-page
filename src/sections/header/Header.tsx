import React from "react";
import weeding from "../../assets/roma.jpg";
import weeding3 from "../../assets/paris3.jpg";
import weeding4 from "../../assets/paris2.jpg";
import weeding2 from "../../assets/header.svg";
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
      <img src={weeding3} alt="weeding" className="header-img" />
    </section>
  );
};
