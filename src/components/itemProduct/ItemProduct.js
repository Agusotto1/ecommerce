import "../itemProduct/itemProduct.css"

const ItemProduct =(props) =>{
    return(
        <div className="item-product">
            
            <img src={props.img} alt="" className="producto" /> 
            <p>{props.title}</p>
            <span>{props.price}</span>
            <button>Comprar</button>



        </div>



    )


}

export default ItemProduct