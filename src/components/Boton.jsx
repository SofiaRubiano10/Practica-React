/*eslint-disable react/prop-types*/

// const Boton = (props) => {
//   return <button>{props.texto}</button>
// }

// export default Boton
const Boton = ({texto, color}) => {
  const estilo = {
    backgroundColor:color,
  }
  return <button style={estilo} >{texto}</button>
}

export default Boton