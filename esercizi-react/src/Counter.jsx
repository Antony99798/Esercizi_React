import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //setCount è la funzione che aggiorna lo stato.
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    //Un bottone <button> con un onClick che chiama setCount(count + 1),
    // aumentando il valore del contatore di 1 ogni volta che viene premuto.
  );
};
export default Counter;

