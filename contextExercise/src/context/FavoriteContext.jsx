import {  createContext, useContext, useState } from "react";



const FavoriteContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const FavoriteProvider = ({children}) => {

  const [languageIndex, setLanguageIndex] = useState(0);

  const languages = ["Javascript","Python","C#", "Java", "Cobol","Ruby"]

  const changeIndex = () => {
    setLanguageIndex((prev) => { return (prev + 1) % languages.length})
  }

  return <FavoriteContext.Provider value={{languageIndex, changeIndex, languages}}>
    {children}
  </FavoriteContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFavoriteLanguage = () => {
  const context = useContext(FavoriteContext)
  if(!context) throw new Error("It should be inside context provider")

  return context
}