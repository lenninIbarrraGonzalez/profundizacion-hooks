import { useFetch } from "../hooks/useFetch";
export const MultipleCustomHooks = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/666";
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <>
      <h1>Multiple custom Hooks</h1>
      <h2>Información pokémon</h2>
      <hr />
      {isLoading && <p>Cargando</p>}
      {/* indormacion del pokemon */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <p>{data?.name}</p>
    </>
  );
};
