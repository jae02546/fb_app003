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

  //表示するページを選択する
  let selectedPage: string = "home";
  function handleChangePage(event: CustomEvent<string>): void {
    selectedPage = event.detail;
  }

  //ハンバーガーメニューのクリックで表示非表示を切り替えます
  function toggleMenu(): void {
    isMenuVisible = !isMenuVisible;
  }

  // 画面幅が変わったときにメニューの表示状態を更新する
  let isMenuVisible = true;
  let isHamburgerMenuVisible = false;

  // $: {
  //   isHamburgerMenuVisible = window.innerWidth <= 768;
  // }

  onMount(() => {
    const handleResize = () => {
      isMenuVisible = window.innerWidth > 768;
      isHamburgerMenuVisible = window.innerWidth <= 768;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

{#if isMenuVisible}
  <div class="app-container">
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
  <div class="app-container2">
    <header>
      <div class="header-wrapper">
        <div class="hamburger-menu">
          <span />
          <span />
          <span />
        </div>
        <div class="center-content">
          <span class="icon">
            <img src={iconSiojyake007} alt="jae02546" class="custom-svg-icon" />
          </span>
          jae02546
        </div>
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
  .app-container {
    display: flex;
  }

  .app-container2 {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    color: #fff;
  }
  .center-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  .icon {
    margin-right: 0.5rem;
  }
  .custom-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
  .hamburger-menu {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 24px;
    height: 24px;
  }
  .hamburger-menu span {
    display: block;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
  }
</style>
