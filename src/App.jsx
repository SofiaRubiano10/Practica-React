// importes
//react 
import { useState } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
//CSS
import "./styles/style.scss"
// componente basado en función
function App() {
  //estado del componente
  const [tareas] = useState([
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ]);

  const funcion = (id) =>{
    console.log(`Se va a eliminar la tarea ${id}`);
  }

  return (
  <>
    <Header titulo="Administrador de tareas" />
    <Tareas tareas={tareas} onDelete={funcion}/>
  </>
  )
}
export default App

