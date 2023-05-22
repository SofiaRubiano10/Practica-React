//Librerias externas
import axios from "axios";

const obtenerTareasAPI =  async () => {
    try {
        const respuesta = await axios.get(" http://localhost:3000/tareas/");
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
        const respuesta = await axios.post("http://localhost:3000/tareas/", tarea );
        if (respuesta.status === 201) {
            return respuesta.data   
        }
    } catch (error) {
        console.error("Hubo un error al obtener las tareas");
        return null;
    }
}
export {obtenerTareasAPI, agregarTareaAPI};