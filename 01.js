const Cinema = require("./cinema");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cinema = new Cinema(5, 10);

const cinemaTest = () => {
  console.log("Showing initial seats status...");
  cinema.showSeatsStatus();
  console.log("Booking some seats...");
  cinema.bookSeat(1, 1);
  cinema.bookSeat(1, 3);
  cinema.bookSeat(1, 4);
  cinema.bookSeat(5, 4);

  console.log("Showing seats status after booking...");
  cinema.showSeatsStatus();
  console.log("Trying to book already booked seats...");
  cinema.bookSeat(1, 1);

  console.log("Trying to book invalid seats...");
  cinema.bookSeat(6, 1);

  cinema.showSeatsStatus();
};

async function showMenu() {
  while (true) {
    console.log("Welcome to the Cinema Booking System");
    console.log("1. Book a seat");
    console.log("2. Show seats status");
    console.log("3. Show cinema test");
    console.log("4. Exit");

    const choice = await new Promise((resolve) => {
      readline.question("Enter your choice: ", resolve);
    });

    switch (choice) {
      case "1":
        const row = await new Promise((resolve) => {
          readline.question("Enter row number: ", resolve);
        });

        const seatNumber = await new Promise((resolve) => {
          readline.question("Enter seat number: ", resolve);
        });

        cinema.bookSeat(row, seatNumber);
        break;

      case "2":
        cinema.showSeatsStatus();
        break;

      case "3":
        console.log("Running cinema test...");

        cinemaTest();
        break;

      case "4":
        console.log("Exiting...");
        readline.close();
        return;

      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  }
}

showMenu();
