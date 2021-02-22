import React from 'react';
import "./ProductListItem.css";

const ProductListItem = ({ manga }) =>
<div className="container d-flex flex-row justify-content-center contentsd mb-2 w-50">
<img className="imagenesd" src={manga.imagen} alt={manga.name} />
<div className="container border">
<p className="text-center mr-5 border">{manga.name}</p>
<div className="container">
<p className="text-center">{manga.descripcion}</p>
</div>
</div>
</div>
export default ProductListItem;