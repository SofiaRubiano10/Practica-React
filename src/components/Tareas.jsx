const Tareas = () => {
  
  const listaTareas = [
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ];
    return (
    <>
        {listaTareas.length > 0 ? (<h2>Hay {listaTareas.length} tareas</h2>) : (<h2>No hay tareas</h2>)}
        <ul>
            {listaTareas.map(tarea => (
            <li key={tarea.id}>{tarea.titulo}</li>
            ))}
        </ul>
    </>

  );
}

export default Tareas

//cuando se utilice map si o si toca utilizar una key 