import React, {useEffect} from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {


    // para saber el ciclo de vida del componente y saber cuanto timempo estuvo en pantalla 

    useEffect (()=>{

       return ()=> {console.log("Se monto la NavBar")}

    }, [])

    return (
        <>
            <header>
                <CartWidget />
                <nav>
                    <ul className="nav__links">
                        <li><a href="#">COMBOS</a></li>
                        <li><a href="#">SOBRE NOSOTROS</a></li>
                        <li><a href="#">PERSONALIZA TU COMBO</a></li>
                    </ul>
                </nav>
                <a className="cta" href="#">CONTACTO</a>
                <p className="menu cta">MENU</p>

            </header>
        </>
    );
}

export default NavBar;