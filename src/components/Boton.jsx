import PropTypes from "prop-types";

function Boton({cuandoClick}) {

    return (
    <button onClick={cuandoClick}>Click me</button>
  )
}

Boton.propTypes = {
    cuandoClick: PropTypes.func,
}
export default Boton