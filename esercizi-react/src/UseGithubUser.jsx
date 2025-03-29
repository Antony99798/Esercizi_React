import { useState } from "react";

const UseGithubUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGithubUser = async (username) => {
    try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.status !== 200) {
        throw new Error ("A problem occured")
    }
    const data = await response.json()

    setUser(data)
    } catch (error) {
        setError(error)
    } finally{
        setLoading(false)
    }
  }
  return {
user,
error,
loading,
onGetUser: fetchGithubUser,
  };
};
export default UseGithubUser
