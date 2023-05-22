// importes
//react 
import { useEffect, useState } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";
import { obtenerTareasAPI, agregarTareaAPI } from "./api/tareasApi";
//SCSS
import "./styles/style.scss"

// componente basado en función
function App() {
  //estado del componente: inmutable
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);
  
  // Hook que ejecuta codigo al crear componente
  useEffect(()=>{
    const obtenerTareas = async() =>{
      const tareas = await obtenerTareasAPI();
      if (tareas) {
        setTareas(tareas)
      }else {
        setTareas([]);
        setError(true)
      }

    }
    //obtiene las tareas del backend
    obtenerTareas();
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
  const agregarTarea = async (tarea) => {
    const nuevaTarea = await agregarTareaAPI(tarea)
    setTareas([...tareas, nuevaTarea])
  }
  return (
  <>
    <Header titulo="Administrador de tareas" />
    <AgregarTareaForm onAddTask={agregarTarea} />
    {error && <Error mensaje="Hubo un error"/>}
    <Tareas tareas={tareas} onDelete={eliminarTarea} onToggle={toggleTerminada}/>
  </>
  )
}
export default App

