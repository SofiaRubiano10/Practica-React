
const tareasReducer = (tareas, action) => {
  switch (action.type) {
    case "CARGAR":
        return action.tareas ? [...action.tareas] : [];      
    
    case "AGREGAR":
        return [...tareas, action.nuevaTarea]
    
    case "MODIFICAR":
        return tareas.map((tarea )=> 
        //verirfica si la tarea tiene el mismo id
        tarea.id === action.id ? {...tarea, terminada: !tarea.terminada} : tarea)
    
    case "ELIMINAR":
        return tareas.filter((tarea) => tarea.id !== action.id)
    
        default:
        throw Error(`Acción no soportada ${action.type}`);
  }
}

export default tareasReducer;