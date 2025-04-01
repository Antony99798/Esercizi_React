import { useState } from "react";

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [username]);

  if (!userData) return <p>Loading...</p>;
  return (
    <div>
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} width={100} />
      <p>{userData.bio || "No bio available"}</p>
    </div>
  );
};
export default GithubUser;