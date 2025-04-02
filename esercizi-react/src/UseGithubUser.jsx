import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
//Questa funzione si occupa di recuperare i dati da una URL usando fetch,
//Quando la richiesta viene completata, converte la risposta JSON.

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );
  //Questo è un custom hook, ovvero una funzione che segue le regole degli hook di React e può essere riutilizzata nei componenti.
  //useSWR prende due parametri:
//La chiave (in questo caso la URL dell'utente GitHub). Se username è null, SWR non farà alcuna richiesta.
//La funzione di fetch (fetcher), che recupera i dati.

//Restituisce un oggetto con:
//data: i dati dell'utente (se la richiesta ha successo).
//error: un eventuale errore (se il fetch fallisce).
//mutate: una funzione per aggiornare manualmente i dati memorizzati in cache.
  return {
    user: data,
    error,
    loading: !data && !error,
    onRefresh: () => mutate(null),
  };
}

//user → Contiene i dati dell'utente GitHub.

//error → Contiene l'errore se il fetch fallisce.

//loading → È true finché non si ottengono i dati o un errore.

//onRefresh → Funzione che chiama mutate(null) per forzare il refresh dei dati.