import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Lavar la ropa",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Lavar la ropa",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>TODOS</h1>
      <hr />
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </>
  );
};
