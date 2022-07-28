
import './App.css';
//import ItemProduct from "./components/ItemProduct"
import ItemContainer from "./components/ItemContainer/itemContainer";
import ItemContainer2 from "./components/ItemContainer/itemContainer2";
import ItemContainer3 from './components/ItemContainer/itemContainer3';
import NavBar from './components/navBar';



function App() {
  //aca se utiliza el metodo get, que es por defecto
  //si yo quiero agregar otro metodo ej POST 
  //fetch("https://jsonplaceholder.typicode.com/users")
  //.then((response) =>{
  //  return response.json()
    
  //})
  //.then ( (res) =>{
  //  alert("usuarios" + res )
  //}

  //)

  //fetch("https://jsonplaceholder.typicode.com/users",{
  //method:"POST",
  //body:{
  //email:"dsasdas",
  //password:"asaasa",
  //}
  //})
  //.then((response) =>{
  //  return response.json()
    
  //})
  //.then ( (res) =>{
  //  alert("usuarios" + res )
  //}

  //)

  
  
  return (
    //JSX
    
    <div className="App">
      <NavBar></NavBar>
          <h1 class="display-2">Bienvenido a la tienda mas grande de Argentina</h1>
      <ItemContainer section="productos mas buscados"/>
      <ItemContainer2 section="productos mas baratos"/>
      <ItemContainer3 section="detalle del producto seleccionado" />
    </div>
  );
}

export default App;


// style={{padding: "10 px", marginTop:"20 px"}}
// const styleApp = {padding: "10 px", marginTop:"20 px"} otra forma
// otra forma es usar un archivo por la aplicacion para eso
// tengo que poner --> import "./nombre del archivo.css"
// todo se utiliza con camelCase