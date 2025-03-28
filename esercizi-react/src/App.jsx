import { useContext } from "react";
import Hello, {LanguageContext} from "./Hello";

const App = () => {
  const { language, setLanguage } = useContext(LanguageContext);
 const handleLanguageChange = (event) =>{
    setLanguage(event.target.value)
 }
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select name="language"
        value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
};

