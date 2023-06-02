import { useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

const Header = () => {
  //Accede al context
  const {language} = useContext(LocalizationContext);
  return (
    <header>
      <h1>{language.header}</h1>
    </header>
  )
}


export default Header