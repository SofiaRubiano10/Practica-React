import { useState } from "react"

const AgregarTareaForm = () => {
    //estado del formulario
    const [titulo,setTitulo] = useState("");
    
    const limpiarFormulario = (event) =>{
        //previene el envio del formulario
        event.preventDefault();
        //modifica el estado del componente
        setTitulo("")
    }
    return (
    <form>
        <fieldset>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" value={titulo} onChange={event => setTitulo(event.target.value)}/>
        </fieldset>
        <fieldset>
            <input type="submit" value="Agregar" />
            <button onClick={limpiarFormulario}>Reset</button>
        </fieldset>
    </form>
  )
}

export default AgregarTareaForm