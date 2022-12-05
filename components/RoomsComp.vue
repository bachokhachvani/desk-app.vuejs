<template>
  <div class="main">
    <div class="header">
      <h3>Rooms</h3>
    </div>
    <div v-for="room in roomData" :key="room.id">
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
  </div>
</template>

<script>
export default {
  name: "Room",
  data() {
    return {};
  },
  computed: {
    roomData() {
      return this.$store.getters.roomData;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
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
