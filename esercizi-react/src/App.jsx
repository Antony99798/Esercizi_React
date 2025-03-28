import { useState } from "react";
import Hello, {LanguageContext} from "./Hello";

const App = () => {
  const [ language, setLanguage ] = useState("en");
 const handleLanguageChange = (event) =>{
    setLanguage(event.target.value)
 }
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <div>
        <select
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
    <Hello />
      </div>
    </LanguageContext.Provider>
  );
};
 export default App;
