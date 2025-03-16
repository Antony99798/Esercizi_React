export default function MouseClicker() {
    function handleButtonClick(event){
        console.log(event.target.name)
        console.log(event.currentTarget.name)
    }

    return (
      <div>
        <button name="one" onClick={handleButtonClick}>
          Click me
        </button>
        <button name="two" onClick={handleButtonClick}>
          Click me
        </button>
      </div>
    );
}