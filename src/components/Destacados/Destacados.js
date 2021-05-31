import React, { useEffect, useState } from 'react';
import "./Destacados.css";
import ProductList from "../ProductList";

const Destacados = () => {
    const[mangas, setMangas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/manga/manga`).then(response => response.json())
        .then(data => setMangas(data));
    }, []);
    
    return <>
    <div className="container-fluid w-75 recomendados">
    <h1 className="text-center display-3">Productos Destacados Del Mes</h1>
    <p className="text-center">
    Aqui os dejamos algunas de nuestras recomendaciones, para que la gente que quiera comenzar en este magico mundo, 
    antes de empezar a leer manga tendremos que tener en cuenta lo siguiente El manga se lee de derecha a izquierda simplemente 
    porque el japonés, cuando se escribe en vertical, se lee de derecha a izquierda. 
    <br/>
    A día de hoy solo se invierte tiempo en la adaptación a lectura occidental en unas pocas obras japonesas.
    </p>
    </div>
    <div className="destacadosMangas container-fluid mb-1 mx-auto">
        <div className="mr-5">
    <ProductList mangas = {mangas.slice(0, 2)}/>
    </div>
    </div>
    </>;
};

export default Destacados;