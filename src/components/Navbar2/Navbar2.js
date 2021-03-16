import {NavLink, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './Navbar2.css';
import logo from './carrito.png';
import logo1 from './gatoHugo.png';



const Navbar2 = () => {

    const[search, setSearch] = useState({});
 const user = JSON.parse(localStorage.getItem('user'));
  const [buscador, setBuscador] = useState("");
  

  const logout = () => {
    window.location = '/home';
    window.localStorage.clear("user");
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark mt-2  mb-2">
        <img src={logo1} className="cato navbar-brand" alt="Imagen creada por Hugo, 2ºDIW"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mt-2">
          <li className="nav-item">
                        <NavLink to='/home' className="nav-link active" aria-current="page" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products/0' className='nav-link'>Productos</NavLink>
                    </li>
            <li className="nav-item">
            <form className="form-inline mr-5 ml-3 mb-2 row w-100">
                        <input className="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search" onChange={(event) => setSearch(event.target.value)}/>
                        <NavLink to={`/query/${search}`} className="col"><button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button></NavLink>
                    </form>
            
            </li>
            
          </ul>

          <ul className="navbar-nav registration">
          <li className="nav-item row ml-4 float-right">   
            <NavLink to='/form/inicioSesion' className='nav-item mr-2'><button type="button" className="btn btn-dark">Registrarse</button></NavLink>
            {user && (
        
        <NavLink to = '/home'  className="nav-item navitem">  <button type="button" className="btn btn-dark" onClick = {logout}> {user.username}</button></NavLink>
         ) }
         {user && (   <NavLink to='/comprar' className='nav-item col mt-1 w-25'><img src={logo} className="img-fluid cath ml-3"/></NavLink>
         )}
   
        {!user &&  (
        <NavLink to='/form/identificarse' className='nav-item'><button type="button" className="btn btn-dark">Iniciar Sesion</button></NavLink>
         )}
            </li>

            </ul>
        
         
        </div>
      </nav>
        

/**  <div className="btn-group mt-2 mb-3 ml-5" role="group" aria-label="Basic example">
                    <NavLink to='/form/inicioSesion' className='nav-link'><button type="button" className="btn btn-dark mr-1">Registrarse</button></NavLink>
                    {user && (
        
       <NavLink to = '/home'  className="nav-item p-2 navitem">  <button type="button" className="btn btn-dark mr-1" onClick = {logout}> {user.username}</button></NavLink>
        ) }
        {user && (  <p>Carrito</p>
        )}
  
       {!user &&  (
       <NavLink to='/form/identificarse' className='nav-link'><button type="button" className="btn btn-dark mr-1">Iniciar Sesion</button></NavLink>
        )}
        </div> */
                    
                  
        
    );
};

// <NavLink to='/home' class='active'>Home</NavLink>
// <NavLink to='/productos'>Productos</NavLink>
export default Navbar2;