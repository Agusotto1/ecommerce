import { useState,useEffect} from "react"
import products from "../../utils/productsmock.js"
import ItemList from "../itemList/itemList.js"

const ItemContainer =(props) =>{
const [listProduct, setListProduct] = useState([])

const getProducts = new Promise((resolve, reject) => {
    setTimeout( () => {            
        
        resolve(products)
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