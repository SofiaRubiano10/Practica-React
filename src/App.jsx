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
  //estado del componente: inmutable
  const [tareas, setTareas] = useState([
    {id:1, titulo: "Running", terminada: false},
    {id:2, titulo: "Programing", terminada: true},
    {id:3, titulo: "Reading", terminada: true},
    {id:4, titulo: "Swimming", terminada: false},
  ]);

  const eliminarTarea = (id) =>{
    //tareas actuales representa el estado actual 
    setTareas(tareasActuales =>{
      //filtra las tareas sin la tarea con el id recibido
      return tareasActuales.filter((tarea) => tarea.id !== id)
    });
  }

  return (
  <>
    <Header titulo="Administrador de tareas" />
    <Tareas tareas={tareas} onDelete={eliminarTarea}/>
  </>
  )
}
export default App

