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
import Destacados from './components/Destacados'



const App = () => (
<Router>
  <Header/>
  <Navbar />
  <div className='altoFacha'>
  <Switch>
    <Route path="/home">
      <Home />
<Destacados />
    </Route>
    <Route path="/productos">
      < Productos />
    </Route>
    <Route path="/nuevo/:mangaId">
        <Nuevo />
    </Route>
  </Switch>
  </div>
  <Footer />
</Router>
);

export default App;
