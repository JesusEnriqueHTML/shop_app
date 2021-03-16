import React, { useEffect, useState } from 'react';
import './Buscar.css';

import ListProduct from '../ListProduct';
import { useParams } from 'react-router-dom';

const Buscar = () => {
  
    {/*Esta sentencia crea una variable producto que va a ser una array que iremos rellenando con los datos que obtenemos del fetch a la base de datos. Se lo pasamos a ProductList */}
    const [mangas, setMangas] = useState([]);
    const { search } = useParams();
    
    useEffect(() => {   
        fetch('http://localhost:8080/api/manga/search/' + search + '/?page=0&size=2').then((response) => response.json()).then(data => setMangas(data));
    }, [search]); 
  
  
  
    return <ListProduct mangas={mangas} />;
  };
  
  export default Buscar;