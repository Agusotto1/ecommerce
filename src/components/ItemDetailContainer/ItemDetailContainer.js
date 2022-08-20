import ItemDetail from "../ItemDetail/ItemDetail.js"
import products from "../../utils/productsmock.js"
import './ItemDetailContainer.scss'
import Modal from '../Modal/Modal'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import db from "../../firebaseConfig"
import { getFirestore, doc, getDoc, Query } from "firebase/firestore"
import { async } from "@firebase/util"




const ItemDetailContainer = ({category}) =>{
    const [productData, setProductData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const {id} = useParams ();
        useEffect(()=>{
       
        const querydb = getFirestore();    
        const queryDoc = doc(db, "productos", id)
        getDoc(queryDoc)
        .then(res=>setProductData({id: res.id, ...res.data()}))
    },[id])

   
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