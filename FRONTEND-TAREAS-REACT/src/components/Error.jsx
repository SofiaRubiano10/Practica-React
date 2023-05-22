import PropTypes from "prop-types"

const Error = ({mensaje}) => {
  return (
    <h3 className="error" >{mensaje}</h3>
  )
}

Error.propTypes = {
    mensaje: PropTypes.string,
}

export default Error