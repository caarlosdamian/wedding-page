import React from "react";
import { useCountDown } from "../../hooks/useCountDown";
import "./Middle.scss";

export const Middle = () => {
  const { secondsState, daysState, hoursState, minutesState } = useCountDown();
  return (
    <section className="middle-container" id="middle">
      <div className="middle-top-container">
        <img src='https://i.ibb.co/ZYMCBGP/1-D75-B396-1178-460-A-AFBD-94-EA2120-C206.jpg' alt="mariana" className="middle-top-profile-img" />
        <div className="middle-top-middle-container">
          <h1 className="middle-top-middle-header">Save The Date</h1>
          <h1 className="middle-top-middle-description">
          Nos conocimos en una era difícil. pero eso no impidió que el amor
            fuera creciendo,los dos teníamos sentimientos encontrados el uno por
            el otro y así sin más hemos llegado hasta aquí. 💙
          </h1>
        </div>
        <img src='https://i.ibb.co/KKkMzwh/680-D6456-5746-43-F7-ACFF-85-ADA027-B949.jpg' alt="carlos" className="middle-top-profile-img" />
      </div>
      <div className="middle-middle-container">
        <h1 className="middle-middle-header">Fiesta</h1>
        <span className="middle-middle-location">Reserva La Cofradía</span>
        <span className="middle-middle-address">
          Carretera Comala San Antonio - Colima México s/n Kilometro 11.5
          Cofradía de Suchitlán,
        </span>
        <div className="middle-middle-bottom-container">
          <span className="middle-middle-bottom-text">5:00 pm</span>
          <a
            href="https://www.google.com/maps/place/Reserva+La+Cofrad%C3%ADa/@19.4158337,-103.6972265,17z/data=!3m1!4b1!4m8!3m7!1s0x84255aaff2138e89:0x89ff01ee93bf727a!5m2!4m1!1i2!8m2!3d19.4158287!4d-103.6950378"
            target="_blank"
            className="middle-link"
          >
            <span className="middle-middle-bottom-link">Llevame</span>
          </a>
        </div>
        <div className="middle-count-container">
            <span className="middle-count-header">Faltan</span>
          <div className="count-label-container">
            <span className="middle-count-text">{daysState}</span>
            <span className="middle-count-subtext">Días</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{hoursState}</span>
            <span className="middle-count-subtext">Horas</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{minutesState}</span>
            <span className="middle-count-subtext">Minutos</span>
          </div>
          <div className="count-label-container">
            <span className="middle-count-text">{secondsState}</span>
            <span className="middle-count-subtext">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
