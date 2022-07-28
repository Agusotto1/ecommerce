
import "../itemProduct/itemProduct.css"
//le pasamos el valor asignado en el itemContainer
const detalle =({data}) =>{
    


    const{title, image, price, detalle} = data;
    

    return(
        <div className="detalle">
            
            <img src={`/assets/${image}`} alt="" className="producto" /> 
            <p>{title}</p>
            <span>{price}</span>
            <p>{detalle}</p>


        </div>



    )


}

export default detalle