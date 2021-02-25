import {NavLink} from 'react-router-dom';
import './Pagination.css';




const Pagination = () => {
    return (
        <div className="mb-3 mt-2 row container d-flex justify-content-center mx-auto alto">
        <div className="col">
            <button type="button" class="btn btn-dark btn-lg btn-block btn-outline-light">Siguiente Pagina</button>
            
        </div>
        </div>
    );
};

// <NavLink to='/home' class='active'>Home</NavLink>
// <NavLink to='/productos'>Productos</NavLink>
export default Pagination;