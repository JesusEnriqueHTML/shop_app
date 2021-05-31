import ProductService from "../Services/ProductService"

export default class EditarProducto extends Component {
    constructor(){
        super()
        this.state = {
        id:0,
        fieldName:"",
        fieldPrecio:"",
        fieldDescription:"",
        fieldImage:"",
        fieldNumero:"",
        fieldResumen: "",
        fieldPaginas: "",
        fieldIdioma: "",
        fieldAuthor: "",
        fieldColeccion: "",
        fieldIsbm: "",
        fieldTipo: "",
        fieldStock: "",
        fieldCalidad: ""
        
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
        fieldDescription:res.data.descripcion,
        fieldImage:res.data.imagen,
        fieldNumero:res.data.numero,
        fieldResumen: res.data.resumen,
        fieldPaginas: res.data.paginas,
        fieldIdioma: res.data.idioma,
        fieldAuthor: res.data.author,
        fieldColeccion: res.data.coleccion,
        fieldIsbm: res.data.isbm,
        fieldTipo: res.data.tipo,
        fieldStock: res.data.stock,
        fieldCalidad: res.data.calidad
        })
     }
     else {
       alert("Error ==>"+res.message)
     }
  }
  render() {
    return (
<div>
<div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">Name employee</label>
            <input type="text" class="form-control"
              value={this.state.fieldName}
              onChange={(value)=>this.setState({fieldName:value.target.value})}
            />

          </div>
        </div>
</div>

    )}
}