import React from 'react';




const NavBar = () => {
    return ( 
        <>
        <header>
             <a class="logo" href="/"></a>
        <nav>
            <ul class="nav__links">
                <li><a href="#">Combos</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Personaliza tu combo</a></li>
            </ul>
        </nav>
        <a class="cta" href="#">Contacto</a>
        <p class="menu cta">Menu</p>
        </header>
        </>
     );
}
 
export default NavBar;