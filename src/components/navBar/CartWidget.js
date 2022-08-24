import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import "./navBar/CartWidget.css"


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, clearProduct, totalCart } = useContext(CartContext)
    
    
    

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget'   >
            <p>{cartProducts.length}</p>
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                                
                            </div>
                            <div className='cart-product__details'>
                                <p className='espacio'> $ {product.price}</p>
                            </div>
                            <div>
                                <p className='espacio'> cantidad seleccionada: {product.countQuantity}</p>
                            </div>
                            <div className="cart-product__details">
                                    <p className='espacio'>Total:$ { product.price * product.countQuantity }</p>
                                    
                            </div>
                            <div className="cart-product__action">
                                    <button className='btn-small waves-effect waves-light' onClick={()=>clearProduct(product.id) }>Eliminar producto</button>
                                    </div>

                           
                        </div>
                        
                    )
                })}
                
                            
                <h1>total price $ {totalCart}</h1>
                <button className='borrarTodo' onClick={() => clear()}>Borrar todo</button>
               
            </Menu>
        </div>
    )
}

export default CartWidget