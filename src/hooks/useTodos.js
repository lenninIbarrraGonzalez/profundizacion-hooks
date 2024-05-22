import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReduce/todoReducer";

//para el manejo de localStorage
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("TODOS")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    //console.log({ todo });
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    // console.log({ id });
    dispatch({
      type: "[TODO] remove todo",
      payload: id,
    });
  };

  const handleOnToggleTodo = (id) => {
    //console.log({ id });
    dispatch({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleOnToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};
