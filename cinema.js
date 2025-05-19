const Seat = require("./seat");

class Cinema {
  rows;
  seatsPerRow;
  seats;

  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.seats = [];

    for (let i = 0; i < rows; i++) {
      this.seats[i] = [];
      for (let j = 0; j < seatsPerRow; j++) {
        this.seats[i][j] = new Seat(i + 1, j + 1);
      }
    }
  }

  showSeatsStatus() {
    console.log("\nSeats Status:");
    for (let i = 0; i < this.rows; i++) {
      let rowStatus = "";
      for (let j = 0; j < this.seatsPerRow; j++) {
        rowStatus += this.seats[i][j].isAvailable ? "O " : "X ";
      }
      console.log(`Row ${i + 1}: ${rowStatus}`);
    }
    console.log(""); // To add a newline after displaying the seat status
  }

  bookSeat(row, seatNumber) {
    if (
      row < 1 ||
      row > this.rows ||
      seatNumber < 1 ||
      seatNumber > this.seatsPerRow
    ) {
      console.log("Invalid seat number.");
      return;
    }
    if (this.seats[row - 1][seatNumber - 1].isAvailable) {
      this.seats[row - 1][seatNumber - 1].isAvailable = false;
      console.log(`Seat ${row}-${seatNumber} booked successfully.`);
    } else {
      console.log(`Seat ${row}-${seatNumber} is already booked.`);
    }
  }
}

module.exports = Cinema;
