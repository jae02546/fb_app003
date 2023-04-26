<!-- +page.svelte -->
<script lang="ts">
  import Menu from "../lib/Menu.svelte";
  import Home from "../lib/Home.svelte";
  import StaSearch from "../lib/StaSearch.svelte";
  import LineSearch from "../lib/LineSearch.svelte";
  import LineList from "../lib/LineList.svelte";
  import Linebot from "$lib/Linebot.svelte";
  import Eki2 from "$lib/Eki2.svelte";
  import Ekiword from "$lib/Ekiword.svelte";
  import WeirdScrollCalendar from "$lib/WeirdScrollCalendar.svelte";
  import About from "../lib/About.svelte";

  let selectedPage: string = "home";

  function handleChangePage(event: CustomEvent<string>): void {
    selectedPage = event.detail;
  }
</script>

<div class="app-container">
  <Menu on:changepage={handleChangePage} />

  <div class="page">
    <div class="page">
      {#if selectedPage === "home"}
        <Home on:changepage={handleChangePage} />
      {:else if selectedPage === "staSearch"}
        <StaSearch />
      {:else if selectedPage === "lineSearch"}
        <LineSearch />
      {:else if selectedPage === "lineList"}
        <LineList />
      {:else if selectedPage === "linebot"}
        <Linebot />
      {:else if selectedPage === "eki2"}
        <Eki2 />
      {:else if selectedPage === "ekiword"}
        <Ekiword />
      {:else if selectedPage === "weirdScrollCalendar"}
        <WeirdScrollCalendar />
      {:else if selectedPage === "about"}
        <About />
      {/if}
    </div>
  </div>
</div>

<style>
  /* 追加 */
  @media (max-width: 767px) {
    .app-container > Menu {
      display: none;
    }
  }

  .app-container {
    display: flex;
  }

  .page {
    flex-grow: 1;
    padding: 0.5rem; /*1rem;*/
  }
</style>
