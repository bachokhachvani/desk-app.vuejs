export default function ({ store, from, route, redirect }) {
  const mode = store.getters.mode;
  const name = route.name;
  if (mode !== "admin" && (name === "users" || name === "desks")) {
    redirect("/home");
  }

  if (mode !== "guest" && (name === "register" || name === "login")) {
    redirect("/home");
  }

  if (mode === "guest" && name === "profile") {
    redirect("/login");
  }

  console.log("mode", mode);

  if (mode !== "room_manager" && mode !== "admin" && name === "myrooms") {
    redirect("/home");
  }
}
