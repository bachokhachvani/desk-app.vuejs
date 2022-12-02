<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="submitHandler">
      <div>
        <label for="email">Email</label>
        <input v-model.trim="email" type="email" placeholder="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model.trim="password" type="password" placeholder="password" />
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { userData } from "./data/users";
import User from "./models/user";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    submitHandler() {
      console.log(this.email, this.password);
      const users = JSON.parse(localStorage.getItem("users")) || userData;
      console.log("aeeee", users[0].email);
      const isUser =
        users.filter((data) => data.email === this.email).length > 0
          ? users.filter((data) => data.email === this.email)[0]
          : new User("", "", "");
      const isPassword = isUser.password === this.password;
      console.log("isUser:", isUser);
      console.log(isPassword);
    },
  },
};
</script>
