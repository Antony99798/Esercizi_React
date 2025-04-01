import { Routes, Route} from "react-router-dom";
const GithubUsers = () => {
  return (
    <Routes>
      <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
      <Route path=":username" element={<ShowGithubUser />} />
    </Routes>
  );
  //index indica che questa è la rotta predefinita (corrisponde al path "." relativo al contesto in cui si trova GithubUsers).
//Il valore di element è <p>Aggiungi un utente e selezionalo</p>,
// quindi se l'utente visita la pagina senza un parametro nella URL, vedrà questo messaggio.
};

//path=":username" indica una rotta dinamica, dove :username è un parametro che cambia in base all'URL.

//Se l'utente visita un URL che corrisponde al formato /qualcosa,
// il valore di :username sarà qualcosa e il componente <ShowGithubUser /> verrà renderizzato.
export default GithubUsers;
