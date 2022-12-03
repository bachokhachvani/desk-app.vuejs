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
      };
    },
    getters: {
      user(state) {
        return { user: state.user, isLogged: state.isLogged };
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
      },
    },
  });
