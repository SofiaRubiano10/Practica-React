const Tareas = () => {
  
  const listaTareas = [
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ];
    return (
    // <>
    //     {listaTareas.map(tarea => (
    //         <h4 key={tarea.id}>{tarea.titulo}</h4>
    //     ))}
    // </>
    <ul>
        {listaTareas.map(tarea => (
            <li key={tarea.id}>{tarea.titulo}</li>
        ))}
    </ul>
  );
}

export default Tareas

//cuando se utilice map si o si toca utilizar una key 