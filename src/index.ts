import Header from "./components/Header";
import User from "./components/User";

// SECTION polyfill
import "whatwg-fetch";
import "core-js/stable";
import "regenerator-runtime/runtime";

const App = async () => {
  document.getElementById("header")!.innerHTML = Header();
  document.getElementById("user")!.innerHTML = await User();
};

App();
