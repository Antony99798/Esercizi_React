import { useState } from "react";
import { Button, Input } from "@/components/ui/button";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          className="flex-1 border rounded p-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Aggiungi un nuovo todo"
        />
        <Button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Aggiungi
        </Button>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span>{todo}</span>
            <Button
              onClick={() => removeTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Rimuovi
            </Button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <Button
          onClick={resetTodos}
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded w-full"
        >
          Reset
        </Button>
      )}
    </div>
  );
}
