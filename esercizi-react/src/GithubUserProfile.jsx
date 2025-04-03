import { UseGithubUser, } from "./UseGithubUser";

const GithubUserProfile = ({ username }) => {
  const { user, error, loading, onRefresh } = UseGithubUser(username);
  //Qui chiama useGithubUser(username) e destruttura i valori ritornati:
  //user: i dati dell'utente GitHub.

  //error: eventuale errore durante il recupero.

  //loading: indica se i dati sono in caricamento.

  //onRefresh: una funzione per ricaricare i dati.

  //Se loading è true, mostra un messaggio di caricamento:
  if (loading) {
    return <div>Loading...</div>;
  }
  //Se error è presente, mostra un messaggio di errore:
  if (error) {
    return <div>Error loading user data</div>;
  }
  //Se i dati sono disponibili, vengono mostrati nome e biografia dell'utente.
 //Viene anche aggiunto un pulsante per ricaricare i dati.
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
};

export default GithubUserProfile;
