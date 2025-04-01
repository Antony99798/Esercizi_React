import { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
    //Una volta ottenuti i dati, vengono convertiti in formato JSON (response.json())
    // e salvati nello stato con setUserData(data)
  }, [username]);
  //Dipendenza [username]: l'effetto viene eseguito ogni volta che username cambia.

  if (!userData) return <p>Loading...</p>;
  //Se userData è ancora null, significa che i dati non sono stati ancora caricati → Mostriamo "Loading...".
  return (
    <div>
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} width={100} />
      <p>{userData.bio || "No bio available"}</p>
    </div>
    //<h2>{userData.login}</h2> → Mostra il nome utente GitHub.
    //<img src={userData.avatar_url} alt={userData.login} width={100} /> → Mostra l'avatar utente.
    //<p>{userData.bio || "No bio available"}</p> → Mostra la bio, se presente; altrimenti visualizza "No bio available".
  );
};
export default GithubUser;