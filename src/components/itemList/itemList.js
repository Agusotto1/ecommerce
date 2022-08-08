
import ItemProduct from "../itemProduct/ItemProduct"





const ItemList = ({dataProducts}) =>{
    return(
        <>
        
        {dataProducts.map( (product) =>{

            return( 
                <ItemProduct key={product.id} data={product} />
                
            )
        })}
        </>
    )
}

export default ItemList