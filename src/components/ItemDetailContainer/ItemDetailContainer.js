import ItemDetail from "../ItemDetail/ItemDetail.js"
import products from "../../utils/productsmock.js"
import './ItemDetailContainer.scss'
import Modal from '../Modal/Modal'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const ItemDetailContainer = () =>{
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)
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
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
            
            <ItemDetail data={productData} setShowModal={setShowModal}/>
            {showModal=== true && (
                <Modal title="Image of the selected product" close={setShowModal} >
                    <img src={`/assets/${productData.image}`} />
                </Modal>

            )}
            
            

        </div>

    )
}

export default ItemDetailContainer