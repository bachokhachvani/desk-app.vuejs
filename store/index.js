import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { deskData } from "../components/data/desks";
import { roomData } from "../components/data/rooms";

export default () =>
  new Vuex.Store({
    modules: {},
    state() {
      return {
        rooms: [],
        desks: [],
        isLogged: false,
        user: {},
        users: [],
      };
    },
    getters: {
      mode(state) {
        if (state.isLogged) {
          return state.user.role;
        } else {
          return "guest";
        }
      },
      user(state) {
        return { user: state.user, isLogged: state.isLogged };
      },
      users(state) {
        return state.users;
      },
      roomData(state) {
        return state.rooms;
      },
      deskData(state) {
        return state.desks;
      },
    },
    mutations: {
      // setMode(state, payload) {
      //   if (state.isLogged) {
      //     state.mode === state.user.role;
      //   } else {
      //     state.mode === "guest";
      //   }
      // },
      manageRoomsData(state, payload) {
        if (state.rooms.length === 0 && !localStorage.getItem("rooms")) {
          localStorage.setItem("rooms", JSON.stringify(roomData));
          state.rooms = roomData;
        } else if (state.rooms.length === 0 && localStorage.getItem("rooms")) {
          state.rooms = JSON.parse(localStorage.getItem("rooms"));
        }
      },

      manageDesksData(state, payload) {
        if (state.desks.length === 0 && !localStorage.getItem("desks")) {
          localStorage.setItem("desks", JSON.stringify(deskData));
          state.desks = deskData;
        } else if (state.desks.length === 0 && localStorage.getItem("desks")) {
          state.desks = JSON.parse(localStorage.getItem("desks"));
        }
      },

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
      initialiseStoreWithRoomandDeskAction(context, payload) {
        context.commit("manageRoomsData");
        context.commit("manageDesksData");
      },
    },
  });
