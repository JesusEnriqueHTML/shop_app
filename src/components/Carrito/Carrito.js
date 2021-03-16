import { useState, useEffect } from "react";



const Carrito= ({carrito, onDelete}) => {
    
    const [precioTotal,setPrecioTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        carrito.map((cestaprueba) => total += cestaprueba.precio)
        setPrecioTotal(total)
    }, [carrito])
return (
  

<div className="container mx-auto row altaCesta">
{carrito.map((cestaprueba, index) => {
    return (
    
        <div className="mr-2 mb-3 row mx-auto">
        <div className="col">
        <img className="imgcar  w-25 img-fluid" src={cestaprueba.imagen} alt={cestaprueba.name}/>
        </div>
        <div className="col">
        <p className="display-3">{cestaprueba.name}</p> <button onClick={() => onDelete(index)}>Borrar</button>
        </div>
        </div>
    )
})}
<div className="mx-auto row text-center precio">
<p> Total: {precioTotal}</p>
</div>
</div>
)

}
export default Carrito;