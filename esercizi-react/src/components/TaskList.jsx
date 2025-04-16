import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, completato, rimuovi }){
  if (tasks.length === 0) {
    return <p className="text-gray-500">Nessun task presente</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={completato}
          onRemove={rimuovi}
        />
      ))}
    </ul>
  );
};
