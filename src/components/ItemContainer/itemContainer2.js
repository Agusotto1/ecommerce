   
    import { useState,useEffect} from "react"
    import products2 from "../../utils/productsmock2.js"
    import ItemList2 from "../itemList/itemList2.js"

const ItemContainer2 =(props) =>{
    const [listProduct, setListProduct] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout( () => {            
            
            resolve(products2)
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
            <ItemList2 dataProducts={listProduct}/>
          
      </div>
      

    )

}

export default ItemContainer2