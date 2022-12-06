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
  computed: {
    deskData() {
      return this.$store.getters.deskData.filter(
        (desk) => desk.id == this.deskId
      )[0];
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
</style>
