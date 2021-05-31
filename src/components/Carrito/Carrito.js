import { useState, useEffect } from "react";
import StripeButton from "../stripeButtom/stripeButtom";



const Carrito= ({carrito, onDelete}) => {
    
    const [precioTotal,setPrecioTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        carrito.map((cestaprueba) => total += cestaprueba.precio)
        setPrecioTotal(total)
    }, [carrito])

    const refreshPage = ()=>{
        window.location.reload();
     }

return (
  

<div className="container w-50  mx-auto altaCesta">
{carrito.map((cestaprueba, index) => {
    return (
     
        <div className=" mb-3 row  d-flex justify-content-around mx-auto">
        <div className="col">
        <img className="imgcar mt-5 w-50 img-fluid" src={cestaprueba.imagen} alt={cestaprueba.name}/>
        </div>
        <div className="col mt-4">
        <h2 className="m-5 text-center">{cestaprueba.name}</h2> 
        <button className="btn btn-dark mt-2 btn-lg btn-block" onClick={() => onDelete(index)}>Borrar</button>
        </div>
        </div>
    )
})}
<hr className="w-100"/>
<div className="mx-auto text-center precio">
<p className="text-center display-3"> Total: {precioTotal}</p>
</div>
<div className="mx-auto text-center">
 <StripeButton price={precioTotal} carrito={carrito}/>
</div>
</div>
)

}
export default Carrito;