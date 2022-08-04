import ItemDetail from "../ItemDetail/ItemDetail.js"
import products from "../../utils/productsmock.js"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () =>{
    const [productData, setProductData] = useState({})
    
    const {id, category} = useParams( )
    
    useEffect( () =>{
        filtrarPorId()
    }

    )

    

    
    const filtrarPorId =() =>{

        products.some( (product) =>{
            if(product.id == id){
                setProductData(product)
            }
    }
        )
    }

    useEffect( () =>{
        filtrarPorCategory()
    }

    )

    const filtrarPorCategory =() =>{

        products.some( (product) =>{
            if(product.category == category){
                setProductData(product)
            }
    }
        )
    }

    

    

    return (
        <div>
            
            <ItemDetail data={productData}/>

        </div>

    )
}

export default ItemDetailContainer