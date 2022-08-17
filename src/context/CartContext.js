
import { createContext, useState } from "react";

const CartContext = createContext()

// con el cartProvider voy a definir todos los valores que voy a pasarle al resto de los componentes 
const CartProvider = ({children}) =>{
    
        
    const [cartProducts, setCartProduct] =useState([])
    const [totalCart, setTotalCart] = useState(0)
    let [totalProducts, setTotalProducts] = useState(0)
    
    const addProductToCart = (product, ItemCount) => {         
            
        const isProductInCart = cartProducts.find(
            (productInCart) => productInCart.id === product.id
        );

        if(isProductInCart) {
            if(isProductInCart.countQuantity + ItemCount > isProductInCart.cantProduct)

            return false;

            isProductInCart.countQuantity += ItemCount
            setTotalProducts(isProductInCart.countQuantity + totalProducts)
        } else {
            product.countQuantity = ItemCount;

            setCartProduct ([...cartProducts, product]);
            setTotalProducts(ItemCount + totalProducts)
        }

        setTotalCart(
            totalCart + product.price * product.countQuantity
        )
        

         
    }           

    

   
    const clear = () => {
        setCartProduct([])
        
        setTotalCart(totalCart-totalCart)
    }

    const clearProduct = ( id ) => {
        const prod = cartProducts.find((product) => product.id === id)
        setTotalCart(
            totalCart - prod.price * prod.countQuantity
        )

        setTotalProducts(totalProducts - prod.countQuantity)

        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProduct(newCart);
    }

    


    const data= {
        addProductToCart,
        cartProducts,
        setCartProduct,
        clear,
        clearProduct,
        totalCart,
        
        
        
        
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