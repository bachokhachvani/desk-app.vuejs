export default class Desk {
  constructor(roomNumber, size, prize, position, id, isTaken, rentWeeks) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.prize = prize;
    this.size = size;
    this.position = position;
    this.isTaken = isTaken || false;
    this.rentWeeks = rentWeeks || 0;
  }
}
