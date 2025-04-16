// export default function TaskForm(){
//     return (
//         <>
//         <form>
//             <h5>Inserisci Task</h5>
//             <label>Numero Task</label>
//             <input
//             type="number"
//             name="numero"
//             placeholder="Inserisci il numero della tua task"
//             />
//             <label>Nome Task</label>
//             <input
//             type="text"
//             name="nome"
//             placeholder="Inserisci il nome della tua Task"
//             />
//             <input type="checkbox" name="completato" id="" value />
//             <button type="submit" name="Invia">Invia</button>
//         </form>
//         </>
//     )
// }

import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nuovo Task"
        className="border rounded p-2 mr-2 w-2/3"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Aggiungi
      </button>
    </form>
  );
};

export default TaskForm;