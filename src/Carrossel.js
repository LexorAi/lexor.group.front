// src/Carrossel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carrossel() {
  const settings = {
    dots: true,           // bolinhas de navegação
    infinite: true,       // loop infinito
    speed: 500,           // velocidade da transição
    slidesToShow: 1,      // quantos slides por vez
    slidesToScroll: 1,    // quantos por clique
    autoplay: true,
    autoplaySpeed: 3000,  // tempo entre os slides (ms)
  };

  return (
    <div className="carrossel">
      <Slider {...settings}>
        <div><img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" /></div>
        <div><img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" /></div>
        <div><img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" /></div>
      </Slider>
    </div>
  );
}

export default Carrossel;
