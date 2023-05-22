// importes
//react 
import { useEffect, useState } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AgregarTareaForm from "./components/AgregarTareaForm";
//SCSS
import "./styles/style.scss"

// componente basado en función
function App() {
  //estado del componente: inmutable
  const [tareas, setTareas] = useState([]);
  
  //Ejecutar codigo al crear componente
  useEffect(()=>{
    console.log("componente creado!");
  }, []);

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
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  }
  return (
  <>
    <Header titulo="Administrador de tareas" />
    <AgregarTareaForm onAddTask={agregarTarea} />
    <Tareas tareas={tareas} onDelete={eliminarTarea} onToggle={toggleTerminada}/>
  </>
  )
}
export default App

