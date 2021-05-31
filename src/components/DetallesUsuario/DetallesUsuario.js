import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetallesUsuario.css';

const DetallesUsuario = ({}) => {
  
  const [user, setUser] = useState(null);

  const { userId } = useParams();



  useEffect(() => {
    fetch(`http://localhost:8080/api/auth/user/${userId}`).then((response) => response.json()).then(data => setUser(data));
}, []);

  return user && Object.keys(user).length !== 0 ? <>
  <div className="container-fluid  cont mb-5 mt-5 row mx-auto">
    <p>{user.name}</p>
  </div>
  </> 
  : <p>There is no post with id: {userId}.</p>;
};

export default DetallesUsuario;