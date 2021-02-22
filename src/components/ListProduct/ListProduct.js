import React from 'react';
import { Link } from 'react-router-dom';
import "./ListProduct.css";
import ProductListItem from '../ProductListItem';

const ListProduct = ({mangas}) => mangas.map(manga =>
    <ProductListItem key={`manga-${manga.id}`} manga ={manga} />
    );

export default ListProduct;