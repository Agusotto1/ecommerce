import { useState,useEffect} from "react"
import products from "../../utils/productsmock.js"
import ItemList from "../itemList/itemList.js"
import {useParams} from "react-router-dom"
import { getFirestore,collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"



const ItemContainer =(props) =>{
    const [listProduct, setListProducts] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        const querydb = getFirestore
        const queryCollection = collection(db,"productos")
        if (category){
            const queryFilter= query(queryCollection, where("category" , "==", category))
            getDocs(queryFilter)
            .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
        }else{
        getDocs(queryCollection)
        .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
        }
    },[category])// eslint-disable-line react-hooks/exhaustive-deps
       
        
       
       
        /* getProducts
            .then( (res) => { 
            
            setListProduct(res)
            })
            .catch( (error) => { 
            console.log("error de conexion")
             })
            .finally( () => { 
        
            }) */
    

    /*useEffect(() =>{
        getProducts1()
        .then((res) =>{
            setListProduct(res)
        })
    }, [])
    */
return(
    <div className='listProduct'>
        <h2>{props.section}</h2>
        <ItemList dataProducts={listProduct} >
            
        </ItemList>
        
      
  </div>
  

)

}

export default ItemContainer