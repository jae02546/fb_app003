<!-- App.svelte -->
<script lang="ts">
  import Menu from "../lib/Menu.svelte";
  import Home from "../lib/Home.svelte";
  import Sta from "../lib/Sta.svelte";
  import Line from "../lib/Line.svelte";
  import List from "../lib/List.svelte";
  import About from "../lib/About.svelte";
  import Eki2 from "$lib/Eki2.svelte";
  import Linebot from "$lib/Linebot.svelte";
  import Ekiword from "$lib/Ekiword.svelte";

  let selectedPage: string = "home";

  function handleChangePage(event: CustomEvent<string>): void {
    selectedPage = event.detail;
  }
</script>

<head>
  <!-- <link rel="stylesheet" href="/node_modules/bulma/css/bulma.min.css" /> -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
  />
</head>

<div class="app-container">
  <Menu on:changepage={handleChangePage} />

  <div class="page">
    <div class="page">
      {#if selectedPage === "home"}
        <Home on:changepage={handleChangePage} />
      {:else if selectedPage === "sta"}
        <Sta />
      {:else if selectedPage === "line"}
        <Line />
      {:else if selectedPage === "list"}
        <List />
      {:else if selectedPage === "linebot"}
        <Linebot />
      {:else if selectedPage === "eki2"}
        <Eki2 />
      {:else if selectedPage === "ekiword"}
        <Ekiword />
      {:else if selectedPage === "about"}
        <About />
      {/if}
    </div>
  </div>
</div>

<style>
  .app-container {
    display: flex;
  }

  .page {
    flex-grow: 1;
    padding: 1rem;
  }
</style>
