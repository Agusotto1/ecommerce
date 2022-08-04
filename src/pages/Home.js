import ItemContainer from "../components/ItemContainer/itemContainer"
import ItemContainer2 from "../components/ItemContainer/itemContainer2"
import ItemContainer3 from "../components/ItemContainer/itemContainer3"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        
        
        <div>
            <h1 class="display-2">Bienvenido a la tienda mas grande de Argentina</h1>
            <ItemContainer section="productos mas buscados" />
            

        </div>
        </>
    )
}

export default Home 