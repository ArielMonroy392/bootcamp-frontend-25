import { useRef, useState } from "react";
import Input from "../atoms/Input"
import Text from "../atoms/Text"
import WeatherHistory from "../molecules/WeatherHistory";
import WeatherInfo from "../molecules/WeatherInfo";
import Button from "../atoms/Button";

export default function Weather() {
  const inputRef = useRef(null)
  const [history, setHistory] = useState({})
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
      alert("City not found 😰")
    } else {

      setHistory((prev) => {
        prev[city] = weather
        return { ...prev }
      })
      setCurrentWeather(weather)
      console.log(weather)
      console.log(history)
    }
  }

  const cleanHistory = () => {
    setCurrentWeather({})
    setHistory({})
    inputRef.current.value = ""
    inputRef.current.focus()
  }
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input ref={inputRef} placeholder={"Select your city"} />
        <Button onClick={onSearch}>Search</Button>
        <Button onClick={cleanHistory} type="clean">Clean</Button>
      </div>
      <WeatherHistory history={history} onClick={(city) => { setCurrentWeather(city) }}></WeatherHistory>
      <WeatherInfo city={currentWeather} />
    </>
  )

}