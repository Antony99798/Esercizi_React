const Hello = () => {
  const { language } = useContext(LanguageContext);
  return <h2>{messages[language] || messages["en"]}</h2>;
};

// Componente principale con il selettore di lingua
const App = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <Hello />
    </div>
  );
};
