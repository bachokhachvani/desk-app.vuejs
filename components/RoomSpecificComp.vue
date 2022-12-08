<template>
  <div class="main">
    <div class="header">
      <h3>room {{ this.id }} desks</h3>
    </div>
    <div class="legend">
      <p class="reserved">reserved</p>
      <p class="free">free</p>
    </div>
    <div v-for="desk in deskData" :key="desk.id">
      <nuxt-link :to="'/rooms/' + desk.roomNumber + '/desks/' + desk.id">
        <div :class="desk.isTaken ? 'roomContainerReserved' : 'roomContainer'">
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
          <!-- <div class="contentWrapper">
            <p>isTaken:</p>
            <p>{{ desk.isTaken }}</p>
          </div> -->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    deskData() {
      return this.$store.getters.deskData.filter(
        (desk) => desk.roomNumber == this.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 15px 0;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.header {
  text-align: center;
  font-size: 25px;
}
.roomContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 20px;
  align-items: center;
  background-color: rgb(137, 180, 251);
  &:hover {
    background-color: rgba(137, 181, 251, 0.618);
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
.roomContainerReserved {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 20px;
  align-items: center;
  background-color: rgb(247, 200, 113);
  &:hover {
    background-color: rgba(247, 200, 113, 0.54);
  }
}
.legend {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  font-weight: 600;
  font-size: 20px;
}
.reserved {
  color: rgb(247, 200, 113);
}
.free {
  color: rgb(137, 180, 251);
}
</style>
