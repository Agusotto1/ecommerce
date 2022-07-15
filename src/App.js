
import './App.css';
import NavBar from './components/navBar';

function App() {

  let nombre = "agustin ottonello"
  const handleClick = () => console.log("presione el boton!")
  return (
    //JSX
    
    <div className="App">
      <NavBar></NavBar>
      <h1>Bienvenido a la tienda mas grande de Argentina</h1>
      <button onClick={handleClick}>un boton</button>
      
    </div>
  );
}

export default App;


// style={{padding: "10 px", marginTop:"20 px"}}
// const styleApp = {padding: "10 px", marginTop:"20 px"} otra forma
// otra forma es usar un archivo por la aplicacion para eso
// tengo que poner --> import "./nombre del archivo.css"
// todo se utiliza con camelCase