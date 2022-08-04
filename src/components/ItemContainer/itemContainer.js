import { useState,useEffect} from "react"
import products from "../../utils/productsmock.js"
import ItemList from "../itemList/itemList.js"
import {useParams} from "react-router-dom"



const ItemContainer =(props) =>{

    const [listProduct, setListProduct] = useState([])
    const { category } = useParams()
    const filterCategory = products.filter((products) => products.category === category)



    const getProducts = new Promise((resolve, reject) => {
    setTimeout( () => {            
        if (category) {
            resolve(filterCategory)
        }else{
            resolve(products)
        }
        
    }, 2000)   
    })

    useEffect(() => {
        getProducts
            .then( (res) => { 
            
            setListProduct(res)
            })
            .catch( (error) => { 
            console.log("error de conexion")
             })
            .finally( () => { 
        
            })
    }, [])

return(
    <div className='listProduct'>
        <h2>{props.section}</h2>
        <ItemList dataProducts={listProduct} >
            
        </ItemList>
        
      
  </div>
  

)

}

export default ItemContainer