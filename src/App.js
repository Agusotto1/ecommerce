
import './App.css';
//import ItemProduct from "./components/ItemProduct"

import NavBar from './components/navBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact.js"
import Products from "./pages/Products.js"
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Category from "./pages/Category.js"
import ItemContainer from './components/ItemContainer/itemContainer';
import CartProvider from './context/CartContext';



function App() {
  

  
  
  return (
    //JSX
   <CartProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Products/:id' element={<Detail/>} />
          <Route path="category/:category" element={<ItemContainer/>}/>
          <Route path="category/" element={<Category/>}/>
          <Route path="/Contact" element={< Contact/>} />
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>error 404 pagina no encontrada</h1>} />
        </Routes>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


// style={{padding: "10 px", marginTop:"20 px"}}
// const styleApp = {padding: "10 px", marginTop:"20 px"} otra forma
// otra forma es usar un archivo por la aplicacion para eso
// tengo que poner --> import "./nombre del archivo.css"
// todo se utiliza con camelCase