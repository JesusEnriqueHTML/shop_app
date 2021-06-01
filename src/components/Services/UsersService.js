import axios from "axios";
const baseUrl = "http://localhost:8080/api/auth"
const UsersService = {};

UsersService.list = async () => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response=> {return response.data })
    .catch(error=>{ return error; })
    return res;
  }
  
  UsersService.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response=> { return response.data })
    .catch(error =>{ return error })
    return res;
  }

  export default UsersService;