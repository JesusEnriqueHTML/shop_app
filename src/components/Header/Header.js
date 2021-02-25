import React from 'react';
import './Header.css';
import logo from './jhonny.png';

const Header = () => 
<header className="row mx-auto">
    <div className="col"></div>
    <div className="col">
        <img src={logo} className="img-fluid ml-5 mb-3"/>
    </div>
    <div className="col">
    <h2 className="text-center title h1">Absolute Comics</h2>
    </div>
    <div className="col"></div>
</header>
;
export default Header;
