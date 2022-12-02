<template>
  <div class="main">
    <div>
      <h3>Register</h3>
      <form @submit.prevent="submitHandler">
        <div>
          <label for="name">Name</label>
          <input v-model.trim="name" type="text" placeholder="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model.trim="email" type="email" placeholder="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model.trim="password"
            type="password"
            placeholder="password"
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import User from "./models/user";
import { userData } from "./data/users";
console.log("sda", userData);
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    submitHandler() {
      console.log("user", new User(this.name, this.email, this.password));
      const oldUsers = JSON.parse(localStorage.getItem("users")) || [
        ...userData,
      ];
      oldUsers.push(new User(this.name, this.email, this.password));
      localStorage.setItem("users", JSON.stringify(oldUsers));
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  h3 {
    margin-bottom: 30px;
    color: rgb(43, 66, 157);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  button {
    background-color: rgb(43, 66, 157);
    border-radius: 8px;
    color: #ffff;
    border: none;
    height: 30px;
    cursor: pointer;
  }
}

input {
  width: 100px;
}

label {
  color: rgb(43, 66, 157);
  width: 100px;
  margin-right: 20px;
  font-weight: 600;
}
</style>
