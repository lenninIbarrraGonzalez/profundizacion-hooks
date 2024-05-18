import { useCallback, useState } from "react";
import { ShowIncrement } from "./showIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    console.log(value);
    // setCounter(counter + 1);
    setCounter((c) => c + value);
  }, []);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>useCallBack Hook : {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
