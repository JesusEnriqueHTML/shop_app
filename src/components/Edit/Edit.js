import React, { Component } from 'react';

import ProductService from "../Services/ProductService"

export default class Edit extends Component {

  constructor(){
    super()
    this.state = {
      id:0,
      fieldName:"",
      fieldPrecio:"",
fieldDescripcion:"",
fieldNumero:"",
fieldResumen:"",
fieldPaginas:"",
fieldIdioma:"",
fieldAuthor:"",
fieldColeccion:"",
fieldIsbm:"",
fieldStock:""
    }
  }

  async componentDidMount()
  {
     console.log("Mounted Edit");
     const id = this.props.match.params.id;
     const res = await ProductService.get(id)
     console.log(res);
     if (res.success) {
       console.log(res.data);
        this.setState({
          id: res.data.id,
          fieldName:res.data.name,
          fieldPrecio:res.data.precio,
   fieldDescripcion:res.data.descripcion,
    fieldNumero:res.data.numero,
    fieldImagen:res.data.imagen,

    fieldResumen:res.data.resumen,
    fieldPaginas:res.data.paginas,
    fieldIdioma:res.data.idioma,
    fieldAuthor:res.data.author,
    fieldColeccion:res.data.coleccion,
    fieldIsbm:res.data.isbm,
    fieldTipo:res.data.tipo,
    fieldStock:res.data.stock
        })
     }
     else {
       alert("Error ==>"+res.message)
     }
  }

  render() {
    let mangaId = this.props.match.params.id;
    return (
      <div classname="mx-auto container-fluid">
        <h4> {mangaId} </h4>
        <hr />
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
            <label for="firstName">Name</label>
            <input type="text" class="form-control"
              value={this.state.fieldName}
              onChange={(value)=>this.setState({fieldName:value.target.value})}
            />
          </div>
        </div>

				<div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
            <label for="precio">Precio</label>
            <input type="number" class="form-control"
              value={this.state.fieldPrecio}
              onChange={(value)=>this.setState({fieldPrecio:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
            <label for="descripcion">Descripcion</label>
            <textarea type="text" class="form-control"
              value={this.state.fieldDescripcion}
              onChange={(value)=>this.setState({fieldDescripcion:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
            <label for="numero">Numero</label>
            <input type="number" class="form-control"
              value={this.state.fieldNumero}
              onChange={(value)=>this.setState({fieldNumero:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
            <label for="resumen">Resumen</label>
            <textarea type="text" class="form-control"
              value={this.state.fieldResumen}
              onChange={(value)=>this.setState({fieldResumen:value.target.value})}
            />
          </div>
        </div>
       
       


				<div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="paginas">Paginas</label>
	          <input type="number" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldPaginas}
              onChange={(value)=>this.setState({fieldPaginas:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="idioma">Idioma</label>
	          <input type="text" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldIdioma}
              onChange={(value)=>this.setState({fieldIdioma:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="autor">Author</label>
	          <input type="text" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldAuthor}
              onChange={(value)=>this.setState({fieldAuthor:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="coleccion">Coleccion</label>
	          <input type="text" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldColeccion}
              onChange={(value)=>this.setState({fieldColeccion:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="isbm">ISBM</label>
	          <input type="text" class="form-control" placeholder="ISBM"
              value={this.state.fieldIsbm}
              onChange={(value)=>this.setState({fieldIsbm:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="tipo">Tipo</label>
	          <input type="text" class="form-control" placeholder="ISBM"
              value={this.state.fieldTipo}
              onChange={(value)=>this.setState({fieldTipo:value.target.value})}
            />
          </div>
        </div>
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="imagen">Imagen</label>
	          <input type="text" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldImagen}
              onChange={(value)=>this.setState({fieldImagen:value.target.value})}
            />
          </div>
        </div>
        
        <div class="row mx-auto container-fluid">
          <div class="col-md-6 mb-3">
						<label for="stock">Stock</label>
	          <input type="number" class="form-control" placeholder="1234 Main St"
              value={this.state.fieldStock}
              onChange={(value)=>this.setState({fieldStock:value.target.value})}
            />
          </div>
        </div>
        
        

				<div class="row mx-auto container-fluid">
					<div class="col-md-6 mb-3">
		      	<button class="btn btn-primary btn-block" onClick={()=>this.onClickUpdate()}
		      		type="submit">Update</button>
					</div>
				</div>
      </div>
    )
  }

	async onClickUpdate()
	{ 
    console.log("Execute update");
		const res = await ProductService.update(this.state)
		if (res.success) {
			alert(res.message)
		}
		else {
      console.log("Error");
      console.log(res);
			alert("Error ==>"+JSON.stringify(res.data))
		}
	}

}