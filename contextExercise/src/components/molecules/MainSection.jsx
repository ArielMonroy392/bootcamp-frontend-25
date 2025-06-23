import { useFavoriteLanguage  } from "../../context/FavoriteContext"

export function MainSection() {
  const { languageIndex, changeIndex, languages } = useFavoriteLanguage()
 return (
   <div>
     <p id="favoriteLanguage">favorite programing language: {languages[languageIndex]}</p>
     <button id="changeFavorite" onClick={changeIndex} >toggle language</button>
   </div>
 )
}