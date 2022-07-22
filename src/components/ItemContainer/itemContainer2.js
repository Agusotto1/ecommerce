    import ItemProduct from "../itemProduct/ItemProduct"


const ItemContainer2 =(props) =>{
    const product1 = {
        title:"alcate",
        price:"$200", 
        image:"alcatel.jpg",
        stock:10,

    }
    const product2 = {
        title:"blackberry",
        price:"$1200", 
        image:"blackberry.png",
        stock:8,

    }

    const product3 = {
        title:"Nokia",
        price:"$50",
        image:"nokia.png",
        stock:5,

    }

    return(
        <div className='listProduct'>
            <h2>{props.section}</h2>
            
          <ItemProduct data={product1}/>
          <ItemProduct data={product2}/>
          <ItemProduct data={product3}/>
      </div>
      

    )

}

export default ItemContainer2