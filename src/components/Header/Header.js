import React from 'react';
import './Header.css';
import logo from './jhonny.png';

const Header = () => 
<div className=" header d-flex flex-row justify-content-center">
    <img src={logo} className="img-fluid imagen"/>

<h2 class="text-center mt-5 display-4">Absolute Comics</h2>
</div>
;
export default Header;
