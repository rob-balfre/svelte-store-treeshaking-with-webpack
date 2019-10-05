<script>
  import flatpickr from "flatpickr";
  import { onMount } from "svelte";

  import { bar } from "./store";

  let calendarElem = undefined;

  onMount(() => {
    flatpickr(calendarElem, {});
  });
</script>

<h1>Component B</h1>

<p>{bar}</p>

<div bind:this={calendarElem} />
