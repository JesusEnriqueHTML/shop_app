import React, { useEffect, useState } from 'react';
import './Home.css';
import Iframe from 'react-iframe'
import Productos from '../Productos';



const Home = () => {
  
    return <>
    <div className="d-flex flex-row justify-content-center mb-2">
    <div class="descripcion w-50">
        <h1>Nuestra ilusion es levantarnos cada dia para seguir nuestro camino</h1>
        <p>En nombre de Absolute comics, les damos la más sincera bienvenida a nuestra página web, 
            en la que, esperamos, encontrarán toda la información que necesiten acerca de nuestras actividades.<br/>
        El objetivo principal de esta web es dar a conocer todo el mundo del manga y del anime, y a su vez que la gente disfrute con ellos 
        dando la oportunidad de disfrutar de ellos.
        <div class="d-flex justify-content-center">
        <img src="/resources/welcome.gif" class="mt-2 img-thumbnail w-50 "></img>
        </div>
        </p>  
        </div>            
        <div className="">
        <Iframe url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=calle%20rio%20xunco%20burela+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </div> 
    </div>       
    <h1 className="text-center border display-3">Productos Destacados Del Mes</h1>

    </>;
};

export default Home;
