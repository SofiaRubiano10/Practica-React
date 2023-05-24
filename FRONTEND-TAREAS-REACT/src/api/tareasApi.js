//Librerias externas
import axios from "axios";


const obtenerTareasAPI =  async () => {
    try {
        const respuesta = await axios.get(import.meta.env.VITE_BACKEND_URL);
        if (respuesta.status === 200) {
          return(respuesta.data)
        }
      } catch (error) {
        console.error("Hubo un error al obtener las tareas");
        return null;
    }
}

const agregarTareaAPI = async (tarea) => {
    try {
        const respuesta = await axios.post(import.meta.env.VITE_BACKEND_URL, tarea );
        if (respuesta.status === 201) {
            return respuesta.data   
        }
    } catch (error) {
        console.error("Hubo un error al obtener las tareas");
        return null;
    }
}
//elimina la tarea del Backend
const eliminarTareaAPI = async (id) =>{
    try {
        const respuesta = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}${id}`);
        if (respuesta.status === 200) {
            return respuesta.data
        }
        return null
    } catch (error) {
        console.error("Hubo un error al eliminar la tarea");
        return null
    }
}

export {obtenerTareasAPI, agregarTareaAPI, eliminarTareaAPI};
