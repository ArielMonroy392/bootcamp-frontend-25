import { useState } from "react"
import "./Seat.css"
export default function Seat({ number, row, onClick }) {
  const [available, setIsAvailable] = useState(true)

  const handleClick = () => {
    setIsAvailable((prev) => { return !prev })
    onClick(row, number, available)
  }

  return (
    <div className={`seat ${available ? "seat-available" : "seat-ocupped"}`}>
      <button onClick={handleClick}>
        Seat
      </button>
    </div>
  )
}