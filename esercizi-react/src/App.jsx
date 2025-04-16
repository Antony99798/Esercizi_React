import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  //Recupera i task dal localStorage, li converte da stringa a oggetto (JSON.parse) e li carica nello stato.
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);
  //Ogni volta che tasks cambia, questo effetto salva i task aggiornati nel localStorage sotto forma di stringa (JSON.stringify).
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //Crea un nuovo task con: id unico che si incrementa, titolo passato alla funzione,completato impostato a false.
  // Lo aggiunge alla lista esistente con setTasks.
  let unico = 1;

  const addTask = (title) => {
    const newTask = {
      id: unico++,
      titolo: title,
      completato: false,
    };
    setTasks([...tasks, newTask]);
  };
  
  //Cerca il task con l’id corrispondente e inverte il valore di completato (da true a false o viceversa).

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completato: !task.completato } : task
      )
    );
  };

 const removeTask = (id) => {
   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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