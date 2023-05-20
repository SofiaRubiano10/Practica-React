import PropTypes from "prop-types";
import Tarea from "./Tarea";
const Tareas = ({tareas, onDelete}) => {

  const funcion = (id) => {
    console.log(`OnToggle en Tareas ${id}`);
  }
  return (
    <>
      {!tareas.length && "No hay tareas"}
      <ul className="tareas">
          {tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToggle={funcion}/>
          ))}
      </ul>
    </>

  );
}

//Definición de propiedades
Tareas.propTypes = {
  tareas: PropTypes.array,
  onDelete: PropTypes.func,
}

export default Tareas

//cuando se utilice map si o si toca utilizar una key 