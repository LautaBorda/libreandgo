import React from 'react';
import ListaDeProductos from './ListaProductos';

function Bienvenida(props) {
    return <>
        <h2 className='Welcome'>{props.title}</h2>
    </>
}

const ProductsContainer = () => {


    return (

        <>
            < Bienvenida title="Bienvenido a nuestro Ecommerce" > </Bienvenida>
            <div className='ProductContainer'>
                <ListaDeProductos />
            </div>
        </>

    )

}

export default ProductsContainer;