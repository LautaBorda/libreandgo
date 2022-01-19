import React, {useState} from "react";
import Products from "./Products";


export default function ListaDeProductos(){

    const [arrayDeProductos, setArrayDeProductos] = useState([
        {nombre: 'Combo Kids', stock: 5},
        {nombre: 'Combo Primaria', stock: 6},
        {nombre: 'Combo Secundaria', stock: 7}
    ]);
    
    return(
        <>
            {
                arrayDeProductos.map(item=> <Products item={item} /> )
            }
        </>
    )

}
