export default function TaskForm(){
    return (
        <>
        <form>
            <h5>Inserisci Task</h5>
            <label>Numero Task</label>
            <input
            type="number"
            name="numero"
            placeholder="Inserisci il numero della tua task"
            />
            <label>Nome Task</label>
            <input
            type="text"
            name="nome"
            placeholder="Inserisci il nome della tua Task"
            />
            <input type="checkbox" name="completato" id="" value />
            <button type="submit" name="Invia">Invia</button>
        </form>
        </>
    )
}