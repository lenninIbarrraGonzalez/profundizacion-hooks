import { useEffect } from "react";

export const Mesage = () => {
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);
  return (
    <>
      <h3>El usuario ya existe!</h3>
    </>
  );
};
