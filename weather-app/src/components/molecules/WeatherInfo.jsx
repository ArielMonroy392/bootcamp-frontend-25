import Text from "../atoms/Text"


export default function WeatherInfo({ city }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text>Temperature: {city.temperature}</Text>
      <Text>Humidity: {city.humidity}</Text>
      <Text>Wind Speed: {city.windSpeed}</Text>
    </div>
  )
}