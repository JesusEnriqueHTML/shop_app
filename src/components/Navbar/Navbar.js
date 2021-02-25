import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './carrito.png';
import logo1 from './jhonny1.png';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top justify-content-between">
        <div className="container-fluid barraDeNavegacion ">
        <img src={logo1} className="img-fluid Jhonny ml-4 mb-1 mr-3"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item mt-2">
                        <NavLink to='/home' className="nav-link active" aria-current="page" >Home</NavLink>
                    </li>
                    <li className="nav-item mt-2">
                        <NavLink to='/productos' className='nav-link'>Productos</NavLink>
                    </li>
                    <form className="form-inline mr-5 ml-3 mb-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </ul>
                    <div className="btn-group mt-2 mb-3" role="group" aria-label="Basic example">
                    <NavLink to='/form/identificarse' className='nav-link'><button type="button" className="btn btn-dark mr-1">Inicar Sesion</button></NavLink>
                    <NavLink to='/form/inicioSesion' className='nav-link'><button type="button" className="btn btn-dark mr-1">Registrarse</button></NavLink>
                    </div>
       


            </div>
            </div>
        </nav>
    );
};

// <NavLink to='/home' class='active'>Home</NavLink>
// <NavLink to='/productos'>Productos</NavLink>
export default Navbar;