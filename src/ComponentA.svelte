<script>
  import flatpickr from "flatpickr";
  import { onMount } from "svelte";

  import { foo } from "./store";

  let calendarElem = undefined;

  onMount(() => {
    flatpickr(calendarElem, {});
  });
</script>

<h1>Component A</h1>

<p>{foo}</p>

<div bind:this={calendarElem} />
