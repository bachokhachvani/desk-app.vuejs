<template>
  <div class="main">
    <div>
      <h3>Welcome {{ userInfo ? userInfo.user.name : "" }}!</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
div {
  text-align: center;
}
</style>
