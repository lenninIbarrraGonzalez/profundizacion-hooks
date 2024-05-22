export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialState, action.payload];

    case "[TODO] remove todo":
      //console.log("payload", action);
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] toggle todo":
      // console.log(initialState);
      // console.log(action);
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          //console.log("todo a modificar", todo);
          return {
            ...todo,
            done: !todo.done,
          };
        }
        //console.log("no hay nada que hacer", todo);
        return todo;
      });

    //esta es una buena practica cuando se esta desarrollando y hay pendientes por programar
    //throw new Error("action.type = ABC no esta implementado");

    default:
      return initialState;
  }
};
