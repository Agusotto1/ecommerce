import ItemContainer from "../components/ItemContainer/itemContainer";

const Products = () => {
    return(
        <div>
            <h1 class="display-3">Elija un producto</h1>
            <section className='main-container'>
                <ItemContainer/>
            </section>
        </div>
    )
}

export default Products