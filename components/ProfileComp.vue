<template>
  <div class="main">
    <div>
      <div class="header">
        <h3>Profile</h3>
      </div>
      <div class="content">
        <p>Name:</p>
        <p>{{ userInfo.user.name }}</p>
      </div>
      <div class="content">
        <p>Email:</p>
        <p>{{ userInfo.user.email }}</p>
      </div>
      <div class="content">
        <p>Role:</p>
        <p>{{ userInfo.user.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.getters.user;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
  text-align: center;
  font-size: 40px;
  color: rgb(11, 11, 103);
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
