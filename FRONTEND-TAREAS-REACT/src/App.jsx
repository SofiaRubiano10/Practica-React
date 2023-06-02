// importes
//react 
import { useEffect, useState, useReducer } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";
import SelectLanguage from "./components/SelectLanguage";

//Reducers
import tareasReducer from "./reducers/TareasReducer";

//Contextos
import LocalizationContext from "./context/LocalizationContext";
import local from "./context/ContextData";
//Funciones API
import { obtenerTareasAPI, agregarTareaAPI, eliminarTareaAPI } from "./api/tareasApi";
//SCSS
import "./styles/style.scss"


// componente basado en función
const App = () => {
  const [tareas, dispatch] = useReducer(tareasReducer, [])
  const [error, setError] = useState(false);
  const [language, setLanguage] = useState(local.es);
  
  // Hook que ejecuta codigo al crear componente
  useEffect(()=>{
    const obtenerTareas = async() =>{
      // Obtiene las tareas del backend 
      const tareas = await obtenerTareasAPI();
      if (tareas) {
        // modifica el state
        dispatch({type: "CARGAR", tareas})
      }else {
        // modifica el state
        dispatch({type: "CARGAR" });
        setError(true)
      }

    }
    //obtiene las tareas del backend
    obtenerTareas();
  }, []);

  const agregarTarea = async (tarea) => {
    //agrega la tarea e el Backend
    const nuevaTarea = await agregarTareaAPI(tarea)
    //Agrega la tarea en el state
    dispatch({type: "AGREGAR", nuevaTarea})
  }

  const toggleTerminada = (id) =>{
    //TODO: ACTUALZAR LA TAREA EN EL BACKEND
    //Modifica el state
    dispatch({type: "MODIFICAR",id})
  }

  const eliminarTarea = async (id) =>{
    // elimina la tarea del Backend
    const respuesta = await eliminarTareaAPI(id)
    //verifica que la eliminación de la tarea haya sido exitosa
    if (respuesta) {
      //Modifica el state
      dispatch({type: "ELIMINAR", id})
    }
  }

  return (
    <>
    <LocalizationContext.Provider value={{language, setLanguage}}>
      <SelectLanguage/>
      <Header/>
      <AgregarTareaForm onAddTask={agregarTarea} />
      {error && <Error mensaje="Hubo un error en conexion con Backend"/>}
      <Tareas tareas={tareas} onDelete={eliminarTarea} onToggle={toggleTerminada}/>
    </LocalizationContext.Provider>
  </>
  )
}
export default App

