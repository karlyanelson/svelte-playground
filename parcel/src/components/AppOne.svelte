<script>
import { count } from "../globals/store.js";

  export let name;
</script>

<style>
  h2 {
    text-align: center;
  }
</style>

<h2>Hello {name}!</h2>
<p>count: {$count}</p>