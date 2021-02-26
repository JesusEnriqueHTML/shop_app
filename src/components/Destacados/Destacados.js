import React, { useEffect, useState } from 'react';
import "./Destacados.css";
import ProductList from "../ProductList";

const Destacados = () => {
    const[mangas, setMangas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/manga`).then(response => response.json())
        .then(data => setMangas(data));
    }, []);
    
    return <>
    <ProductList mangas = {mangas.slice(0, 2)}/>
    </>;
};

export default Destacados;