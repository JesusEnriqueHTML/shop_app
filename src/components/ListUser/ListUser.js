import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./ListUser.css";
import UserListItem  from '../UserListItem/UserListItem';



const ListUser = ({users}) => {
    if(users.content?.length > 0) {
    return(
        <>
          {users.content?.map((user)  => <UserListItem key={`user-${user.id}`} user={user}/>)}

          <div className="container-fluid row mx-auto mb-2">
            <div className="col"><Link to={`/users/${users.number-1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light" disabled={users.first}>Anterior</button></Link></div>
            <div className="col"><Link to={`/users/${users.number+1}`}><button type="button" class="btn btn-dark btn-block btn-outline-light" disabled = {users.last}>Siguiente</button></Link></div>

        </div>
        </>
    );
    }else{
        return <>
        <div className="col text-center mt-3 mb-3">
        <p className="display-3">No se encuentra resultados para esta busqueda</p>
        <img src="/resources/algo.gif" className="w-25"/>   
        </div>     
</>
    }



}
export default ListUser;


