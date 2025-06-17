import Button from "../atoms/Button"

export default function WeatherHistory({ history, onClick }) {

  const handleClick = (city) => {
    onClick(history[city])
  }


  return (
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      gap: 10
    }}>
      {
        history && Object.keys(history).map(
          (city, index) => (
            <li key={index}>
              <Button onClick={() => { handleClick(city) }}>{city}</Button>
            </li>
          )
        )
      }
    </ul>
  )
}