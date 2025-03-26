export function GithubUser({ username }){
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="border p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-xl font-bold">{userData.name || "No Name"}</h2>
        <p className="text-gray-600">@{userData.login}</p>
      </div>
    </div>
  );
};
