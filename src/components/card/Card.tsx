import React from "react";
import "./Card.scss";
import { CardInt } from "../../interfaces";

interface CardProps {
  card: CardInt;
}

export const Card = ({ card }: CardProps) => {
  const { img, title, buttonLabel, button, url } = card;
  return (
    <div className="card-container">
      <img src={img} alt="img" className="img-card" />
      <h1 className="card-header">{title}</h1>
      <a href={url} target="_blank" className="button-link">
        {(button && <button className="button-card">{buttonLabel}</button>) || (
          <span className="card-text">{buttonLabel}</span>
        )}
      </a>
    </div>
  );
};
