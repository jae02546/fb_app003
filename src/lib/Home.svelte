<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import iconSta from "./icons/sta.svg";
  import iconLinebot from "./icons/linebot.svg";
  import iconEki2 from "./icons/eki2.svg";
  import iconEkiword from "./icons/ekiword.svg";
  import imageSta from "./image/sta.png";
  import imageLinebot from "./image/linebot.png";
  import imageEki2 from "./image/eki2.png";
  import imageEkiword from "./image/ekiword.png";

  const dispatch = createEventDispatcher();

  const buttonItems = [
    {
      id: "sta",
      iconSrc: iconSta,
      title: "駅名検索",
      description: "全国の駅名を検索できます。",
      imgSrc: imageSta,
      imgAlt: "駅名検索の画像",
    },
    // {
    //   id: "line",
    // iconSrc: iconSta,
    //   title: "路線名検索",
    //   description: "全国の路線名を検索できます。",
    //   imgSrc: "path/to/line.jpg",
    //   imgAlt: "路線名検索の画像",
    // },
    // {
    //   id: "list",
    // iconSrc: iconSta,
    //   title: "路線,駅一覧",
    //   description: "全国の鉄道路線と駅の一覧です。",
    //   imgSrc: "path/to/list.jpg",
    //   imgAlt: "路線,駅一覧の画像",
    // },
    {
      id: "linebot",
      iconSrc: iconLinebot,
      title: "鉄道路線bot",
      description: "全国の鉄道路線を、1時間毎にツイートするTwitterのbotです。",
      imgSrc: imageLinebot,
      imgAlt: "鉄道路線botの画像",
    },
    {
      id: "eki2",
      iconSrc: iconEki2,
      title: "駅並べ2.0",
      description: "全国9000以上の駅を、路線毎に並べるゲームです。",
      imgSrc: imageEki2,
      imgAlt: "駅並べ2.0の画像",
    },
    {
      id: "ekiword",
      iconSrc: iconEkiword,
      title: "駅word",
      description:
        "シャッフルされた駅名の文字を組み合わせ、元の駅名に戻すゲームです。",
      imgSrc: imageEkiword,
      imgAlt: "駅wordの画像",
    },
  ];

  function changePage(page: string): void {
    dispatch("changepage", page);
  }
</script>

<main>
  <div class="button-container">
    {#each buttonItems as item}
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
  .title {
    font-size: 18px; /* タイトルのフォントサイズを変更 */
  }

  .title-icon-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .icon {
    width: 32px; /* アイコンの幅を変更 */
    height: 32px; /* アイコンの高さを変更 */
  }

  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
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
    width: 100%; /* .box img から変更 */
    height: auto;
  }
</style>
