
import './App.css';
//import ItemProduct from "./components/ItemProduct"
import ItemContainer from "./components/ItemContainer/itemContainer";
import ItemContainer2 from "./components/ItemContainer/itemContainer2";
import NavBar from './components/navBar';



function App() {

  
  return (
    //JSX
    
    <div className="App">
      <NavBar></NavBar>
          <h1 class="display-2">Bienvenido a la tienda mas grande de Argentina</h1>
      <ItemContainer section="productos mas buscados"/>
      <ItemContainer2 section="productos mas baratos"/>    
      
    </div>
  );
}

export default App;


// style={{padding: "10 px", marginTop:"20 px"}}
// const styleApp = {padding: "10 px", marginTop:"20 px"} otra forma
// otra forma es usar un archivo por la aplicacion para eso
// tengo que poner --> import "./nombre del archivo.css"
// todo se utiliza con camelCase