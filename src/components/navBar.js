import { dividerClasses } from "@mui/material"
import logo from "../assets/telefono.jpg"
import carrito from "../assets/carrito.jpg"
import coderhouse from "../assets/CODERHOUSE.jpg"
import facebook from "../assets/facebook.jfif"
import whatsapp from "../assets/whatsapp.png"
import "./navBar/navBar.css"

const NavBar = () => {
    return(
        //fragment 
        <>
        <div id="contenedor">
        <h1 class="display-1">TIENDA SUPERCEL ARGENTINA</h1>
        <img src={coderhouse} alt="" id="CODERHOUSE" />

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