import React from 'react';
import "./ProductListItem.css";
import { Link } from 'react-router-dom';
import logo1 from '../Navbar2/gatoHugo.png';
import logo2 from '../Header/cath1.png';
import muyBien from './MuyBien.png';
import Bien from './Bien.png';
import Mala from './Mal.png';


const ProductListItem = ({ manga }) =>
<div className="container row contentsd w-50 mt-5 mx-auto mb-5">
    <div className="col">
<img className="imagenesd w-75 ml-5 mt-4 dalgo" src={manga.imagen} alt={manga.name} />
</div>
<div className="col ">
<p className="text-center border titulo font-weight-bold">{manga.name}</p>
<div className="container">
<p className="text-center">{manga.descripcion}</p>
{manga.user_id == "1" &&  (
                 <div className="text-center">
                 <img src={logo2} className="w-25 mx-auto" alt="Imagen creada por Hugo, 2ºDIW"/>
                 </div>
                 )}
{!manga.user_id == "1" &&  (
    <div className="text-center">
        <img src={logo1} className="w-25 mx-auto" alt="Imagen creada por Hugo, 2ºDIW"/>
        </div>
        )}
        {manga.calidad == "1" &&  (
    <div className="text-center">
                <img src={muyBien} className="w-25 mx-auto" alt="Imagen creada por Hugo, 2ºDIW"/>

        </div>
        )}
          {manga.calidad == "2" &&  (
    <div className="text-center">
                <img src={Bien} className="w-25 mx-auto" alt="Imagen creada por Hugo, 2ºDIW"/>

        </div>
        )}
          {manga.calidad == "3" &&  (
    <div className="text-center">
                <img src={Mala} className="w-25 mx-auto" alt="Imagen creada por Hugo, 2ºDIW"/>

        </div>
        )}
</div>
<div className="container text-center mb-2">
<Link to={`/nuevo/${manga.id}`}><button type="button" class="btn btn-dark btn-lg btn-block"><p className="text-white mt-2">Detalles</p></button></Link>

</div>
</div>
</div>
export default ProductListItem;