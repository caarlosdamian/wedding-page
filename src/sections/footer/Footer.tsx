import React from "react";
import { Card } from "../../components/card/Card";
import { CardInt } from "../../interfaces";
import { cardItems } from "../../utils/data";
import "./Footer.scss";

export const Footer = () => {
  return (
    <section className="footer-container">
      <span className="footer-header">Recomendaciones</span>
      <span className="footer-subtext">
        Es posible hospedarse en lugar de la fiesta
      </span>
      <div className="footer-grid-container">
        {cardItems.map((item: CardInt, i) => (
          <Card key={i} card={item} />
        ))}
      </div>
    </section>
  );
};
