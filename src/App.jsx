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
  const [tareas, setTareas] = useState([
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ]);
  return (
  <>
    <Header titulo="Administrador de tareas" />
    <Tareas tareas={tareas} />
  </>
  )
}
export default App

