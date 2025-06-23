/**
 * 
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Also is important move component and context to a separate files.
 * Submit your code once it is complete.
 */

const languages = ['JavaScript', 'Python'];

export default function App() {
 return (
   <>
     <MainSection />
   </>
 );
}


function MainSection() {
 return (
   <div>
     <p id="favoriteLanguage">favorite programing language: {languages[0]}</p>
     <button id="changeFavorite">toggle language</button>
   </div>
 )
}

