import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export const TodoList = ({ todos = [], onDeleteTodo }) => {
  //console.log(todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // TodoItem
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
