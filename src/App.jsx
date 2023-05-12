function App() {
 //declaración de variables
 const nombre = "Catalina";
 const edad = 21;



  return (
    <>
      <h1>La estudiante {nombre} tiene {edad}</h1>
      <h2>{edad >= 18 ? "Adulto" : "Niño"}</h2>
    </>
  )
}

export default App
