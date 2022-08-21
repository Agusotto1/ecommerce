

import "../itemProduct/itemProduct.css"
import { Link } from 'react-router-dom';


//le pasamos el valor asignado en el itemContainer
const ItemProduct =({data, action}) =>{
    

    const{title, image, price, stock, id} = data;
  




   
    return(
        
        <div className="item-product">
            
            <Link  to={`/products/${id}`}>        
                    <img src={`/assets/${image}`} alt="" className="producto" /> 
                    <p>{title}</p>
                    <p>price: ${price}</p>
                    <p>stock: {stock}</p>
                    
                    
            </Link>
                    
        </div>


    )


}

export default ItemProduct