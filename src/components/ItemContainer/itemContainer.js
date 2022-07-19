import ItemProduct from "../itemProduct/ItemProduct"
import "../ItemContainer/itemContainer.css"

const ItemContainer =(props) =>{
    return(
        <div className='listProduct'>
            
            <h2>{props.section}</h2>
          <ItemProduct title="SAMSUNG" price="$1000" img="/assets/s22.jpg"/>
          <ItemProduct title="IPhone"  price="$1200"img="/assets/13promax.jpg"/>
          <ItemProduct title="Motorola"price="$800"img="/assets/motorola.jpg"/>
          
      </div>
      

    )

}

export default ItemContainer