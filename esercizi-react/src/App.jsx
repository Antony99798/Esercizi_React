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

// Rendering dell'app all'interno del provider
const Root = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

export default Root;
