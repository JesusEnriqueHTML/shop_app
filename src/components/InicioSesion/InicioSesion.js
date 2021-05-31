import React, { useEffect, useState } from 'react';
import './InicioSesion.css';

const InicioSesion = () => {
  const [errorEdad, setErrorEdad] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const formulario = {

    username: '',
    email: '',
    password: '',
    name: '',
    lastname: '',
    birthdate: ''
    

  }

  const [formState, setFormState] = useState(formulario);

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }


  const onSubmit = (event) => {
    event.preventDefault()


    const d = new Date();
    const c = new Date(formState.birthdate);
    const a = c.getFullYear();
    const n = d.getFullYear();

    const edad = n - a;
    if (edad < 18) {
      setErrorEdad("Tienes que ser mayor de 18")
      setMensaje(null);
      return;
    } 

    fetch('http://localhost:8080/api/auth/signup', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formState)
    }).then((response) => response.json()).then(data => setMensaje(data.message));
    setErrorEdad(null)
}
return(
<form className="container-fluid mb-3 mt-2 text-center" onSubmit={onSubmit}>
<div className="form-row">
        <div className="form-group col-md-6  mx-auto">
          <label>Nombre de Usuario</label>
          <input type="text" className="form-control" name="username" placeholder="Usuario" onChange={handleChange} minLength="3" maxLength="20" required />
        </div>
      </div>
      
      <div className="form-row mt-2">

        <div className="form-group col-md-6">
          <label >Nombre</label>
          <input type="text" className="form-control" name="name" placeholder="Nombre" onChange={handleChange} required />
        </div>

        <div className="form-group col-md-6">
          <label>Apellidos</label>
          <input type="text" className="form-control" name="lastname" placeholder="Apellidos" onChange={handleChange} required />
        </div>

      </div>


      <div className="form-row">
        <div className="form-group col-md-6">
          <label >Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        
        </div>

        <div className="form-group col-md-6">
          <label>Contraseña</label>
          <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} minLength="6" maxLength ="40" />
        </div>

      
      </div>
      <div className="form-row">
      <div className="form-group col-md-2 mx-auto">
          <label>Fecha de Nacimiento</label>
          <input type="date" name="birthdate" className="form-control" required onChange={handleChange} required />
          {errorEdad && <p> {errorEdad}</p>}
        </div>
      </div>

      <div className="container-fluid text-center">
      {mensaje && <p> {mensaje}</p>}
        <button type="submit" className="btn btn-lg btn-block btn-dark mt-3">Enviar</button>
      </div>
</form>
);
}
export default InicioSesion;