export default class Room {
  constructor(roomNumber, roomCapacity, size, manager, id) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.roomCapacity = roomCapacity;
    this.size = size;

    //default manager is admin@gmail.com cause he has admin role
    this.manager = manager ? manager : "admin@gmail.com";
  }
}
