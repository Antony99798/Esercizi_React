import { useState } from "react";
//Accetta una prop chiamata onAddTask, che è una funzione passata dal componente genitore.
// Sarà usata per aggiungere un nuovo task alla lista.
const TaskForm = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) return;
    onAddTask(input); // Chiama la funzione passata dal genitore con il testo inserito
    setInput(""); // Pulisce il campo di testo dopo l’invio
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input} //value={input}: rende il campo controllato, cioè il suo valore è legato allo stato React.
        onChange={(event) => setInput(event.target.value)} //onChange: aggiorna lo stato input man mano che l’utente scrive.
        placeholder="Nuovo Task"
        className="border rounded p-2 mr-2 w-2/3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded" //Bottone per inviare il form.
      >
        Aggiungi
      </button>
    </form>
  );
};

export default TaskForm;