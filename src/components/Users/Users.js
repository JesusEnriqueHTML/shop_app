import React, { useEffect, useState } from 'react';
import './Users.css';

import ListUser from '../ListUser';
import { useParams } from 'react-router-dom';


const Productos = () => {
  
    {/*Esta sentencia crea una variable producto que va a ser una array que iremos rellenando con los datos que obtenemos del fetch a la base de datos. Se lo pasamos a ProductList */}
    const [users, setUsers] = useState([]);
    const { pageNumber} = useParams();
    
    useEffect(() => {   
        fetch('http://localhost:8080/api/auth/ListaUsuarios/?page=' + pageNumber + '&size=5').then((response) => response.json()).then(data => setUsers(data));
    }, [pageNumber]); 
  
  
  
    return <ListUser users={users} />;
  };
  
  export default Productos;




