import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import {Link} from "react-router-dom"
const ItemDetail = ({ data }) => {

    
    
    const [quantitySelected, setQuantitySelected] = useState(0)
    





    return (
        <>
            <div className="item-detail1">
                <img src={`/assets/${data.image}`} alt="" className="producto" />
                <p>{data.title}</p>
                <span>price: {data.price}</span>
                <p>stock: {data.stock}</p>
                <p>category: {data.category}</p>
               
                
            </div>

            {
               quantitySelected >0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> 
               : <ItemCount setQuantitySelected={setQuantitySelected} cantProduct={data.stock} />
            }


        </>
    )

}

export default ItemDetail