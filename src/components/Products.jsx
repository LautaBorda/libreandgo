import React from "react";
import MasMenos from "./ItemCount";

export default function Producto({ item }) {

    function onAdd() {
        alert(item.nombre + ' ' + item.stock);
    }

    return (
        <>
            <div>
                PRODUCTO:
                <div>
                    <p>{item.nombre}</p>
                    <p>Cantidad disponible : {item.stock}</p>
                </div>

                
                <div> 
                    <button onClick={() => onAdd()}>AGREGAR AL CARRO</button>
                </div>
                <MasMenos tope={item.stock} />
            </div>
        </>
    )

}