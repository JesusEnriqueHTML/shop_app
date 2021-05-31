import React from 'react';
import './Header.css';
import logo from './cath1.png';

const Header = () => 
<header className="row mx-auto container-fluid mb-3">
    <div className="mx-auto text-center container">
        <img src={logo} className="img-fluid w-25"/>
        </div>
</header>
;
export default Header;
