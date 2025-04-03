import useSWR from "swr"

const fetcher = (url) => fetch(url).then(response => response.json())
export default function Profilo(){
const { data, error, load} = useSWR("https://api.github.com/users/giacomo", fetcher);
   if (error){
    return <p>Errore nel caricamento</p>
   }
   if (load){
    return <p>Caricamento dati...</p>
   }
return (
      <div>
        <h1>I tuoi dati</h1>
        <p>Nome: {data.login}</p>
        <p>Bio: {data.bio}</p>
        <img src= {data.avatar_url}></img>
      </div>
    );
}