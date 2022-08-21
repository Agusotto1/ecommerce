import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.css"
import Modal from "../Modal/Modal"
import db from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"


const Cart = () => {
    const [showModal, setShowModal] =useState(false)
    const { cartProducts, totalCart } = useContext(CartContext)
    const [success, setSuccess] = useState()
   
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price

            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCart
    }) 

    const [formData, setFormData] = useState({
        name: " ",
        phone:" ",
        email:" "


    })

    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

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
                        <h1>total price $ {totalCart}</h1>
                        <button onClick={()=>setShowModal(true)}>finalizar compra</button>
                     
                        {showModal  &&
                            <Modal title="contact info" close={()=>setShowModal()}>
                               {success ?  
                               (
                                <>
                                   <h2>Su orden se genero correctamente</h2>
                                   <p>ID de compra : {success}</p>
                                </>
                                ) :
                                (<form onSubmit={submitData}>
                                    <input type="text"   name="name"  placeholder="nombre"   onChange={handleChange} value={formData.name}/>
                                    <input type="number" name="phone" placeholder="telefono" onChange={handleChange} value={formData.phone}/>
                                    <input type="email"  name="email" placeholder="email"    onChange={handleChange} value={formData.email}/>
                                    <button type="submit">enviar</button>
                                </form>
                                )
                                }
                            </Modal>
                        }
        </div>
                    
                    
                     
                
        </>
    )
}

export default Cart