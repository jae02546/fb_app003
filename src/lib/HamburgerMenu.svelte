<script lang="ts">
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import { menuItems } from "./MenuItems";

  export let open = false;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

{#if open}
  <div class="menu">
    {#each menuItems as item, i}
      <p
        transition:fly={{ y: -15, delay: 50 * i }}
        on:click={() => {
          open = false;
          dispatch("changepage", item.id);
        }}
        on:keydown={() => {
          open = false;
          dispatch("changepage", item.id);
        }}
      >
        {item.title}
      </p>
    {/each}
  </div>

  <div
    class="bar"
    transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
  />
{/if}

<style>
  /* :global(html) {
        background: #1d1d2f;
    } */
  .menu {
    text-align: center;
    font-size: 1em; /* 1.5em;*/
    letter-spacing: 0.15em;
    padding: 1em;
    padding-top: 0;
    color: #eef;
  }
  p {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }
  p:hover {
    text-decoration: underline;
  }
  .bar {
    border-style: solid;
    border-color: white;
    border-width: 1px;
    height: 0;
  }
</style>
