import React from 'react';
import './InicioSesion.css';

const InicioSesion = () => 
<form className="container mb-3">
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Enter NAME"/>
    <small id="emailHelp" class="form-text text-muted">We'll never see any person with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
;
export default InicioSesion;