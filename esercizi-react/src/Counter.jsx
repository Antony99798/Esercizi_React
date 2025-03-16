import { useState, useEffect } from "react";

export default function Counter ({ initialCount = 0, increment = 1 }){
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    console.log("Il contatore è:", counter);
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + increment)}>Increment</button>
    </div>
  );
};




