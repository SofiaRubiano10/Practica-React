import PropTypes from "prop-types";
import Tarea from "./Tarea";
const Tareas = ({tareas}) => {

  const funcion = (id) =>{
    console.log(`Se quiere borrar la tarea ${id}`);
  }

  return (
    <>

      <ul className="tareas">
          {tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} onDelete={funcion}/>
          ))}
      </ul>
    </>

  );
}

//Definición de propiedades
Tareas.propTypes = {
  tareas: PropTypes.array,
}

export default Tareas

//cuando se utilice map si o si toca utilizar una key 