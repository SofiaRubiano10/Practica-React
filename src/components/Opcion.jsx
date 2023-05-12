/*eslint-disable react/prop-types*/

const Opcion = ({texto , link}) => {
    return <a href={link}>{texto}</a>;
    
}

//algo por default
Opcion.defaultProps = {
    texto:"No hay nada",
    link:"/",
}

export default Opcion;