import { useState,useEffect} from "react"
import products3 from "../../utils/productsmock3.js"
import ItemList3 from "../itemList/itemList3.js"

const ItemContainer3 =(props) =>{
const [listProduct, setListProduct] = useState([])

const getProducts = new Promise((resolve, reject) => {
    setTimeout( () => {            
        
        resolve(products3)
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
        <ItemList3 dataProducts={listProduct}/>
      
  </div>
  

)

}

export default ItemContainer3