
import { createContext, useState } from "react";

const CartContext = createContext()

// con el cartProvider voy a definir todos los valores que voy a pasarle al resto de los componentes 
const CartProvider = ({children}) =>{
    
        
    const [cartProducts, setCartProduct] =useState([])

    
    const addProductToCart = (product, ItemCount) => {         
            
        const isProductInCart = cartProducts.find(
            (productInCart) => productInCart.id === product.id
        );

        if(isProductInCart) {
            if(isProductInCart.countQuantity + ItemCount > isProductInCart.cantProduct)

            return false;

            isProductInCart.countQuantity += ItemCount
        } else {
            product.countQuantity = ItemCount;

            setCartProduct ([...cartProducts, product]);
        }

         
    }           

    

   
    const clear = () => {
        setCartProduct([])
    }

    const clearProduct = ( id ) => {
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProduct(newCart);
    
    }
    const data= {
        addProductToCart,
        cartProducts,
        setCartProduct,
        clear,
        clearProduct,
        
        
        
    }
    
    
    
    
    // en el value si paso objetos va doble llave 
    return (
        <CartContext.Provider value={ data } >
            {children}
        </CartContext.Provider>
    )
    }

export default CartProvider

export {CartContext}