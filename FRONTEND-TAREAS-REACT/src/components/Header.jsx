import { useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

const Header = () => {
  //Accede al context
  const local = useContext(LocalizationContext);
  return (
    <header>
      <h1>{local.header}</h1>
    </header>
  )
}


export default Header