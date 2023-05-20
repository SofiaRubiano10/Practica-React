import PropTypes from "prop-types";
import {FaTrashAlt} from 'react-icons/fa';

const Tarea = ({tarea, onDelete}) => {
  const funcion = () => {
    console.log("Doble Click");
  }
  
  return (
    <li className={tarea.terminada ? "terminada" : ""} onDoubleClick={funcion}>
      {tarea.titulo} 
      <FaTrashAlt className="icono" onClick={() => onDelete(tarea.id)}/>
    </li>
  )
}

Tarea.propTypes = {
    tarea: PropTypes.object,
    onDelete: PropTypes.func,
}

export default Tarea