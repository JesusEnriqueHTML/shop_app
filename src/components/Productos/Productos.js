import React from 'react';
import './Productos.css';
import ListProduct from '../ListProduct';
import { Link } from 'react-router-dom';


/*
const Productos = ({ mangas }) =>
mangas.map(manga =>
    <ListProduct key={`manga-${manga.id}`} manga={manga} />
    );

export default Productos;

*/


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
}
