import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({initialvalue = 0, incrementAmount = 1}) {
  const [counter, setCounter] = useState(initialvalue);

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={() => setCounter((prev) => prev + incrementAmount)}>
        Incrementa
      </button>
      <button onClick={() => setCounter((prev) => prev - incrementAmount)}>
        Decrementa
      </button>
      <button onClick={() => setCounter(initialvalue)}>Reset</button>
    </div>
  );
}