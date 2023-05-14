// importes
import Boton from "./components/Boton"
import Header from "./components/Header"
import Tareas from "./components/Tareas"
// componente basado en función
function App() {
  return (
  <>
    <Header />
    <Tareas />
    <Boton texto="boton1" color="yellow" />
    <Boton texto="boton2" color="blue" />
    <Boton texto="boton2" color="red" />
  </>
  )
}
export default App

