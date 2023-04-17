<!-- about.svelte -->
<script>
  import image from "../lib/image/siojyake007.png";
  export let description1 =
    "元swエンジニア。趣味でプログラミングしてます、鉄道関連のアプリが多い。乗り鉄、駅メモラー。";
  // export let description2 = "";
  export let twitterHandles = ["@salted_salmon", "@jae02546", "@jae02546bot"];
</script>

<div class="intro-container">
  <img class="image" src={image} alt="Twitter profile" />
  <div class="info">
    <div class="description1">{description1}</div>
    <!-- <div class="description2">{description2}</div> -->
    <div class="name">
      Twitter
      {#each twitterHandles as handle}
        <a
          href={`https://twitter.com/${handle}`}
          target="_blank"
          rel="noopener noreferrer">{handle}</a
        >
      {/each}
    </div>
  </div>
</div>

<style>
  .intro-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f8f8f8;
    color: #333;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .image {
    width: 50px;
    height: 50px;
    border-radius: 5px; /* この値を変更 */
    margin-right: 1rem;
    object-fit: cover;
    border: 1px solid #666;
  }

  .info {
    font-family: "Arial", sans-serif;
  }

  .description1 {
    font-size: 1rem;
    /* margin-bottom: 0.5rem; */
    /* color: #666; */
  }

  /* .description2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  } */

  .name {
    font-size: 0.8rem;
    /* font-weight: bold; */
    line-height: 1.5;
  }

  .name a {
    color: inherit;
    text-decoration: none;
    margin-right: 0.5rem;
  }

  .name a:hover {
    text-decoration: underline;
  }
</style>
