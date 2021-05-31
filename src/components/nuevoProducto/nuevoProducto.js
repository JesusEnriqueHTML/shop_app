import React, { useEffect, useState } from 'react';
import './nuevoProducto.css';
import { storage } from '../firebase/firebase';
import '../firebase/firebase';

const NuevoProducto = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [image, setImage] = useState(null);

  const [mensaje, setMensaje] = useState("");
  const formulario = {
    name: '',
    precio: '',
    descripcion: '',
    imagen: '',
    numero: '',
    resumen: '',
    paginas: '',
    idioma: '',
    author: '',
    coleccion: '',
    isbm: '',
    tipo: '',
    stock: '',
    calidad: '',
  }

  const [formState, setFormState] = useState(formulario);

  const handleChange = event => {
    setFormState({
      ...formState,
        [event.target.name]: event.target.value,
    })
}

const handleChangeImage = event => {

  if (event.target.files[0]){
      setImage(event.target.files[0]);
  }

}

function handleUpload() {
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on(
      "state_changed",
      snapshot => { },
      error => {
          console.log(error);

      },
      () => {
          storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                  formState.imagen = url;
              })
      }
  )
}

function guardarBBDD() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + user.accessToken);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "*");


  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formState),
      redirect: 'follow'
    };

  fetch('http://localhost:8080/api/manga/newManga', requestOptions) 
  .then((response) => response.json()).then(data => setMensaje(data.message));

}


  const onSubmit = (event) => {
    event.preventDefault()

        if (image != null) {
            handleUpload()
        }

        setTimeout(guardarBBDD, 3000)
}
return(

<form className="container-fluid mb-3 mt-2 text-center" method="post" onSubmit={onSubmit}>

<div className="form-row">
        <div className="form-group row  mx-auto">
          <div>
          <label>Nombre</label>
          <input type="text" className="form-control" name="name" placeholder="Nombre" onChange={handleChange}  required />
          </div>
          <div>
          <label>Precio</label>
          <input type="text" className="form-control" name="precio" placeholder="Precio" onChange={handleChange}  required />
          </div>
        </div>
      </div>
      
      <div className="form-row mt-2 row">
        <div className="form-group col-md-12">
          <label >Descripcion</label>
          <textarea  type="text" className="form-control decripcion" name="descripcion" placeholder="Pequeña descripcion del manga" onChange={handleChange} required />
        </div>
      </div>


      <div className="form-row">
      
      <div className="form-group col-md-12">
      <label className="file">Imagen de producto
                <input 
                        name="imagen"
                        type="file"
                        onChange={handleChangeImage}

                    ></input>
</label>
</div>
        <div className="form-group col-md-6">
          <label >Numero</label>
          <input type="number" className="form-control" name="numero" placeholder="numero" onChange={handleChange} required />
        
        </div>

        <div className="form-group col-md-6">
          <label>Idioma</label>
          <input type="text" className="form-control" name="idioma" placeholder="Idioma" onChange={handleChange}  />
        </div>

      
      </div>
      <div className="form-row">
      <div className="form-group col-md-2 mx-auto">
          <label>Paginas</label>
          <input type="number" name="paginas" className="form-control" placeholder="Numero de Paginas" required onChange={handleChange} required />
        </div>
        <div className="form-group col-md-2 mx-auto">
          <label>Coleccion</label>
          <input type="text" name="coleccion" className="form-control" placeholder="Nombre del producto" required onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
      <div className="form-group col-md-2 mx-auto">
          <label>ISBM</label>
          <input type="text" name="isbm" className="form-control" placeholder="Codigo del Producto" required onChange={handleChange} required />
        </div>
        <div className="form-group col-md-2 mx-auto">
          <label>tipo</label>
          <input type="text" name="tipo" className="form-control" placeholder="COMIC, MANGA, LIBRO" required onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row mt-2 row">
        <div className="form-group col-md-12">
        <label>Resumen</label>
        <textarea  type="text" className="form-control decripcion" name="resumen" placeholder="Pequeña descripcion del manga" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
      
        <div className="form-group col-md-2 mx-auto">
          <label>Autor</label>
          <input type="text" name="author" className="form-control" placeholder="Autor/es del manga" required onChange={handleChange} required />
        </div>
        
        <div className="form-group col-md-2 mx-auto">
          <label>Stock</label>
          <input type="number" name="stock" className="form-control" placeholder="Numero de Stock" required onChange={handleChange} required />
        </div>

        <div className="form-group col-md-2 mx-auto">
        <label>Calidad</label>
        <div className="row mx-auto">
        <input type="number" name="calidad" className="form-control col-md-12" placeholder="calidad"   onChange={handleChange} />
          </div>
        </div>
        
          
      </div>

      <div className="container-fluid text-center">
      {mensaje && <p> {mensaje}</p>}
      
      <button type="submit" className="btn btn-primary mt-3">Añadir Producto</button>      </div>
      
</form>

);
}
export default NuevoProducto;