import React from "react";
import FilteredList from "./FilteredList";
import useCounter from "./UseCounter";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  const items = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 },
  ];

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <h2>Filtered List</h2>
      <FilteredList items={items} />
    </div>
  );
};

export default App;
