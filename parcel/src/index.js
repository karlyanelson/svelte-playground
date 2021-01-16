import AppOne from "./components/AppOne.svelte";
import AppTwo from "./components/AppTwo.svelte";
import clickHandler from "./handlers/clickHandler";

new AppTwo({
  target: document.querySelector("#app2"),
  props: {
    name: "Svelte App 2",
  },
});

new AppOne({
  target: document.querySelector("#app1"),
  props: {
    name: "Svelte App 1",
  },
});

document.addEventListener("click", clickHandler);
