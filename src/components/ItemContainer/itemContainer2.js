    import ItemProduct from "../itemProduct/ItemProduct"


const ItemContainer2 =(props) =>{
    return(
        <div className='listProduct'>
            <h2>{props.section}</h2>
          <ItemProduct title="Alcatel" price="$200" img="/assets/alcatel.jpg"/>
          <ItemProduct title="Blackberry"  price="$500"img="/assets/blackberry.png"/>
          <ItemProduct title="Nokia"price="$50"img="/assets/nokia.png"/>
      </div>
      

    )

}

export default ItemContainer2