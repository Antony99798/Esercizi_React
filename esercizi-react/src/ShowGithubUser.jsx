import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
  const { username } = useParams();
  return <GithubUser username={username} />;
};
//useParams è un hook fornito da react-router-dom che permette di ottenere i parametri della URL dinamicamente.
//Usa useParams() per ottenere il valore di username dalla URL.
//Passa questo valore come prop al componente GithubUser.
 export default ShowGithubUser;
