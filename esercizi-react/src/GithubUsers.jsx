const GithubUsers = () => {
  return (
    <Routes>
      <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
      <Route path=":username" element={<ShowGithubUser />} />
    </Routes>
  );
};

 export default GithubUsers;