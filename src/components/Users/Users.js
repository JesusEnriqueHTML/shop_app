import React, { Component } from 'react';
import UsersService from "../Services/UsersService"
import { Link } from "react-router-dom";

export default class Users extends Component {

  constructor()
  {
    super()
    this.state = {
      listUsers:[]
    }
  }

  async componentDidMount()
  {
     console.log("Mounted list");
     const res = await UsersService.list()
     console.log(res);
     if (res.success) {
       this.setState({listUsers:res.list})
     }
     else {
       alert("Error ==>"+res.message)
     }
  }

  render() {
    return (
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
             
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
             this.state.listUsers.map((data, i)=>{
               return(
                 <tr>
<th scope="row">{data.id}</th>
                   <td>{data.name}</td>
                  
                   <td>
                    <a  onClick={()=>this.onClickDelete(i,data.id)} href="#" class="btn btn-danger"> Delete </a>                   </td>
                 </tr>
               )
             })
           }
          </tbody>
        </table>
    )
  }
  
  async onClickDelete(i,id)
  {
  
      
      const res = await UsersService.delete(id)

      if (res.success) {
        alert(res.message)
        const list = this.state.listUsers
        list.splice(i,1)
        this.setState({listUsers:list})
      }
      else{
        console.log(res); alert(JSON.stringify(res))
      } 
    
  }
}



