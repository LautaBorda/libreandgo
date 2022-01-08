import React from 'react'
import {CgShoppingBag} from 'react-icons/cg'

const CartWidget = () => {
    return ( 
        <div className='shopicon'>
        <CgShoppingBag />
        <p className='counter'>0</p>
        </div>
     );
}
 
export default CartWidget;