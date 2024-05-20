export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialState, action.payload];

    //esta es una buena practica cuando se esta desarrollando y hay pendientes por programar
    //throw new Error("action.type = ABC no esta implementado");

    default:
      return initialState;
  }
};
