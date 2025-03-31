import { useEffect, useState } from "react";
import GithubUser from "./Githubuser";

const GithubUsers = ()=>{
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

const handleUsername=(event)=>{
  setUsername(event.target.value)
}
const handleFetch = async()=>{
  const response = await fetch(`https://api.github.com/users/${username}`);
const data = await response.json()
setUsers((users)=>[...users, data])
}

useEffect(()=> {
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then (json=> setUsers((users)=>[...users, json])
  )
},[username])

return (
  <div>
    <input type="text" value={username} onChange={handleUsername}/>
    <button type="button" onClick={handleFetch}>
      Get User info
    </button>
    {users.map((user)=>(
      <GithubUser username = {user}/>
    ))}
  </div>
)
}

export default GithubUsers