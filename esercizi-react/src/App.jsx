import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      titolo: title,
      completato: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completato: !task.completato } : task
      )
    );
  };

  const removeTask = (id) => {
    if (window.confirm("Sei sicuro di voler eliminare questo task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mini Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} onRemove={removeTask} />
      <div className="mt-4">
        Hai completato {tasks.filter((t) => t.completato).length} task su{" "}
        {tasks.length}
      </div>
    </div>
  );
};

export default App;