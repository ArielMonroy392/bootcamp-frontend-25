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
    for (let i = 0; i < this.rows; i++) {
      let rowStatus = "";
      for (let j = 0; j < this.seatsPerRow; j++) {
        rowStatus += this.seats[i][j].isAvailable ? "O " : "X ";
      }
      console.log(`${rowStatus} \n`);
    }
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

class Seat {
  row;
  seatNumber;
  isAvailable;
  constructor(row, seatNumber) {
    this.row = row;
    this.seatNumber = seatNumber;
    this.isAvailable = true;
  }
}

const cinema = new Cinema(5, 10);

cinema.showSeatsStatus();

cinema.bookSeat(1, 1);

cinema.showSeatsStatus();

cinema.bookSeat(1, 11);

//recieve a row and seat number from the user
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

while (true) {
  //show menu to user
  console.log("1. Book a seat");
  console.log("2. Show seats status");
  console.log("3. Exit");

  readline.question("Enter your choice: ", (choice) => {
    if (choice === "1") {
      readline.question("Enter row number: ", (row) => {
        readline.question("Enter seat number: ", (seatNumber) => {
          cinema.bookSeat(row, seatNumber);
          readline.close();
        });
      });
    } else if (choice === "2") {
      cinema.showSeatsStatus();
      readline.close();
    } else if (choice === "3") {
      console.log("Exiting...");
      readline.close();
    } else {
      console.log("Invalid choice. Please try again.");
    }
  });
}
