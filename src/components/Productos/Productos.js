import React, { useEffect, useState } from 'react';
import './Productos.css';
import useQuery from '../../hooks/useQuery';

import ListProduct from '../ListProduct';
import { useParams } from 'react-router-dom';



const Productos = () => {
  
    {/*Esta sentencia crea una variable producto que va a ser una array que iremos rellenando con los datos que obtenemos del fetch a la base de datos. Se lo pasamos a ProductList */}
    const [mangas, setMangas] = useState([]);
    const { pageNumber} = useParams();
    
    useEffect(() => {   
        fetch('http://localhost:8080/api/manga/products/?page=' + pageNumber + '&size=2').then((response) => response.json()).then(data => setMangas(data));
    }, [pageNumber]); 
  
  
  
    return <ListProduct mangas={mangas} />;
  };
  
  export default Productos;






/*
export default class Productos extends React.Component {

    constructor(props) {
        super(props);
        this.state ={mangas:[]};
    }
    

    componentDidMount(){
        fetch('http://localhost:8080/manga').then(response => response.json()).then(data =>this.setState({mangas:data}));
    }

    render() {
        return(
            this.state.mangas.map(
                manga =>
                <div key={manga.id} className=" container mt-2 mb-2 d-flex">
                    <div className="d-flex flex-row mt-2 container-fluid">
                        <div className="col border">
                            <img className="imagenesddd" src={manga.imagen} alt={manga.name}/>
                        </div>
                        <div className="col description border">
                        
                            <h3>{manga.name}</h3>
                            <div class="">
                                Descripcion: {manga.descripcion} <br/>
                                Precio: {manga.precio} euros <br/>
                                <button type="button" class="btn btn-primary mt-3"><Link to={`/nuevo/${manga.id}`}><p className="text-white mt-2">Detalles</p></Link></button>
                            </div>  
                        </div>
                    </div>
                </div>

                )
        )
    }
}*/
