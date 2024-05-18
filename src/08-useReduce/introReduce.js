const initialTodos = [
  {
    id: 1,
    todo: "Lavar la ropa",
    done: false,
  },
];

//funcion pura
const todoReducer = (state = initialTodos, action = {}) => {
  console.log("action", action);
  //para regresar un nuevo estado
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();
//console.log(todos);

//información a agregar a la lista de TODOS
const newTodo = {
  id: 2,
  todo: "Tender la cama",
  done: false,
};

const addTodoAction = {
  //un string que identifica la acción
  type: "[TODO] add todo",
  //Esto es lo que le  voy a enviar a la action, es la carga, no siempre debe ir
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
