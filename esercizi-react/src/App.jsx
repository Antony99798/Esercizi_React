import GithubUserProfile from "./GithubUserProfile"
import { SWRConfig } from "swr"
const fetcher = (url) => fetch(url).then((response) => response.json());
//Il fetcher è una funzione che prende un URL e restituisce i dati convertiti in JSON.
// Questa funzione verrà utilizzata da SWR per recuperare i dati in modo asincrono.
const App = ()=> {
  return (
    <div>
      <SWRConfig value={{fetcher}}>
        <GithubUserProfile username={"octocat"} />
      </SWRConfig>
    </div>
  );
  //Il componente App avvolge l'applicazione con SWRConfig, passando la funzione fetcher come valore globale per tutte le chiamate API gestite con SWR.
 //Il componente GithubUserProfile viene renderizzato con il valore username={"octocat"}, quindi probabilmente andrà a recuperare i dati del profilo GitHub dell'utente "octocat".
}