

import logo1 from "../assets/LOGO.png";
import facebook from "../assets/facebook.jfif";
import whatsapp from "../assets/whatsapp.png";
import "./navBar/navBar.css";
import {Link} from "react-router-dom"
import TipoProductos from "./tiposproductos/TipoProductos"



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

                <Link to="/"> <li> <button className="barra">Home</button></li> </Link>
                <Link to="/Contact"> <li> <button className="barra">Contact</button></li> </Link>
                <Link to="/Products"> <li> <button className="barra">Products</button></li> </Link>
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