import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";


const init = () => {
  return JSON.parse( localStorage.getItem("todos")) || [];
}

export const useTodo = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, [], init );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify( todos ) )
  
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    }
    dispatch( action );
    // console.log(todo)
  };

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    })
  };

  const handleToggleTodo = ( id ) => {
    // console.log({id})
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    })
  };

  const todosCount = () => {
    todos.length
  }

  const pendingCount = () => {
    todos.filter(todo=> !todo.done).length
  }


  return{
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingCount: todos.filter(todo=> !todo.done).length,

  }
}
