

import logo1 from "../assets/LOGO.png";
import facebook from "../assets/facebook.jfif";
import whatsapp from "../assets/whatsapp.png";
import "./navBar/navBar.css";

import Carrito from "./carrito/carrito";

const NavBar = () => {
    return(
        //fragment 
        <>
        <div id="contenedor">
        <h1 class="display-1">TIENDA SUPERCEL ARGENTINA</h1>
        <img src={logo1} alt="" id="logo" />

        <header>
            
            <nav><ul>

                <li> <a href="index.html">inicio </a></li>
                <li> <a href="html/servicios.html"> servicios </a></li>
                <li> <a href="html/mision.html"> productos </a></li>
                <li> <a href="html/equipo.html"> quienes somos </a></li>
                <li> <a href="html/contacto.html"> contacto</a></li>
            
             </ul>
             </nav>
             
        </header>
        <div id="redes">
            
            
                <img src={whatsapp} alt="" className="contactar" />
                <img src={facebook} alt="" className="contactar" />
                <Carrito></Carrito>
            
        </div>
        
        
        <hr />

        </div>     
        </>
       
       
       
       
    )
}

export default NavBar 


// si o si dentro del return tiene que haber un elemento padre
        // en este caso es el div 
        // la forma de usar mas de un elemento padre es poniendo asi
        // Fragment --> y abajo poner 
        // <> y al final de todo el codigo poner </>