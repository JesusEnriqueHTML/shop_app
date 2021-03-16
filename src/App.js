import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { 
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch

} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Productos from './components/Productos';
import Nuevo from './components/Nuevo/Nuevo';
import Destacados from './components/Destacados';
import Form from './components/Form';
import InicioSesion from './components/InicioSesion';
import Identificarse from './components/Identificarse';
import Carrito from './components/Carrito';
import Search from './components/Buscar';
import Navbar2 from './components/Navbar2';


const App = () => {

  const [carrito,setCarrito] = useState([])

const addProduct = (props) => {

setCarrito ([...carrito, props])


console.log(carrito)

}

useEffect(() => {
 
}, [carrito]);

const onDelete = (index) => {
    


  setCarrito(carrito.filter((producto, idx) => idx !== index));
  
  
  }

return(
<Router>
  <Header/>
  <Navbar2 />
  <Redirect
    from="/"
    to="/home" />
  <div className='altoFacha'>
  <Switch>
    <Route path="/home">
      <Home />
      <Destacados />
    </Route>
    <Route path="/products/:pageNumber">
      < Productos />
    </Route>
    <Route path="/query/:search">
      <Search />
    </Route>
    <Route path="/nuevo/:mangaId">
        <Nuevo addProduct={addProduct} />
    </Route>
    <Route path="/form/identificarse">
      <Form />
      <Identificarse />
    </Route>
    <Route path="/form/inicioSesion">
      <Form />
      <InicioSesion />
    </Route>
    <Route path="/form/identificarse">
      <Form />
      <Identificarse />
    </Route>
    <Route path="/comprar">
      <Carrito onDelete={onDelete} carrito={carrito} />
    </Route>
  </Switch>
  </div>
  <Footer />
</Router>
)
}

export default App;
