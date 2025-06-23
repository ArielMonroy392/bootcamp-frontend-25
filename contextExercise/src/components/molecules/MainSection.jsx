import { useFavoriteLanguage  } from "../../context/FavoriteContext"
import Button from "../atoms/Button"
import Paragraph from "../atoms/Paragraph"

export function MainSection() {
  const { languageIndex, changeIndex, languages } = useFavoriteLanguage()
 return (
   <div>
     <Paragraph id="favoriteLanguage">favorite programing language: {languages[languageIndex]}</Paragraph>
     <Button id="changeFavorite" onClick={changeIndex} >toggle language</Button>
   </div>
 )
}