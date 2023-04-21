<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import iconStaSearch from "./icons/sta_search.svg";
  import iconLineSearch from "./icons/line_search.svg";
  import iconLineList from "./icons/line_list.svg";
  import iconLinebot from "./icons/linebot.svg";
  import iconEki2 from "./icons/eki2.svg";
  import iconEkiword from "./icons/ekiword.svg";
  import iconWeirdScrollCalendar from "./icons/WeirdScrollCalendar_icon.png";
  import imageStaSearch from "./images/sta_search.png";
  import imageLineSearch from "./images/sta_search.png";
  import imageLineList from "./images/sta_search.png";
  import imageLinebot from "./images/linebot.png";
  import imageEki2 from "./images/eki2.png";
  import imageEkiword from "./images/ekiword.png";
  import imageWeirdScrollCalendar from "./images/WeirdScrollCalendar.png";

  const dispatch = createEventDispatcher();

  const buttonItems = [
    {
      id: "staSearch",
      iconSrc: iconStaSearch,
      title: "駅名検索",
      description: "全国の駅名を検索できます。",
      imgSrc: imageStaSearch,
      imgAlt: "駅名検索の画像",
    },
    {
      id: "lineSearch",
      iconSrc: iconLineSearch,
      title: "路線名検索",
      description: "全国の路線名を検索できます。",
      imgSrc: imageLineSearch,
      imgAlt: "路線名検索の画像",
    },
    {
      id: "lineList",
      iconSrc: iconLineList,
      title: "路線,駅一覧",
      description: "全国の鉄道路線と駅の一覧です。",
      imgSrc: imageLineList,
      imgAlt: "路線,駅一覧の画像",
    },
    {
      id: "linebot",
      iconSrc: iconLinebot,
      title: "鉄道路線bot",
      description: "全国の鉄道路線を1時間毎にツイートする、Twitterのbotです。",
      imgSrc: imageLinebot,
      imgAlt: "鉄道路線botの画像",
    },
    {
      id: "eki2",
      iconSrc: iconEki2,
      title: "駅並べ2.0",
      description: "全国9000以上の駅を、路線毎に並べるゲームです。Google Playよりダウンロード出来ます。",
      imgSrc: imageEki2,
      imgAlt: "駅並べ2.0の画像",
    },
    {
      id: "ekiword",
      iconSrc: iconEkiword,
      title: "駅word",
      description:
        "シャッフルされた駅名の文字を組み合わせ、元の駅名に戻すゲームです。Google Playよりダウンロード出来ます。",
      imgSrc: imageEkiword,
      imgAlt: "駅wordの画像",
    },
    {
      id: "weirdScrollCalendar",
      iconSrc: iconWeirdScrollCalendar,
      title: "変なスクロールカレンダー",
      description:
        "縦横斜めにスクロールするカレンダーです。Google Playよりダウンロード出来ます。",
      imgSrc: imageWeirdScrollCalendar,
      imgAlt: "変なスクロールカレンダーの画像",
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
  /* 以下を追加 */
  main {
    display: flex;
    justify-content: center;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center; /* flex-start から変更 */
    max-width: 1000px; /* 最大幅を指定 */
  }
  /* ここまで追加 */
  
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
