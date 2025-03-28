const Hello = () => {
  const { language } = useContext(LanguageContext);
  return <h2>{messages[language] || messages["en"]}</h2>;
};
export default Hello;
