import React from 'react';
import './OurServicesCardComponent.style.css';
import { BsArrowRight } from "react-icons/bs";


const OurServicesCardComponent = ({ imageUrl, title, description, link, onClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-header">{title}</h2>
        <p className="card-paragraph">{description}</p>
        <p className="card-button" onClick={onClick}>
          {link} <BsArrowRight />
        </p>
      </div>
    </div>
  );
};

export default OurServicesCardComponent;
