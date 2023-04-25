<!-- Menu.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import iconSiojyake007 from "./icons/siojyake007.png";
  import iconHome from "./icons/home.svg";
  import iconSta from "./icons/sta_search.svg";
  import iconLine from "./icons/line_search.svg";
  import iconList from "./icons/line_list.svg";
  import iconLinebot from "./icons/linebot.svg";
  import iconEki2 from "./icons/eki2.svg";
  import iconEkiword from "./icons/ekiword.svg";
  import iconWeirdScrollCalendar from "./icons/WeirdScrollCalendar_icon.png";
  import iconAbout from "./icons/about.svg";

  const dispatch = createEventDispatcher();

  const menuItems = [
    { id: "home", icon: iconHome, title: "Home" },
    { id: "staSearch", icon: iconSta, title: "駅名検索" },
    { id: "lineSearch", icon: iconLine, title: "路線名検索" },
    { id: "lineList", icon: iconList, title: "路線,駅一覧" },
    { id: "linebot", icon: iconLinebot, title: "鉄道路線bot" },
    { id: "eki2", icon: iconEki2, title: "駅並べ2.0" },
    { id: "ekiword", icon: iconEkiword, title: "駅word" },
    {
      id: "weirdScrollCalendar",
      icon: iconWeirdScrollCalendar,
      title: "変なスクロールカレンダ",
    },
    { id: "about", icon: iconAbout, title: "About" },
  ];

  function changePage(page: string): void {
    dispatch("changepage", page);
  }
</script>

<aside class="menu">
  <header>
    <div class="header-wrapper">
      <span class="icon">
        <img src={iconSiojyake007} alt="jae02546" class="custom-svg-icon" />
      </span>
      jae02546
    </div>
  </header>
  <ul class="menu-list">
    {#each menuItems as item}
      <li>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="menu-item"
          tabindex="0"
          on:click={() => changePage(item.id)}
          on:keydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              changePage(item.id);
            }
          }}
        >
          <span class="icon">
            <img src={item.icon} alt={item.id} class="custom-svg-icon" />
          </span>
          {item.title}
        </a>
      </li>
    {/each}
  </ul>
</aside>

<style>
  header {
    background-color: #333;
  }
  .header-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: #fff;
    /* margin: 0; */
  }

  .menu {
    min-width: 100px;
    max-width: 150px;
    background-color: #f0f0f0;
  }
  .menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .menu-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .menu-item:focus {
    outline: none;
    background-color: #f5f5f5;
  }
  .icon {
    margin-right: 0.5rem;
  }
  .custom-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
</style>
