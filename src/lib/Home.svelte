<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { homeItems } from "./MenuItems";

  const dispatch = createEventDispatcher();

  function changePage(page: string): void {
    dispatch("changepage", page);
  }
</script>

<main>
  <div class="button-container">
    {#each homeItems as item}
      <div class="button-item">
        <div
          class="box"
          on:click={() => changePage(item.id)}
          on:keydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              changePage(item.id);
            }
          }}
        >
          <div class="title-icon-wrapper">
            <img class="icon" src={item.iconSrc} alt={item.id} />
            <h2 class="title">{item.title}</h2>
          </div>
          <p class="description">{item.description}</p>
          <img class="main-image" src={item.imgSrc} alt={item.imgAlt} />
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 18px;
  }

  .title-icon-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .icon {
    width: 32px;
    height: 32px;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-content: flex-start;
    /* max-width: 1000px; */
    margin: 0 auto;
  }
  .button-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .box {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 1.5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 300px;
    height: 100%;
    cursor: pointer;
    flex: 1;
  }
  .description {
    flex-grow: 1;
  }
  .main-image {
    width: 100%;
    height: auto;
  }
</style>
