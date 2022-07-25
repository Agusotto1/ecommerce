
import { useState, useEffect } from 'react'
import "../itemProduct/itemProduct.css"
//le pasamos el valor asignado en el itemContainer
const ItemProduct =({data, action}) =>{
    


    const{title, image, price, stock} = data;
    



    let cantProducto = data.stock
    const [contador, setContador] = useState(1);
    
    const agregarProducto = () => {
        if (contador< cantProducto){
            setContador(contador + 1)
        }else{
            alert("stock superado")
        }
    }
   
        
            
    
    const removerProducto = () => {
        setContador(contador - 1)
    }

    return(
        <div className="item-product">
            
            <img src={`/assets/${image}`} alt="" className="producto" /> 
            <p>{title}</p>
            <span>{price}</span>
            <p>stock: {stock}</p>
            <div className='contador'>
                <button onClick={removerProducto}>-</button>
                <p>{contador}</p>
                <button onClick={agregarProducto}>+</button>
            </div>
            <button onClick={action}>Comprar</button>



        </div>



    )


}

export default ItemProduct