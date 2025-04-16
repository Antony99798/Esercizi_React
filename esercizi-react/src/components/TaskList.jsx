import React from "react";
import TaskItem from "./TaskItem";

//{ tasks, onToggle, onRemove }: è la destrutturazione delle props, cioè il componente riceve 3 proprietà:

//tasks: un array di oggetti task.

//onToggle: una funzione da chiamare per attivare/disattivare un task.

//onRemove: una funzione da chiamare per rimuovere un task.
export default function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">Nessun task presente</p>;
  }
  //Se l’array tasks è vuoto, viene mostrato un semplice messaggio.
  //className="space-y-2" aggiunge uno spazio verticale tra ogni elemento della lista (di nuovo Tailwind CSS).
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
// Viene usato .map() per creare un componente TaskItem per ogni task.

// key={task.id}: chiave univoca necessaria in React per tracciare gli elementi della lista.

// task={task}: passa l’intero oggetto task al componente TaskItem.

// onToggle={onToggle} e onRemove={onRemove}: passa le funzioni ricevute come props anche a TaskItem.
