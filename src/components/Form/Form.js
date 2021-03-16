import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Form.css';

const Form = () => 
    <nav className="navbar navbar-expand-lg navbar-light sticky-top justify-content-between container">
        <div className="container">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 row p-2">
            <NavLink to='identificarse' className='nav-link'><button type="button" className="btn btn-dark mr-1">Inicar Sesion</button></NavLink>                
            <NavLink to='inicioSesion' className='nav-link'><button type="button" className="btn btn-dark mr-1">Registrarse</button></NavLink>
            </ul>
        </div>
    </nav>
;
export default Form;
