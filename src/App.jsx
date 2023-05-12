// importes
import Header from "./components/Header"
import Opcion from "./components/Opcion"
// componente basado en función
function App() {
  return (
  <>
    <Header />
    <Opcion texto="Home" link="/"/>
    <Opcion texto="Products" link="/products"/>
    <Opcion texto="Services" link="/services"/>
    <Opcion />
  </>
  )
}
export default App

