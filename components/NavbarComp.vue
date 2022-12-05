<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/rooms">Rooms</b-nav-item>
          <b-nav-item v-if="navbarMode === 'admin'" to="/desks"
            >Desks</b-nav-item
          >
          <b-nav-item v-if="navbarMode === 'admin'" to="/users"
            >Users</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <div v-if="navbarMode === 'guest'">
            <b-button
              size="sm"
              class="my-2 my-sm-0 mx-2"
              type="button"
              @click.prevent="registerHandler"
              >Register</b-button
            >
            <b-button
              size="sm"
              class="my-2 my-sm-0 mx-2"
              type="button"
              @click.prevent="loginHandler"
              >Login</b-button
            >
          </div>

          <b-nav-item-dropdown v-if="navbarMode !== 'guest'" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>

            <b-dropdown-item to="/profile"> Profile</b-dropdown-item>
            <b-dropdown-item to="/login" @click="logoutHandler"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  //   created() {
  //     this.mode = this.navbar;
  //   },
  computed: {
    navbarMode() {
      return this.$store.getters.mode;
    },
  },
  methods: {
    registerHandler() {
      this.$router.push("/register");
    },
    loginHandler() {
      this.$router.push("/login");
    },
    logoutHandler() {
      this.$store.dispatch("logoutAction");
    },
  },
};
</script>

<style lang="scss" scoped>
a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  width: 100%;
}
</style>
