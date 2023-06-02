import { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types";

//Importar custom Hook
import useInput from "../hooks/useinput";
//acceso al context
import LocalizationContext from "../context/LocalizationContext";

const AgregarTareaForm = ({onAddTask}) => {
    //Estado del formulaio con custum hook
    const [titulo, bindTitulo, resetTitulo] = useInput("");
    const [descripcion, bindDescripcion, resetDescripcion] = useInput("");
    //Estado del formulario con useState
    const [longitud, setLongitud] = useState (0);

    //Accede al context
    const {language} = useContext(LocalizationContext);

    //Actualiza cantidad ed caracteres digitados 
    useEffect(() => {
        setLongitud(titulo.length)
    }, [titulo])

    
    const limpiarFormulario = (event) =>{
        //previene el envio del formulario
        event.preventDefault();
        //modifica el estado del componente
        resetTitulo("");
        resetDescripcion("");
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
            descripcion,
            terminada: false,
            
        }
        //envia la nueva tarea al componente padre
        onAddTask(nuevaTarea);
        //modifica el estado del componente
        resetTitulo("");
        resetDescripcion("");
    }

    return (
    <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
            <label htmlFor="titulo">{language.title}:</label>
            <input 
                type="text" 
                id="titulo" 
                {...bindTitulo}  
            />
            <p>{language.characters}: {longitud}</p>
        </fieldset>
        <fieldset>
            <label htmlFor="descripcion">{language.descripcion}:</label>
            <input 
                type="text" 
                id="descripcion" 
                {...bindDescripcion}
            />
        </fieldset>
        <fieldset>
            <input type="submit" value={language.add}/>
            <button onClick={limpiarFormulario}>{language.reset}</button>
        </fieldset>
    </form>
  )
}

AgregarTareaForm.propTypes = {
    onAddTask: PropTypes.func,
}
export default AgregarTareaForm