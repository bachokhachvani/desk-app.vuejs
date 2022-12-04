<template>
  <div></div>
</template>

<script>
export default {
  //   created() {
  //     this.mode = this.navbar;
  //   },
  computed: {
    navbar() {
      return this.$store.getters.mode;
    },
  },
};
</script>

<style lang="scss" scoped></style>
