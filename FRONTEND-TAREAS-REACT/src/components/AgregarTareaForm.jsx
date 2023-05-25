import { useEffect, useState } from "react"
import PropTypes from "prop-types";


const AgregarTareaForm = ({onAddTask}) => {
    //estado del formulario
    const [titulo,setTitulo] = useState("");
    const [longitud, setLongitud] = useState (0);

    useEffect(() => {
        console.log("Acaba de ser reenderizado");
    })
    useEffect(() => {
        console.log("Solo se ejecuta al montar el componente");
    }, [])
    useEffect(() => {
        console.log("Se ejecuta cuando cambia la variable 'Titulo'");
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
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" value={titulo} onChange={event => setTitulo(event.target.value)}/>
            <p>Caracteres digitados: {longitud}</p>
        </fieldset>
        <fieldset>
            <input type="submit" value="Agregar" />
            <button onClick={limpiarFormulario}>Reset</button>
        </fieldset>
    </form>
  )
}

AgregarTareaForm.propTypes = {
    onAddTask: PropTypes.func,
}
export default AgregarTareaForm