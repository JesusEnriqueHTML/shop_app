import React from 'react';
import "./UserListItem.css";
import { Link } from 'react-router-dom';


const UserListItem = ({ user }) =>
<div className="row container-fluid mt-5 mx-auto mb-5">
<table className="table table-dark">
    <thead>
        <th className="w-25" scope="col">NombreUsuario</th>
        <th className="w-25" scope="col">Apellido</th>
        <th className="w-25" scope="col">Nombre</th>
        <th className="w-25" scope="col">Fecha de Nacimineto</th>
        <th className="w-25"  scope="col">Correo Electronico</th>
    </thead>
    <tbody>
        <tr>
            <td scope="row" className="w-25">{user.username}</td>
            <td>{user.lastname}</td>
            <td>{user.name}</td>
            <td>{user.birthdate}</td>
            <td>{user.email}</td>
        </tr>
    </tbody>
</table>
</div>
export default UserListItem;