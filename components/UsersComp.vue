<template>
  <div class="main">
    <div class="header">
      <h3>Users</h3>
    </div>
    <div v-for="user in usersData" :key="user.email">
      <div class="userContainer">
        <div class="contentWrapper">
          <p>Name:</p>
          <p>{{ user.name }}</p>
        </div>
        <div class="contentWrapper">
          <p>Email:</p>
          <p>{{ user.email }}</p>
        </div>
        <div class="contentWrapper">
          <p>Role:</p>
          <p>{{ user.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    usersData() {
      return this.$store.getters.users;
    },
  },
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
.userContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 20px;
}
.contentWrapper {
  display: flex;
  gap: 10px;
}
</style>
