import { useCounter } from "../hooks/useCounter";

export const CounterWhitHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter:{counter}</h1>
      <hr />
      <button className="btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
