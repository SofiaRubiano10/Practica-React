import { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types";
//acceso al context
import LocalizationContext from "../context/LocalizationContext";

const AgregarTareaForm = ({onAddTask}) => {
    //estado del formulario
    const [titulo,setTitulo] = useState("");
    const [longitud, setLongitud] = useState (0);

    //Accede al context
    const local = useContext(LocalizationContext);

    //Actualiza cantidad ed caracteres digitados 
    useEffect(() => {
        setLongitud(titulo.length)
    }, [titulo])

    
    const limpiarFormulario = (event) =>{
        //previene el envio del formulario
        event.preventDefault();
        //modifica el estado del componente
        setTitulo("")
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!titulo){
            alert('Debe digitar el titulo')
            return
        }


        //crea el nuevo objeto
        const nuevaTarea = {
            titulo,
            terminada: false,
            
        }
        //envia la nueva tarea al componente padre
        onAddTask(nuevaTarea);
        //modifica el estado del componente
        setTitulo("")
    }

    return (
    <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
            <label htmlFor="titulo">{local.title}:</label>
            <input type="text" id="titulo" value={titulo} onChange={event => setTitulo(event.target.value)}/>
            <p>{local.characters}: {longitud}</p>
        </fieldset>
        <fieldset>
            <input type="submit" value={local.add}/>
            <button onClick={limpiarFormulario}>{local.reset}</button>
        </fieldset>
    </form>
  )
}

AgregarTareaForm.propTypes = {
    onAddTask: PropTypes.func,
}
export default AgregarTareaForm