<!-- +page.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
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
  import iconSiojyake007 from "../lib/icons/siojyake007.png";
  import { Hamburger } from "svelte-hamburgers";
  import HamburgerMenu from "../lib/HamburgerMenu.svelte";
  let open = false;

  //表示するページを選択する
  let selectedPage: string = "home";
  function handleChangePage(event: CustomEvent<string>): void {
    selectedPage = event.detail;
  }

  //画面幅でレイアウトを変える
  let isWide = true;
  onMount(() => {
    const handleResize = () => {
      isWide = window.innerWidth > 768;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

{#if isWide}
  <div class="app-container_wide">
    <Menu on:changepage={handleChangePage} />
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
{:else}
  <div class="app-container_narrow">
    <header>
      <div class="header-wrapper">
        <span class="icon">
          <img src={iconSiojyake007} alt="jae02546" class="custom-svg-icon" />
        </span>
        jae02546
      </div>
      <div class="hamburger-wrapper">
        <Hamburger
          bind:open
          --color="white"
          --padding="0px"
          --layer-height="2px"
          --layer-width="20px"
          --layer-spacing="4px"
        />
        <HamburgerMenu bind:open on:changepage={handleChangePage} />
      </div>
    </header>

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
{/if}

<style>
  .app-container_wide {
    display: flex;
  }
  .app-container_narrow {
    display: flex;
    flex-direction: column;
  }
  .page {
    flex-grow: 1;
    padding: 0.5rem; /*1rem;*/
  }

  header {
    background-color: #333;
  }
  .header-wrapper {
    padding: 0.5rem 0rem 0rem 0rem;
    /* padding: 0.5rem; */
    color: #fff;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* flex-grow: 1; */
  }
  .icon {
    margin-right: 0.5rem;
  }
  .custom-svg-icon {
    width: 1em;
    height: 1em;
    /* vertical-align: -0.125em; */
  }

  .hamburger-wrapper {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-between; */
    padding: 0rem 0rem 0.5rem 0.5rem;
    /* color: #fff; */
  }
</style>
