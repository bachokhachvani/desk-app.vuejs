<template>
  <div class="main">
    <div class="header">
      <h3>Desks</h3>
    </div>
    <div v-for="desk in deskData" :key="desk.id">
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
          <p>isTaken:</p>
          <p>{{ desk.isTaken }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desk",
  data() {
    return {};
  },
  computed: {
    deskData() {
      return this.$store.getters.deskData;
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
.header {
  text-align: center;
  font-size: 25px;
}
.deskContainer {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}
.contentWrapper {
  display: flex;
  gap: 10px;
}
</style>
