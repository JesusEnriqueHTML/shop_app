import React, { useEffect, useState } from 'react';
import './NuestrasRecomendaciones.css';
import logo1M from './ImagenesCarousel/manga/1.png';
import logo1C from './ImagenesCarousel/comic/1.jpg';

const Home = () => {

    return <>
    <div className="row container mb-3 mt-3 mx-auto">
<div className="col-md-6 border">
<div className="row">
<div id="carouselExampleControlsM" class="carousel slide col-md-4" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src={logo1M} alt="First slide" />
    </div>
    <div class="carousel-item">
    <img class="d-block " src={logo1M} alt="First slide" />
    </div>
    <div class="carousel-item">
    <img class="d-block " src={logo1M} alt="First slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControlsM" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControlsM" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
  </div>
  <div className="col-md-8">
      <h5>Manga</h5>
      <p>
          Los cómics tradicionales japoneses se denominan manga, una palabra nipona que significa literalmente dibujos irresponsables. Su paternidad se atribuye al artista del siglo XVIII Hokusai, aunque los manga no se hicieron populares hasta después de la Segunda Guerra Mundial.
          Hoy estos cómics y su versión animada -el anime- hacen furor no sólo en Japón, sino en el mundo entero. Akira, Pai, Ranma, Momiji Kushinda, Kyuuketsuki Miyn y Goku son los héroes nipones que compiten con Tintín, Batman, Supermán o Tarzán.
          </p>
        <div className="border text-center w-100 recomendacion">
        <p>Nuestros favoritos sin duda y os recomendamos que veais nuestros productos</p>
        </div>
      </div>
</div>
</div>

<div className="col-md-6 border">
    <div className="row">
    <div className="col-md-8">
      <h5>Comics</h5>
      <p>
          En todo caso, se trata de una forma de expresión artística, a la vez que un medio de comunicación, que consiste en una serie de ilustraciones que, leídas en secuencia continua, permite al lector recomponer un relato de algún tipo.
          De igual forma, puede dibujarse en papel de distinto tipo, o incluso en formato digital (Webcomics). A menudo es fruto de colaboraciones entre artistas de distinta índole: dibujantes, guionistas, coloristas y diseñadores.
          Un cómic es una serie o desarrollo de viñetas con desarrollo narrativo. También se puede definir como relato gráfico breve y entretenido que consta principalmente de dibujos encuadrados en viñetas
</p>      
<div className="border text-center w-100 recomendacion">
        <p>Nuestra infancia, lo mejor para un dia triste. No os arrepentireis</p>
        </div>
      </div>
<div id="carouselExampleControlsC" class="carousel slide col-md-4" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " src={logo1C} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block " src={logo1C} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block " src={logo1C} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControlsC" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControlsC" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

</div>
</div>
    </div>

    </>;
};

export default Home;
