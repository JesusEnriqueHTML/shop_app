import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./ProductList.css";
import ProductListItem from '../ProductListItem';



const ProductList = ({mangas}) => 
mangas.map(manga =>
    <ProductListItem key={`manga-${manga.id}`} manga ={manga} />
    );

export default ProductList;