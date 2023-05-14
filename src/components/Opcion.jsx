/*eslint-disable react/prop-types*/
import '../css/Opcion.css'

const Opcion = ({texto , link}) => {
    return <a className="opcion" href={link}>{texto}</a>;
    
}

//algo por default
Opcion.defaultProps = {
    texto:"No hay nada",
    link:"/",
}

export default Opcion;