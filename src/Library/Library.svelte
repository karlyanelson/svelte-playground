<script>
  import BookGrid from './BookGrid.svelte';
  import Button from '../common/Button.svelte';

  const books = [
    {
      "id": 1,
      "title": "Little Women",
      "authoer": "Louisa May Alcott",
      "cover": "",
      "about": "Sisters learn to live in gratitude for each other.",
      "variation": 0
    },
    {
      "id": 2,
      "title": "Fahrenheight 451",
      "authoer": "Ray Bradbury",
      "cover": "",
      "about": "Enter a dystopian future where books with ideas are dangerous, controlled, and burned.",
      "variation": 0
    }
  ];
</script>

<style></style>

<header>
  <span class="preamble">Welcome to the LIbrary</span>
  <h1>Library</h1>
</header>

<p class="greeting">
  This is a library
</p>

<Button>+ Add a Book</Button>

<BookGrid books={books} />  
