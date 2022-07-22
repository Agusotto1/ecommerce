import ItemProduct from "../itemProduct/ItemProduct"
import "../ItemContainer/itemContainer.css"

const ItemContainer =(props) =>{
    
    //constante es objeto con los datos del primer producto
    const product1 = {
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
    
    const handleSubmit = () => {console.log("Envio de info")}
    return(
        <div className='listProduct'>
            
            <h2>{props.section}</h2>
          <ItemProduct data={product1} action={handleSubmit}/>
          <ItemProduct data={product2} action={handleSubmit}/>
          <ItemProduct data={product3} action={handleSubmit}/>
          
          
      </div>
      

    )

}

export default ItemContainer