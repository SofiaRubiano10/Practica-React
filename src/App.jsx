// importes
//react 
import { useState } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AgregarTareaForm from "./components/AgregarTareaForm";
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
  const toggleTerminada = (id) =>{
    //tareas actuales representa el estado actual 
    setTareas((tareasActuales) =>{
      //recorre las tareas actuales para retornar cada tarea
      return tareasActuales.map((tarea )=> 
      //verirfica si la tarea tiene el mismo id
      tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea)
    })
  }
  return (
  <>
    <Header titulo="Administrador de tareas" />
    <AgregarTareaForm />
    <Tareas tareas={tareas} onDelete={eliminarTarea} onToggle={toggleTerminada}/>
  </>
  )
}
export default App

