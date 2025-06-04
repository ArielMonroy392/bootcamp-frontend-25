import './App.css'
import Seat from './components/Seat'

function App() {


  return (
    <>
      <Seat row={1} number={10} onClick={(row, number, available) => alert(`Row: ${row}, Number: ${number}, isAvailable: ${available}`)}></Seat>
    </>
  )
}

export default App
