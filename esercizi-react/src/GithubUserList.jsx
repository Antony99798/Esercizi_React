import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  //Dopo aver ricevuto la risposta, response.json() la converte in JSON.
  //setUsers(data) aggiorna lo stato users con i dati ricevuti.
  //useEffect viene eseguito solo una volta, perché il secondo parametro è un array vuoto ([]).

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
          //Si usa .map() per scorrere la lista users e creare un <li> per ogni utente.
          //Ogni <li> contiene un link (<Link>) che punta a /users/{user.login}
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;