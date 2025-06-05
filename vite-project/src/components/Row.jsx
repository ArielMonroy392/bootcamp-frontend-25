import "./Row.css";
import Seat from "./Seat";
export default function Row({ row, seats, onBookSeat }) {

  return (
    <div className="row">
      {
        Array.from({ length: seats }).map((_, index) => (
          <Seat onBookSeat={onBookSeat} key={`seat-${index}`} row={row} number={index}></Seat>
        ))
      }
    </div>
  )
}