import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    modules: {},
    state() {
      return {
        isLogged: false,
        user: {},
        users: [],
      };
    },
    getters: {
      user(state) {
        return { user: state.user, isLogged: state.isLogged };
      },
      users(state) {
        return state.users;
      },
    },
    mutations: {
      getUserInfo(state, payload) {
        if (payload) {
          state.isLogged = payload.isLogged;
          state.user = payload.user;
        }
      },
      initialiseStoreWithUser(state, payload) {
        if (localStorage.getItem("userInfo")) {
          state.user = JSON.parse(localStorage.getItem("userInfo")).user;
          state.isLogged = JSON.parse(
            localStorage.getItem("userInfo")
          ).isLogged;
        }
      },
      initialiseStoreWithUsers(state, payload) {
        if (localStorage.getItem("users")) {
          state.users = JSON.parse(localStorage.getItem("users"));
        } else {
          state.users = [];
        }
      },
    },
    actions: {
      getUser(context, payload) {
        if (payload) {
          context.commit("getUserInfo", {
            user: payload.user,
            isLogged: payload.isLogged,
          });
          if (payload.isLogged) {
            localStorage.setItem("userInfo", JSON.stringify(payload));
          }
        }
      },
      initialiseStoreWithUserAction(context, payload) {
        context.commit("initialiseStoreWithUser");
        context.commit("initialiseStoreWithUsers");
      },
    },
  });
