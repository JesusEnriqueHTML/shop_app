import React from 'react';
import "./ProductListItem.css";
import { Link } from 'react-router-dom';

const ProductListItem = ({ manga }) =>
<div className="container row contentsd mb-2 w-50 mx-auto">
    <div className="col">
<img className="imagenesd w-50 ml-5 mt-4" src={manga.imagen} alt={manga.name} />
</div>
<div className="col border">
<p className="text-center border">{manga.name}</p>
<div className="container">
<p className="text-center">{manga.descripcion}</p>
</div>
<div className="container text-center mb-2">
<button type="button" class="btn btn-dark btn-lg btn-block btn-outline-light"><Link to={`/nuevo/${manga.id}`}><p className="text-white mt-2">Detalles</p></Link></button>
</div>
</div>
</div>
export default ProductListItem;