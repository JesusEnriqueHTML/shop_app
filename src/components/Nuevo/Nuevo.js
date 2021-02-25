import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Nuevo.css';

const Nuevo = () => {
  const [manga, setManga] = useState(null);
  const [saga, setSaga] = useState(null);

  const { mangaId } = useParams();

  const setImage = useCallback((manga) =>{
    switch (manga.name) {
      case "Haikyuu":
        return "/resources/haikyuu/mikasa.png";

      case "Shaman King":
        return "/resources/shaman-king/shamanking.png";

      case "JoJo Part5":
        return "/resources/Jojo-part4/moirioh4.png";

      default:
        return "xdddd";
    }
  });
  useEffect(() => {
    fetch(`http://localhost:8080/manga/${mangaId}`).then((response) => response.json()).then(data => setManga(data));
}, []);

  return manga && Object.keys(manga).length !== 0 ? <>
  <div className="container-fluid  cont mb-5 mt-5 row mx-auto">
    <div className="w-50 container col">
    <img className="imagenesdd img-fluid w-75" src={manga.imagen} alt={manga.name}/>
    </div>
    <div className="container-fluid ml-5 col info">
      <div className="row imagenIf ">
    <img src= { setImage(manga) } alt={manga.name} className="imagenesdd mr-1" />
      <p className="display-4 text-center d-flex justify-content-between">
        {manga.name}
        </p>
        </div>
        <p className="text-center">Tomo volumen{manga.numero}</p>
        <p className="small">{manga.resumen}</p>
      <br/>
      <h2>Descripcion:</h2> <br/>
        <p>{manga.descripcion}</p>
        <button type="button" className="btn btn-primary btn-lg btn-block mt-3">Añadir al Carrito</button>
    </div>
  </div>
  </> 
  : <p>There is no post with id: {mangaId}.</p>;
};

export default Nuevo;