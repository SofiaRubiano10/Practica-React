import { useContext } from "react";

//Acceso al contexto
import LocalizationContext from "../context/LocalizationContext";
import local from "../context/ContextData";

const SelectLanguage = () => {
    // Obtiene la referencia al contexto
    const {setLanguage} = useContext(LocalizationContext);

    const handleChangeLanguage = (lang) =>{
        setLanguage(local[lang])
    }
    return (
    <div className="languages">
        <span onClick={() => handleChangeLanguage("es")}>🟥</span>
        <span onClick={() => handleChangeLanguage("en")}>🟦</span>
        <span onClick={() => handleChangeLanguage("de")}>⬛</span>
    </div>
  )
}

export default SelectLanguage