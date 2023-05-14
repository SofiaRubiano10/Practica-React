const Tareas = () => {
  
  const listaTareas = [
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ];

  // objeto JSON para representar el style
  const estiloSpan = {
    color: "lime",
    fontStyle: "italic",
  };



    return (
    <>
    {/* comentario */}
      <h2 style={{color: "red", backgroundColor: "pink"}}>Lista de tareas</h2>
      <span style={estiloSpan} >List of task</span>
      {listaTareas.length > 0 ? (<h2>Hay {listaTareas.length} tareas</h2>) : (<h2>No hay tareas</h2>)}
      <ul>
          {listaTareas.map(tarea => (
          <li className="tarea" key={tarea.id}>{tarea.titulo}</li>
          ))}
      </ul>
    </>

  );
}

export default Tareas

//cuando se utilice map si o si toca utilizar una key 