import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  //utilizo esta funcion para reiniciar los valores cuando cambia la url
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();
    const resp = await fetch(url);

    //si se presenta un error en el llamado
    // {
    //   data: null, --> no hay data
    //   isLoading: false, --> ya no esta cargando
    //   hasError: true, --> hubo un error
    //   error: {
    //     code: resp.status, --> lo tomo de la respuesta
    //     message: resp.status.code,
    //   },

    //relentizando la carga solo para probar
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.status.code,
        },
      });
      return; //fin del codigo retorna
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    //console.log(data);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
