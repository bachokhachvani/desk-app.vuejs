<template>
  <div class="main">
    <div class="header">
      <h3>My Desks</h3>
    </div>
    <div v-for="(desk, index) in deskList" :key="desk.id">
      <div class="deskContainer">
        <div class="contentWrapper">
          <p>Room N:</p>
          <p>{{ desk.roomNumber }}</p>
        </div>
        <div class="contentWrapper">
          <p>Size:</p>
          <p>{{ desk.size }}</p>
        </div>
        <div class="contentWrapper">
          <p>Price:</p>
          <p>{{ desk.prize }}</p>
        </div>
        <div class="contentWrapper">
          <p>Position:</p>
          <p>{{ desk.position }}</p>
        </div>
        <div class="contentWrapper">
          <p>Rented for:</p>
          <p>{{ desk.rentWeeks }} (weeks)</p>
        </div>
        <div class="contentWrapper">
          <button @click="cancelHandler(desk.id, index)">Cancel Renting</button>
        </div>
      </div>
    </div>
    <div class="noDesk" v-if="deskList.length === 0">
      <p>you dont have any desk rented</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["prize", "size", "position", "rentWeeks", "roomNumber"],
    };
  },
  computed: {
    deskList() {
      return this.$store.getters.user.user.ownedDesks;
    },
  },
  methods: {
    cancelHandler(id, index) {
      this.$store.dispatch("cancelRentAction", { id, index });
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
.deskContainer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-left: 20px;
}
.contentWrapper {
  display: flex;
  min-width: 100px;
  gap: 10px;
  button {
    border: none;
    cursor: pointer;
    background-color: rgba(165, 81, 240, 0.522);
    border-radius: 8px;
    color: white;
  }
}
.noDesk {
  text-align: center;
  margin-top: 40px;
  p {
    font-size: 30px;
    font-weight: 600;
    color: rgb(37, 27, 180);
  }
}
</style>
