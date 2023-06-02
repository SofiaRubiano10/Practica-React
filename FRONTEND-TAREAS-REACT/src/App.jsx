// importes
//react 
import { useEffect, useState } from "react";
//Componentes propios
import Header from "./components/Header"
import Tareas from "./components/Tareas"
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";
import SelectLanguage from "./components/SelectLanguage";
//Contextos
import LocalizationContext from "./context/LocalizationContext";
import local from "./context/ContextData";
//Funciones API
import { obtenerTareasAPI, agregarTareaAPI, eliminarTareaAPI } from "./api/tareasApi";
//SCSS
import "./styles/style.scss"


// componente basado en función
const App = () => {
  //estado del componente: inmutable
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);
  const [language, setLanguage] = useState(local.es);
  
  // Hook que ejecuta codigo al crear componente
  useEffect(()=>{
    const obtenerTareas = async() =>{
      // Obtiene las tareas del backend 
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

  const agregarTarea = async (tarea) => {
    //agrega la tarea e el Backend
    const nuevaTarea = await agregarTareaAPI(tarea)
    //Agrega la tarea en el state
    setTareas([...tareas, nuevaTarea])
  }

  const toggleTerminada = (id) =>{
    //TODO: ACTUALZAR LA TAREA EN EL BACKEND
    //tareas actuales representa el estado actual 
    setTareas((tareasActuales) =>{
      //recorre las tareas actuales para retornar cada tarea
      return tareasActuales.map((tarea )=> 
      //verirfica si la tarea tiene el mismo id
      tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea)
    })
  }

  const eliminarTarea = async (id) =>{
    // elimina la tarea del Backend
    const respuesta = await eliminarTareaAPI(id)
    //verifica que la eliminación de la tarea haya sido exitosa
    if (respuesta) {
      //tareas actuales representa el estado actual 
      setTareas(tareasActuales =>{
        //filtra las tareas sin la tarea con el id recibido
        return tareasActuales.filter((tarea) => tarea.id !== id)
      });
    }
  }

  const handlerLanguageChange = (language) => {
    if (language === 'es') {
      setLanguage(local.es)
    }if (language === 'en'){
      setLanguage(local.en)
    }
  }
  return (
    <>
    <LocalizationContext.Provider value={language}>
      <SelectLanguage onLanguagueChange={handlerLanguageChange}/>
      <Header/>
      <AgregarTareaForm onAddTask={agregarTarea} />
      {error && <Error mensaje="Hubo un error en conexion con Backend"/>}
      <Tareas tareas={tareas} onDelete={eliminarTarea} onToggle={toggleTerminada}/>
    </LocalizationContext.Provider>
  </>
  )
}
export default App

