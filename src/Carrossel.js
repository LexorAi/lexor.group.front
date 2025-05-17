// src/Carrossel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './imagens/stock-vs.png';
import img2 from './imagens/stock-vs-white.png';

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
                {/* produto 1 */}
                <div className="slide-container">
                    <div className="image-wrapper">
                        <img src={img1} alt="Stock-vs" className="slide-image" />
                        <div className="overlay">
                            <h3>Stock-vs</h3>
                            <p>Descrição rápida sobre o produto aqui.</p>
                        </div>
                    </div>
                    <br></br><br></br>
                    <button className="button">Saiba mais</button>
                </div>
                {/* produto 2 */}
                <div className="slide-container">
                    <div className="image-wrapper">
                        <img src={img2} alt="Stock-vs" className="slide-image" />
                        <div className="overlay">
                            <h3>Stock-vs</h3>
                            <p>Descrição rápida sobre o produto aqui.</p>
                        </div>
                    </div>
                    <br></br><br></br>
                    <button className="button">Saiba mais</button>
                </div>
                {/* produto 3 */}
                <div className="slide-container">
                    <div className="image-wrapper">
                        <img src={img1} alt="Stock-vs" className="slide-image" />
                        <div className="overlay">
                            <h3>Stock-vs</h3>
                            <p>Descrição rápida sobre o produto aqui.</p>
                        </div>
                    </div>
                    <br></br><br></br>
                    <button className="button">Saiba mais</button>
                </div>
            </Slider>
        </div>
    );
}

export default Carrossel;
