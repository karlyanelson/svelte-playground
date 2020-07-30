<style></style>

<script>
  export let books = [];
</script>

<ul>
{#each books as book}
  <li>{book.title}</li>
{/each}
</ul>