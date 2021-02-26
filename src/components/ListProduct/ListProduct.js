import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./ListProduct.css";
import ProductListItem from '../ProductListItem/ProductListItem';



const ListProduct = ({ mangas, paginas}) => {

    return(
        <>
        {mangas.map((manga) => <ProductListItem key={`manga-${manga.id}`} manga={manga}/>)}

        <div className="container-fluid row">
            <div className="col"><Link to={`/products/${paginas.pageNumber-1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light">Pagina anterior</button></Link></div>
            <div className="col"><Link to={`/products/${paginas.pageNumber+1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light"> Pagina Siguiente</button></Link></div>

        </div>
        </>
    );



}
export default ListProduct;



/*
const ListProduct = ({mangas}) => 
mangas.map(manga =>
    <ProductListItem key={`manga-${manga.id}`} manga ={manga} />
    );
*/
