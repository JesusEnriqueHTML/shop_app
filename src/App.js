import logo from './logo.svg';
import './App.css';
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
import Pagination from './components/Pagination';




const App = () => (
<Router>
  <Header/>
  <Navbar />
  <Redirect
    from="/"
    to="/home" />
  <div className='altoFacha'>
  <Switch>
    <Route path="/home">
      <Home />
      <Destacados />
    </Route>
    <Route path="/productos">
      < Productos />
      < Pagination />
    </Route>
    <Route path="/nuevo/:mangaId">
        <Nuevo />
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
  </Switch>
  </div>
  <Footer />
</Router>
);

export default App;
