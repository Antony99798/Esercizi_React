import Age from "./Age"

export default function Welcome({name, age}){
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 ? <Age /> : null}
        {age && <Age />}
        {age > 18 && age < 65 ? <Age /> : null}
        {age > 18 && name === "John" ? <Age /> : null}
        <Messaggio age={age} />
      </div>
    );
}