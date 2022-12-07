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
      <div v-if="!deskData.isTaken && mode === 'Client'" class="weekContainer">
        <div class="weekNumber">
          <p>number of weeks: {{ weeksData }}</p>
        </div>
        <div class="btnContainer">
          <button @click="increase">+</button>
          <button @click="decrease" :disabled="weeksData === 0">-</button>
        </div>
      </div>
      <div class="buttonWrapper">
        <button
          v-if="deskData.isTaken === false && mode === 'Client'"
          :disabled="weeksData === 0"
          type="button"
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
      weeks: 0,
    };
  },
  methods: {
    increase() {
      this.weeks++;
    },
    decrease() {
      this.weeks--;
    },
    rentHandler() {
      this.$store.dispatch("rentDeskAction", {
        id: this.deskId,
        rentWeeks: this.weeks,
      });
    },
  },
  computed: {
    weeksData() {
      return this.weeks;
    },
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

.rentBtn {
  background-color: rgb(11, 11, 103);
  width: 200px;
  height: 40px;
  margin-top: 30px;
  margin-right: 30px;
  color: aliceblue;
  font-weight: 800;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  p {
    color: rgb(149, 13, 6);
    font-size: 20px;
    font-weight: 700;
  }
}

.weekContainer {
  color: rgb(103, 15, 27);
  font-weight: 800;
}
.btnContainer {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-right: 20px;
  button {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    background-color: rgb(103, 15, 27);
    width: 30px;
    height: 30px;
    color: aliceblue;
    font-weight: 600;
    padding: 0px;

    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }

    /* button[disabled] {
      background-color: #cccccc;
    } */
  }
}
.weekNumber {
  text-align: center;
  margin-top: 40px;
  margin-right: 20px;
  p {
    text-align: center;
    font-size: 20px;
  }
}
</style>
