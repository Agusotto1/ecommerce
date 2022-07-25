import { useState,useEffect} from "react"
 
import "../ItemContainer/itemContainer.css"
import products from "../../utils/productsmock"
import ItemList from "../itemList/itemList"

const ItemContainer =(props) =>{
    

    
    //constante es objeto con los datos del primer producto
    /*const product1 = {
        title:"SAMSUNG",
        price:"$1000", 
        image:"s22.jpg",
        stock: 3,

    }
    const product2 = {
        title:"IPhone",
        price:"$1200", 
        image:"13promax.jpg",
        stock: 2,

    }

    const product3 = {
        title:"Motorola",
        price:"$800",
        image:"motorola.jpg",
        stock: 5,

    }
    */

    //primero definimos el nombre del estado y despues
    // definimos la funcion por la cual vamos a actualizar
    // en el useState el valor incial va a ser un array vacio
   
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


    const handleSubmit = () => {console.log("Envio de info")}
    return(
        <div className='listProduct'>
            
            <h2>{props.section}</h2>
            <ItemList dataProducts={listProduct}/>
          


           
          
      </div>
      

    )

}

export default ItemContainer