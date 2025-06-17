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
              <button onClick={() => { handleClick(city) }}>{city}</button>
            </li>
          )
        )
      }
    </ul>
  )
}