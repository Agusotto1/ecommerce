
import { createContext, useState } from "react";

const CartContext = createContext()

// con el cartProvider voy a definir todos los valores que voy a pasarle al resto de los componentes 
const CartProvider = ({children}) =>{
    
        
    const [cartProducts, setCartProduct] =useState([])





    const addProductToCart = (product) => {         
        
        
        setCartProduct([...cartProducts, product]) //con los tres puntos mantengo los valores que ya tenia 
    }                                              // el parametro "product" es el product data del ItemCount 

   
    const clear = () => {
        setCartProduct([])
    }

   
    
    
    const data= {
        addProductToCart,
        cartProducts,
        setCartProduct,
        clear,
        
    }
    
    
    
    
    
    return (
        <CartContext.Provider value={ data } >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}