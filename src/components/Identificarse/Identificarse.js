import React from 'react';
import './Identificarse.css';

const Identificarse = () => 
<form className="container mb-3">
  <div className="form-group">
    <label for="name">Nombre</label>
    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name"/>
    <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

    <label for="Apellido">Apellido</label>
    <input type="text" className="form-control" id="Apellido" aria-describedby="ApellidoHelp" placeholder="Enter your Apellido"/>
    <small id="ApellidoHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
;
export default Identificarse;