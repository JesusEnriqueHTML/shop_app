import React from 'react';
import "./ProductListItem.css";
import { Link } from 'react-router-dom';

const ProductListItem = ({ manga }) =>
<div className="container row contentsd w-50 mt-5 mx-auto mb-5">
    <div className="col">
<img className="imagenesd w-75 ml-5 mt-4 dalgo" src={manga.imagen} alt={manga.name} />
</div>
<div className="col ">
<p className="text-center border titulo font-weight-bold">{manga.name}</p>
<div className="container">
<p className="text-center">{manga.descripcion}</p>
</div>
<div className="container text-center mb-2">
<Link to={`/nuevo/${manga.id}`}><button type="button" class="btn btn-dark btn-lg btn-block"><p className="text-white mt-2">Detalles</p></button></Link>
</div>
</div>
</div>
export default ProductListItem;