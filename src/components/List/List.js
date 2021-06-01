import React, { Component } from 'react';
import ProductService from "../Services/ProductService"
import { Link } from "react-router-dom";

export default class List extends Component {

  constructor()
  {
    super()
    this.state = {
      listManga:[]
    }
  }

  async componentDidMount()
  {
     console.log("Mounted list");
     const res = await ProductService.list()
     console.log(res);
     if (res.success) {
       this.setState({listManga:res.list})
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
             <th scope="col">ISBM</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
             this.state.listManga.map((data, i)=>{
               return(
                 <tr>
<th scope="row">{data.id}</th>
                   <td>{data.name}</td>
                   <td>{data.isbm}</td>
                  
                   <td>
                   <Link class="btn btn-outline-info" to={"/edit/"+data.id}>Edit</Link>
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
  
      
      const res = await ProductService.delete(id)

      if (res.success) {
        alert(res.message)
        const list = this.state.listManga
        list.splice(i,1)
        this.setState({listManga:list})
      }
      else{
        console.log(res); alert(JSON.stringify(res))
      } 
    
  }
}