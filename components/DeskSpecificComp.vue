<template>
  <div class="main">
    <div>
      <div class="header">
        <h3>Desk {{ this.deskId }} Details</h3>
      </div>
      <div class="content">
        <p>Size:</p>
        <p>{{ deskData.size }}</p>
      </div>
      <div class="content">
        <p>Price:</p>
        <p>{{ deskData.prize }}</p>
      </div>
      <div class="content">
        <p>Position:</p>
        <p>{{ deskData.position }}</p>
      </div>
      <div class="content">
        <p>Is Taken:</p>
        <p>{{ deskData.isTaken }}</p>
      </div>
      <div class="content">
        <p>Room:</p>
        <p>{{ deskData.roomNumber }}</p>
      </div>
      <div class="buttonWrapper">
        <button
          v-if="deskData.isTaken === false && mode === 'Client'"
          class="rentBtn"
          @click="rentHandler"
        >
          Rent Desk
        </button>
        <p v-if="deskData.isTaken">Desk is rented!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deskId: this.$route.params.deskId,
    };
  },
  methods: {
    rentHandler() {
      this.$store.dispatch("rentDeskAction", { id: this.deskId });
    },
  },
  computed: {
    deskData() {
      return this.$store.getters.deskData.filter(
        (desk) => desk.id == this.deskId
      )[0];
    },
    mode() {
      return this.$store.getters.mode;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  font-size: 40px;
  color: rgb(11, 11, 103);
  padding-bottom: 30px;
}
.content {
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  p {
    width: 100px;
    color: rgb(11, 11, 103);
  }
}
.buttonWrapper {
  display: flex;
  justify-content: center;
}
.rentBtn {
  background-color: rgb(11, 11, 103);
  width: 200px;
  height: 40px;
  margin-top: 30px;
  margin-right: 30px;
  color: aliceblue;
  font-weight: 800;
}
.buttonWrapper {
  p {
    color: rgb(149, 13, 6);
    font-size: 20px;
    font-weight: 700;
  }
}
.cancelBtn {
  background-color: rgb(149, 13, 6);
  width: 200px;
  height: 40px;
  margin-top: 30px;
  margin-right: 30px;
  color: aliceblue;
  font-weight: 800;
}
</style>
