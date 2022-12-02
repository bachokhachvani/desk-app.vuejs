export default class Room {
  constructor(roomNumber, roomCapacity, size, manager) {
    this.roomNumber = roomNumber;
    this.roomCapacity = roomCapacity;
    this.size = size;
    this.manager = manager ? manager : "Admin";
  }
}
