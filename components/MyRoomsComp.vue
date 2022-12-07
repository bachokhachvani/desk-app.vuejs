<template>
  <div class="main">
    <div class="header"><h3>My Rooms</h3></div>
    <div v-for="room in myRoomsData" :key="room.id">
      <nuxt-link :to="'/rooms/' + room.roomNumber + '/desks'">
        <div class="roomContainer">
          <div class="contentWrapper">
            <p>Room N:</p>
            <p>{{ room.roomNumber }}</p>
          </div>
          <div class="contentWrapper">
            <p>Size:</p>
            <p>{{ room.size }}</p>
          </div>
          <div class="contentWrapper">
            <p>Capacity:</p>
            <p>{{ room.roomCapacity }}</p>
          </div>
          <div class="contentWrapper">
            <p>Manager:</p>
            <p>{{ room.manager }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div v-if="myRoomsData.length === 0">
      <p>you don't have any rooms to manage</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myRoomsData() {
      const rooms = this.$store.getters.roomData;
      const email = this.$store.getters.user.user.email;
      const myRooms = rooms.filter((room) => room.manager === email);
      return myRooms;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
p {
  margin: 15px 0;
}
.header {
  text-align: center;
  font-size: 25px;
}
.roomContainer {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  &:hover {
    background-color: rgb(210, 203, 203);
  }
}
.contentWrapper {
  display: flex;
  gap: 10px;
}
a {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}
</style>
