import { useState } from "react";

const Tareas = () => {
  //estado del componente => datos del componente
  const [listaTareas, setListaTareas] = useState([
    {id:1, titulo: "Running"},
    {id:2, titulo: "Programing"},
    {id:3, titulo: "Reading"},
    {id:4, titulo: "Swimming"},
  ]);

  //HOOCK STATE
  //const [edad, setEdad] = useState(0);
  // Estado es inmutable
  //edad = 3;

  // Modifica el estado a através de la función set
  //setEdad(3);

  return (
    <>
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