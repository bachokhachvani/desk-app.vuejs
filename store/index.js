import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { deskData } from "../components/data/desks";
import { roomData } from "../components/data/rooms";
import { userData } from "../components/data/users";

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
      cancelRent(state, payload) {
        const desk = state.desks.filter((desk) => desk.id == payload.id);
        desk[0].isTaken = false;

        state.desks.map((obj) => desk.find((o) => o.id === obj.id) || obj);
        console.log("desks", state.desks);

        state.user.ownedDesks.splice(payload.index, 1);
        console.log("users", state.user.ownedDesks);

        const user = state.user;
        const index = state.users
          .map((object) => object.email)
          .indexOf(user.email);

        state.users[index].ownedDesks.splice(payload.index, 1);

        console.log("userYleeo", state.users);

        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("desks", JSON.stringify(state.desks));
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ isLogged: state.isLogged, user: state.user })
        );
      },
      getUpdatedUsersAfterRegister(state, payload) {
        state.users = payload.users;
      },
      rentDesk(state, payload) {
        const desk = state.desks.filter((desk) => desk.id == payload.id);
        desk[0].isTaken = true;
        state.desks.map((obj) => desk.find((o) => o.id === obj.id) || obj);
        state.user.ownedDesks.push(desk[0]);
        console.log("users", state.users);
        console.log("desks", state.desks);
        const user = state.user;
        const index = state.users
          .map((object) => object.email)
          .indexOf(user.email);
        state.users[index].ownedDesks.push(desk[0]);
        localStorage.setItem("desks", JSON.stringify(state.desks));
        localStorage.setItem("users", JSON.stringify(state.users));
        console.log("stateuser", state.user);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ isLogged: state.isLogged, user: state.user })
        );
      },
      logout(state, payload) {
        state.isLogged = false;
        state.user = {};
        localStorage.removeItem("userInfo");
        console.log("commited");
      },
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
        if (state.users.length === 0 && !localStorage.getItem("users")) {
          // state.users = JSON.parse(localStorage.getItem("users"));
          localStorage.setItem("users", JSON.stringify(userData));
          state.users = userData;
        } else if (state.users.length === 0 && localStorage.getItem("users")) {
          state.users = JSON.parse(localStorage.getItem("users"));
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
      logoutAction(context, payload) {
        context.commit("logout");
      },
      rentDeskAction(context, payload) {
        context.commit("rentDesk", payload);
      },
      getUpdatedUsersAfterRegister(context, payload) {
        context.commit("getUpdatedUsersAfterRegister", payload);
      },
      cancelRentAction(context, payload) {
        context.commit("cancelRent", payload);
      },
    },
  });
