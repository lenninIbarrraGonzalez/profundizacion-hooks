import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(0);
  //useState de prueba para renderizar el padre
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
