import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";
export const MultipleCustomHooks = () => {
  //llamando al custom hook contador
  const { counter, increment, decrement } = useCounter(1);
  console.log(counter);
  let url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <>
      <h1>Multiple custom Hooks</h1>
      <h2>Información pokémon</h2>
      <hr />

      {/* indormacion del pokemon */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* <p>{data?.name}</p> */}

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.back_default,
            data.sprites.front_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <hr />
      <button
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-secondary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
