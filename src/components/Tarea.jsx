import PropTypes from "prop-types";
import {FaTrashAlt} from 'react-icons/fa';

const Tarea = ({tarea}) => {
  return (
    <li className="tarea">{tarea.titulo} <FaTrashAlt className="trashRoja"/> </li>
  )
}

Tarea.propTypes = {
    tarea: PropTypes.object,
}

export default Tarea