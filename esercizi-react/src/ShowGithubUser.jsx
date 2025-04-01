const ShowGithubUser = () => {
  const { username } = useParams();
  return <GithubUser username={username} />;
};
 export default ShowGithubUser;