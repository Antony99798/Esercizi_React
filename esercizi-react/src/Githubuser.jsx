const GithubUser = ({username}) => {
  return (<li>
    <img src={username.avatar_url} alt="" width={100}/>
    <p>{username.login}</p>
    <p>{username.name}</p>
    </li>)
}

export default GithubUser;