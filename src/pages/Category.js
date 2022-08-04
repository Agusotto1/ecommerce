import ItemContainer from "../components/ItemContainer/itemContainer"
import {Link} from "react-router-dom"
import "./Category.css";
const Category = ()=>{
   
   return(
            <div>
                    <h1 className="display-3">Elija una de las siguientes categorias</h1>
                    <section className='main-container'>
                        <ul id="CAT">
                            <li className="CAT1"><Link to="/category/IPHONE">IPHONE</Link></li>
                            <li className="CAT1"><Link to="/category/SAMSUNG">SAMSUNG</Link></li>
                            <li className="CAT1"><Link to="/category/MOTOROLA">MOTOROLA</Link></li>
                            <li className="CAT1"><Link to="/category/SONY">SONY</Link></li>
                            <li className="CAT1"><Link to="/category/NOKIA">NOKIA</Link></li>
                            <li className="CAT1"><Link to="/category/BLACKBERRY">BLACKBERRY</Link></li>
                        </ul>
                    </section>
                </div>
   )

}

export default Category