import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './carrito.png';
import logo1 from './jhonny1.png';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top justify-content-between">
        <div className="container-fluid barraDeNavegacion ">
        <img src={logo1} className="img-fluid Jhonny ml-4 mb-1 mr-3"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/home' className="nav-link active" aria-current="page" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/productos' className='nav-link'>Productos</NavLink>
                    </li>
                    <form class="form-inline mr-5 ml-3">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </ul>

            <div className="btn-group">
            <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

                
                <div className="modal-header">
                    <h4 className="modal-title">Customer Sign In</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

                <div className="modal-body">
                    <form>
                        <label className="sr-only" for="usrname">Username</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span> 
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>


                        <label className="sr-only" for="Password">Name</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                            </div>
                            <input id="Password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="submit" class="btn btn-primary" >Sign In</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    </div>

</div>
            </div>
        </nav>
    );
};

// <NavLink to='/home' class='active'>Home</NavLink>
// <NavLink to='/productos'>Productos</NavLink>
export default Navbar;