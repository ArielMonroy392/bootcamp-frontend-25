import { useState } from "react";
import "./Cinema.css";
import Row from "./Row";

export default function Cinema({ rows, seatPerRow }) {
  const [freeSeats, setFreeSeats] = useState(rows * seatPerRow);

  const bookSeat = () => {
    setFreeSeats((prevSeats) => (prevSeats - 1))
  };

  return (
    <div className="cinema">
      <div className="screen">Screen</div>
      <div className="seats">
        {Array.from({ length: rows }).map((_, index) => (
          <Row
            onBookSeat={bookSeat}
            key={`row-${index}`}
            row={index + 1}
            seats={seatPerRow}
          />
        ))}
      </div>
      <ul className="seats-hint">
        <li>Available: <div className="available"></div></li>
        <li>Occupied: <div className="occupied"></div></li>
      </ul>
      <span>Free seats: {freeSeats}</span>
    </div>
  );
}
