import { count } from "../globals/store.js";

export default function clickHandler(event) {
  if (event.target.matches("button")) {
    console.log("hey");
    count.increment();
  }
}
