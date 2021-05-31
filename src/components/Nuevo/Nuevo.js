import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Nuevo.css';
import {NavLink, Link} from 'react-router-dom';


const Nuevo = ({addProduct}) => {
  
  const [manga, setManga] = useState(null);

  const { mangaId } = useParams();

  const handleClick = () => {
    addProduct(manga);
  

  }

  const user = JSON.parse(localStorage.getItem('user'));
  let admin = null;
  if (user) {

    user.roles.forEach(roles => {

      if (roles === "ROLE_ADMIN") {

        admin = roles;

      }

    });
  }



  const setImage = useCallback((manga) =>{
    switch (manga.name) {
      case "Haikyuu":
        return "/resources/haikyuu/mikasa.png";

      case "Shaman King":
        return "/resources/shaman-king/shamanking.png";

      case "JoJo Part5":
        return "/resources/Jojo-part4/moirioh4.png";

      case "Hombre y Gato":
        return "/resources/gato/michi.png";

        case "Kuroko Basquet":
          return "/resources/kuroko/baloncest.png";

          case "Un Gato":
            return "/resources/absurdo/absurdo1.png";
      default:
        return "xdddd";
    }
  });
  useEffect(() => {
    fetch(`http://localhost:8080/api/manga/manga/${mangaId}`).then((response) => response.json()).then(data => setManga(data));
}, []);

  return manga && Object.keys(manga).length !== 0 ? <>
  <div className="container-fluid  cont mb-5 mt-5 row mx-auto">
    <div className="w-50 container col">
    <img className="imagenesdd img-fluid w-75" src={manga.imagen} alt={manga.name}/>
    </div>
    <div className="container-fluid ml-5 col info">
      <div className="row imagenIf ">
    <img src= { setImage(manga) } alt={manga.name} className="imagenesdd mr-1 zoom" />
      <p className="display-4 text-center">
        {manga.name}
        </p>
        </div>
        <p className="text-center">Tomo volumen{manga.numero}</p>
        <p className="text-center">Precio = {manga.precio} euros</p>
        <p className="text-center">Stock = {manga.stock}</p>

      <br/>
      <h2>Descripcion:</h2> <br/>
        <p>{manga.descripcion}</p>
<div className="text-center row mb-3 w-75 mx-auto">
      <img src="/resources/promocion.png" className="col w-25"></img>
</div>
{manga.stock <= "0" &&  (
<p className="text-center">No hay stock</p>
)}
{user && admin && (
  <Link to={`/EditarProductos/${manga.id}`}><button type="button" class="btn btn-dark btn-lg btn-block"><p className="text-white mt-2">Editar</p></button></Link>
                   )}
        <button type="button" class="btn btn-dark btn-lg btn-block" onClick={handleClick}> Agregar a carrito</button>


    </div>
    <div class="mt-5 row justify-content-md-center container mx-auto">
      <div className="container col">
        <p className="small">{manga.resumen}</p>
        </div>
      <div className="container col">
      <table class="table table-dark">
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Autor</td>
      <td>{manga.author}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>ISBM</td>
      <td>{manga.isbm}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Idiomas</td>
      <td>{manga.idioma}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Nº de Paginas</td>
      <td>{manga.paginas}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Coleccion</td>
      <td>{manga.coleccion}</td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  </div>
  </> 
  : <p>There is no post with id: {mangaId}.</p>;
};

export default Nuevo;