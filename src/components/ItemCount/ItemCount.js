import {useState, useContext} from "react"
import { CartContext } from "../../context/CartContext"


const ItemCount = ({cantProduct, setQuantitySelected, productData}) =>{



    const {addProductToCart} = useContext(CartContext)
    //const {addQuantity} = useContext(CartContext)
    
    const [countQuantity, setCountQuantity] =useState(1)
    

    const addCantidad = () => {
        if (countQuantity < cantProduct) {
            setCountQuantity(countQuantity + 1)
            }else{
                alert("no puede seleccionar mas productos del stock disponible")
            }
        
    }
    
    
    const removeCantidad = () => {
        if (countQuantity>0) {
            setCountQuantity(countQuantity - 1)
        }
      
    }

   

    const onAdd = () => {
       
        addProductToCart(productData, countQuantity)
        //addQuantity(countQuantity)
        setQuantitySelected(countQuantity)
        
        
        
    }
    
    
    return(
        <>        
        <div>
            <button onClick={removeCantidad}> - </button>
            <span>{countQuantity}</span>
            <button onClick={addCantidad} > + </button>

        </div>
        <button onClick={() => onAdd(countQuantity)}>AGREGAR AL CARRITO</button>
        </>

    )
}

export default ItemCount