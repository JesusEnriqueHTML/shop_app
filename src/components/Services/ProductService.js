
import axios from "axios";
const baseUrl = "http://localhost:8080/api/manga"
const ProductService = {};

ProductService.list = async () => {
  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

ProductService.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=> { return response.data })
  .catch(error =>{ return error })
  return res;
}


ProductService.get = async (id) => {
  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}


ProductService.update = async (state) => {

  const datapost = {
    name: state.fieldName,
    precio: state.fieldPrecio,
    descripcion: state.fieldDescripcion,
    numero: state.fieldNumero,
    imagen: state.fieldImagen,
    resumen: state.fieldResumen,
    paginas: state.fieldPaginas,
    idioma: state.fieldIdioma,
    author: state.fieldAuthor,
    coleccion: state.fieldColeccion,
    isbm: state.fieldIsbm,
    tipo: state.fieldTipo,
    stock: state.fieldStock
  }

  const urlUpdate = baseUrl+"/update/"+state.id

  const res = await axios.put(urlUpdate,datapost)
  .then(response=>{ return response.data })
  .catch(error=>{ return error.response })

  return res;
}




export default ProductService;