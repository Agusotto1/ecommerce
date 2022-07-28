import Detalle from "../itemProduct/detalle"
const ItemList3 = ({dataProducts}) =>{
    return(
        <>
        {dataProducts.map( (producto) =>{
            return <Detalle data={producto} />
        })}
        </>
    )
}

export default ItemList3