import PropTypes from "prop-types";
import Boton from "./Boton";

const Header = ({titulo}) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <Boton/>
    </header>
  )
}

Header.defaultProps = {
  titulo: "Task Manager",
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
}

export default Header