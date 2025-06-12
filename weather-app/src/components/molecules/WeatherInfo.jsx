export default function WeatherInfo({ city }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}>
      <span>Temperature: {city.temperature}</span>
      <span>Humidity: {city.humidity}</span>
      <span>Wind Speed: {city.windSpeed}</span>
    </div>
  )
}