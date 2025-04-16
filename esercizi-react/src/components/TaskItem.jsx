export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className="flex items-center justify-between p-2 border rounded">
      <span
        className={`flex-1 ${
          task.completato ? "line-through text-gray-400" : ""
        }`}
      >
        {task.titolo}
      </span>
      <button onClick={() => onToggle(task.id)} className="text-green-500 mx-2">
        ✓
      </button>
      <button onClick={() => onRemove(task.id)} className="text-red-500">
        🗑
      </button>
    </li>
  );
}
