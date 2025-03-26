function GithubUsers(){
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && !users.includes(username)) {
      setUsers([...users, username.trim()]);
      setUsername("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Github username"
          className="border p-2 flex-grow rounded-l-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Add User
        </button>
      </form>
      <div className="space-y-4">
        {users.map((user) => (
          <GithubUser key={user} username={user} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
