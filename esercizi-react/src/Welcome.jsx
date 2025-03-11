import Age from "./Age"

export default function Welcome({name, age}){
    return (
      <div>
        <p>Welcome, {name}!</p>
        <Age age={age}></Age>
      </div>
    );
}