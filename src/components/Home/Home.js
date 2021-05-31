import React, { useEffect, useState } from 'react';
import './Home.css';
import Iframe from 'react-iframe'




const Home = () => {
  
    return <>
    <div className=" row container-fluid mx-auto mb-2">
    <div class="descripcion w-50 col presentacion container">
        <h1>Nuestra ilusion es levantarnos cada dia para seguir nuestro camino</h1>
        <p>Somos la tienda online de la libreria absolute comics, un negocio familiar y independiente especializado en la venta de comics, manga, literatura fantastica y horrors
        Fundada el 23 de Marzo de 2021, y esperamos en poco tiempo llegar a ser una de la referencias dentro del sector de la venta de productos Frikis.
<br/>
        Absolute Comics es una libreria especializada en comics pero NO es una libreria de comics al uso, como las que normalmente esteais acostumbradas a ver, ya que su estilo, enfoque y disposicion diferente
        a lo que es habitual para los aficcionados encontar en establecimientos como este.
<br/>
        No pertenexemos a ninguna editoria o cadena de tiendas. Y tampoco los dueños son copropietarios o propietarios de editoriales, Es un punto de vente independiente que no esta influizado ni depende de ninguna
        corporacion, estrategias etc   
            
            
        </p>  

        <div class="d-flex justify-content-center row">
        <img src="/resources/welcome.gif" class="mt-2 img-thumbnail col-md-5 "></img>
<div class="mt-2 w-50 col-md-5">
<p className="">Nos podras encontrar en nuestra tienda fisica en Calle Rio Xunco nº1</p>
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/></div>
        </div>
      
        </div>   
                  
    </div>       
    
    

    </>;
};

export default Home;
