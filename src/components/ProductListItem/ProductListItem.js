import React from 'react';
import "./ProductListItem.css";

const ProductListItem = ({ manga }) =>
<div className="container row contentsd mb-2 w-50 mx-auto">
    <div className="col">
<img className="imagenesd w-50 ml-5" src={manga.imagen} alt={manga.name} />
</div>
<div className="col border">
<p className="text-center border">{manga.name}</p>
<div className="container">
<p className="text-center">{manga.descripcion}</p>
</div>
</div>
</div>
export default ProductListItem;