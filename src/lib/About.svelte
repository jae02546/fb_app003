<script>
  import image from "../lib/icons/siojyake007.png";
  export let description =
    "ITエンジニアしてました。今は趣味でアプリ作ってます、鉄道関連のアプリが多い。乗り鉄、駅メモラー。";
  export let twitterHandles = ["@salted_salmon", "@jae02546", "@jae02546bot"];
</script>

<div class="intro-container">
  <img class="image" src={image} alt="siojyake007" />
  <div class="info">
    <div class="description">{description}</div>
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
    justify-content: center;
    background-color: #f8f8f8;
    color: #333;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 800px; /* 最大幅を指定 */
    margin: 0 auto; /* 左右のマージンを自動設定して中央に寄せる */
  }

  .image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 1rem;
    object-fit: cover;
    border: 1px solid #666;
  }

  .info {
    font-family: "Arial", sans-serif;
  }

  .description
   {
    font-size: 1rem;
  }

  .name {
    font-size: 0.8rem;
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
