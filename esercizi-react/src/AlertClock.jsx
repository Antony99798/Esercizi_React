export default function AlertClock() {
  function handleButtonClick() {
    const now = new Date();
    alert(`L'ora corrente è: ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <p>Clicca il pulsante sotto per mostrare l'ora corrente</p>
      <button onClick={handleButtonClick}>Cliccami!</button>
    </div>
  );
}
