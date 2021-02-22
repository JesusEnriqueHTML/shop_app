import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Nuevo.css';

const Nuevo = () => {
  const [manga, setManga] = useState(null);
  const { mangaId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/manga/${mangaId}`).then((response) => response.json()).then(data => setManga(data));
}, []);

  return manga && Object.keys(manga).length !== 0 ? <><h2>{manga.name}</h2></> : <p>There is no post with id: {mangaId}.</p>;
};

export default Nuevo;