export default function TaskItem({ task, completato, rimuovi }){
  return (
    <li className="flex items-center justify-between p-2 border rounded">
      <span
        className={`flex-1 ${
          task.completato ? "line-through text-gray-400" : ""
        }`}
      >
        {task.titolo}
      </span>
      <button onClick={() => completato(task.id)} className="text-green-500 mx-2">
        ✓
      </button>
      <button onClick={() => rimuovi(task.id)} className="text-red-500">
        🗑
      </button>
    </li>
  );
};

