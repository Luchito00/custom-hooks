import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

  const [counter, setCounter] = useState( initialValue )

  const increment = ( value = 1 ) => {
    setCounter( counter + value )
  }

  const decrement = ( value = 1 ) => {
    if ( counter === 1 ) return;
    setCounter( counter - value )
  }

  const reset = () => {
    setCounter( initialValue )
  }

  // EXTRA = Funcion creada para MultipleCustomHooks
  const randomFunction = ( min, max ) => {
    return Math.floor(Math.random() * ( max - min + 1 )) + min;
  }
  const handleRandom = () => {
    setCounter(randomFunction( 1, 410 ))
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    handleRandom,
  }

}
