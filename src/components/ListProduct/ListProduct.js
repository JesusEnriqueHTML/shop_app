import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./ListProduct.css";
import ProductListItem from '../ProductListItem/ProductListItem';



const ListProduct = ({mangas}) => {
    if(mangas.content?.length > 0) {
    return(
        <>
          {mangas.content?.map((manga)  => <ProductListItem key={`manga-${manga.id}`} manga={manga}/>)}

          <div className="container-fluid row mx-auto mb-2">
            <div className="col"><Link to={`/products/${mangas.number-1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light" disabled={mangas.first}>Anterior</button></Link></div>
            <div className="col"><Link to={`/products/${mangas.number+1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light" disabled = {mangas.last}>Siguiente</button></Link></div>

        </div>
        </>
    );
    }else{
        return <>
        <div className="col text-center mt-3 mb-3">
        <p className="display-3">No se encuentra resultados para esta busqueda</p>
        <img src="/resources/algo.gif" className="w-25"/>   
        </div>     
</>
    }



}
export default ListProduct;



/*
const ListProduct = ({mangas}) => 
mangas.map(manga =>
    <ProductListItem key={`manga-${manga.id}`} manga ={manga} />
    );
*/
