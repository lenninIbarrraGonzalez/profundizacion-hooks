import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  const { formState, inputChange, onResetForm } = useForm({
    description: "",
  });

  const { description } = formState;

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay para hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={inputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
