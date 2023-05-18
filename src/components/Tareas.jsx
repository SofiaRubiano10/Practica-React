import PropTypes from "prop-types";
import Tarea from "./Tarea";
const Tareas = ({tareas}) => {
  //estado del componente => datos del componente


  return (
    <>
      <ul>
          {tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} />
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