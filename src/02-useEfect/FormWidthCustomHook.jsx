import { useForm } from "../hooks/useForm";

export const FormWidthCustomHook = () => {
  const { formState, inputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de usuario"
        name="username"
        value={username}
        onChange={inputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="emai@domain.com"
        value={email}
        onChange={inputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="contraseña"
        value={password}
        onChange={inputChange}
      />
      <button onClick={onResetForm} className="btn  btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
