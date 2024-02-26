import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true,
    })

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    })

    // console.log( data )
  }

  useEffect(() => {
    getFetch();
  }, [url]) // Cada vez que la "url" cambie, se va a ejecutar este useEffect


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
