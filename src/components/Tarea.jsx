import PropTypes from "prop-types";
import {FaTrashAlt} from 'react-icons/fa';

const Tarea = ({tarea, onDelete}) => {


  return (
    <li className="tarea">{tarea.titulo} 
      <FaTrashAlt onClick={() => onDelete(tarea.id)}/>
    </li>
  )
}

Tarea.propTypes = {
    tarea: PropTypes.object,
    onDelete: PropTypes.func,
}

export default Tarea