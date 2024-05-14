import { useEffect, useState } from "react";
import { Mesage } from "./Mesage";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "lennin",
    email: "lenin@gmail.com",
  });

  const { username, email } = formState;

  const inputChange = ({ target }) => {
    // //me da el name del input que presione
    // console.log(event.target.name);
    // //me da el valor del input
    // console.log(event.target.value);

    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //se deben asignar tareas unicas al useEfect

  //se ejecuta simpre, no es recomendado
  useEffect(() => {
    // console.log("Se ejecuto el useEfect");
  });

  //se ejecuta una sola vez al cargar el componente
  useEffect(() => {
    //console.log("Se ejecuta una sola vez al cargar...");
  }, []);

  //se ejecuta cada vez que cambia el emai
  useEffect(() => {
    // console.log("se eejcuta al cambiar el email");
  }, [email]);

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
      {username === "lenin2" && <Mesage />}
    </>
  );
};
