import {useState} from "react"


const ItemCount = ({cantProduct, setQuantitySelected}) =>{

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
        setQuantitySelected(countQuantity)
    }
    
    
    return(
        <>        
        <div>
            <button onClick={removeCantidad}> - </button>
            <span>{countQuantity}</span>
            <button onClick={addCantidad} > + </button>

        </div>
        <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>

    )
}

export default ItemCount