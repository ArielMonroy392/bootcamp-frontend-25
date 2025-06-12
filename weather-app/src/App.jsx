import { useRef, useState } from 'react'
import './App.css'
import Input from './components/atoms/input'

function App() {
  const inputRef = useRef(null)
  const [history, setHistory] = useState([])
  const [currentWeather, setCurrentWeather] = useState({})
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h'
    },
  };

  const onSearch = () => {
    const city = inputRef.current.value
    const weather = mockWeatherData[city]
    if (!weather) {
      alert("We dont know that city 😰")
    } else {
      setHistory((prev) => ([...prev, weather]))
      setCurrentWeather(weather)
      console.log(weather)
    }
  }
  return (
    <>
      <Input ref={inputRef} placeholder={"Select your city"} />
      <button onClick={onSearch}>Search</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Temperature: {currentWeather.temperature}</span>
        <span>Humidity: {currentWeather.humidity}</span>
        <span>Wind Speed: {currentWeather.windSpeed}</span>
      </div>
    </>
  )
}

export default App
