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
module.exports = Seat;
