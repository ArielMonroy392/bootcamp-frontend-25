import { useState } from "react"
import "./Seat.css"
export default function Seat({ number, row, onBookSeat }) {
  const [available, setIsAvailable] = useState(true)

  const handleClick = () => {
    if (available) {
      setIsAvailable(false)
      onBookSeat()
      alert(`You booked seat  ${String.fromCharCode(row + 65)}-${number + 1}`)
    } else {
      alert(`Seat ${String.fromCharCode(row + 65)}-${number + 1} is already booked`)
    }
  }

  return (

    <button className={`seat ${available ? "seat-available" : "seat-occupied"}`} onClick={handleClick}>
      {String.fromCharCode(row + 65)}-{number + 1}
    </button>

  )
}