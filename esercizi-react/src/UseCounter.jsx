import { useState } from "react";

const UseCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = () => {
        setCounter((value)=> value +1);
    }
    const handleCounterDecrement = () => {
        setCounter((value)=> value -1);
    }
    const handleCounterReset = () => {
        setCounter(initialValue);
    }
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}
export default UseCounter;