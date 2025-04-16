//La funzione riceve tre props: task: un oggetto che rappresenta una task, 
//onToggle: una funzione che cambia lo stato "completato" della task.
//onRemove: una funzione che rimuove la task.
export default function TaskItem({ task, onToggle, onRemove }) {
  //Mostra il titolo della task.
  //flex-1: il testo prende tutto lo spazio disponibile.
  //Se task.completato è true, applica uno stile barrato (line-through) e un colore grigio (text-gray-400).
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
