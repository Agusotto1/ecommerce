import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"

const Cart = () => {
    const { cartProducts, totalPrice } = useContext(CartContext)


    return(
        <>
        <div>Carrito de checkout</div>
        <div>
        {cartProducts.map((product) => {
                    return(
                        <div className='containterFinal' key={product.id}>
                            <div>
                                <img src={`/assets/${product.image}`} alt="" className="producto1" />
                                <p>{product.title}</p>
                                <p className='espacio'> $ {product.price}</p>
                                <p className='espacio'> cantidad seleccionada: {product.countQuantity}</p>
                                <p className='espacio'>Total:$ { product.price * product.countQuantity }</p>

                            </div>

                                                       
                        </div>
                        
                    )
                })}
        </div>
        <div className="todoTotal">          
                        <h1>total price $ {totalPrice}</h1>
                        <button id="finalizar-compra">finalizar compra</button>
                </div>
        </>
    )
}

export default Cart