import { createContext } from "react";

const LanguageContext = createContext("it");

const Hello = () => {
  const { language } = useContext(LanguageContext);
  return <h2>
    {language === "en" ? "Hello World" : "Ciao Mondo"}
  </h2>;
};

export default Hello;
