import { useFavoriteLanguage  } from "../../context/FavoriteContext"

export function MainSection() {
  const { languageIndex, changeIndex } = useFavoriteLanguage()
  const languages = ['JavaScript', 'Python'];
 return (
   <div>
     <p id="favoriteLanguage">favorite programing language: {languages[languageIndex]}</p>
     <button id="changeFavorite" onClick={changeIndex} >toggle language</button>
   </div>
 )
}