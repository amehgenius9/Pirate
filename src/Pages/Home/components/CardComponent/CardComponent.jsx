import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import './CardComponent.Style.css';


const CardComponent = ({ imageUrl, title, description, link, onClick, className }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className={`card-image ${className}`} />
      <div className="card-content">
        <h2 className="header">{title}</h2>
        <p className="card-paragraph">{description}</p>
        <p className="card-button" onClick={onClick}>
          {link} <BsArrowRight />
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
