import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "Lavar la ropa",
//     done: false,
//   },
//   {
//     id: new Date().getTime() * 3,
//     description: "Sacar a pasear al perro",
//     done: false,
//   },
// ];

//para el manejo de localStorage
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("TODOS")) || [];
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        TODOS (10), <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleOnToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
