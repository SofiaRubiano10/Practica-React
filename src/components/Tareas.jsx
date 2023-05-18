import PropTypes from "prop-types";
const Tareas = ({tareas}) => {
  //estado del componente => datos del componente


  return (
    <>
      <ul>
          {tareas.map(tarea => (
          <li className="tarea" key={tarea.id}>{tarea.titulo}</li>
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