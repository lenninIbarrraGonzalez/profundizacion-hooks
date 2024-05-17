import { useCallback, useState } from "react";
import { ShowIncrement } from "./showIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(() => {
    // setCounter(counter + 1);
    setCounter((value) => value + 1);
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
