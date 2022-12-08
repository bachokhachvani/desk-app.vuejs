<template>
  <div class="main">
    <div>
      <h3>Login</h3>
      <form @submit.prevent="submitHandler">
        <div>
          <label for="email">Email</label>
          <input
            v-model.trim="email"
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label for="password" required>Password</label>
          <input
            v-model.trim="password"
            type="password"
            placeholder="password"
          />
        </div>
        <button>Login</button>
        <div v-if="this.isError" class="errorContainer">
          <p>Email or password is Incorrect!</p>
        </div>
      </form>
    </div>
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
      isError: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.user;
    },
  },
  methods: {
    submitHandler() {
      const users = JSON.parse(localStorage.getItem("users")) || userData;
      const isUser =
        users.filter((data) => data.email === this.email).length > 0
          ? users.filter((data) => data.email === this.email)[0]
          : new User(null, null, null);

      const isPassword = isUser ? isUser.password === this.password : false;

      console.log("isUser:", isUser);
      console.log(isPassword);
      if (isUser && isPassword) {
        this.$store.dispatch("getUser", { isLogged: true, user: isUser });
        this.$router.push("/home");
      } else {
        this.$store.dispatch("getUser", { isLogged: false, user: {} });
        this.isError = true;
        console.log("isError: ", this.isError);
      }
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
    text-align: center;
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

.errorContainer {
  p {
    font-size: 16px;
    font-weight: 600;
    color: red;
  }
}
</style>
