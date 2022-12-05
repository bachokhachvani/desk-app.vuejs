<template>
  <div class="main">
    <div class="header">
      <h3>room {{ this.id }} desks</h3>
    </div>
    <div v-for="desk in deskData" :key="desk.id">
      <nuxt-link :to="'/rooms/' + desk.roomNumber + '/desks/' + desk.id">
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
.deskContainer {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
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
