export default class Desk {
  constructor(roomNumber, size, manager, prize, position) {
    this.roomNumber = roomNumber;
    this.prize = prize;
    this.size = size;
    this.manager = manager ? manager : "Admin";
    this.position = position;
  }
}
