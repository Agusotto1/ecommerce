import ItemProduct from "../itemProduct/ItemProduct"

const ItemList2 = ({dataProducts}) =>{
    return(
        <>
        {dataProducts.map( (product) =>{
            return <ItemProduct key={product.id} data={product} />
        })}
        </>
    )
}

export default ItemList2