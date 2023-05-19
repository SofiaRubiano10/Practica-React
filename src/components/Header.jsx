import PropTypes from "prop-types";
import Boton from "./Boton";

const Header = ({titulo}) => {
  
  const procesarClick = () =>{
    console.log("Click en el componente padre");
  }
  
  return (
    <header>
      <h1>{titulo}</h1>
      <Boton cuandoClick={procesarClick}/>
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