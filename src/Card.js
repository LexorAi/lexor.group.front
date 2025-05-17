import React from 'react';
import './Card.css';  // Arquivo de CSS para estilização

const Card = ({ title, imageUrl, description, buttonText }) => {
  return (
    <div className="card">
      {/* <img src={imageUrl} alt="Card image" className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">Software as a Service</p>
        {/* <button className="card-button">{buttonText}</button> */}
      </div>
    </div>
  );
}; 

export default Card;
