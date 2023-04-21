<script lang="ts">
  import { TableValue } from "./store/class";
  import { makeAnchorTag, makeInfo } from "./store/tools";
  import { onMount, onDestroy } from "svelte";
  import { getFsJson } from "./store/firestore";
  import { makeLineMap, makeStaMap } from "./store/make_map";
  import { searchSta } from "./store/search_map";
  import icon from "./icons/sta_search.svg";
  import xmark from "./icons/xmark.svg";
  let title = "駅名検索";
  let lineMap = new Map(); //路線データmap
  let staMap = new Map(); //駅データmap
  let searchText = ""; //検索文字列
  let matchType = 1; //検索方法
  let itemType = 1; //検索項目
  let lenType = 0; //文字数 0:指定なし 1-9:文字数 10:10文字以上
  let searchInfo = ""; //検索結果（件数、時間、日時）
  let tableFontSize = "is-size-6";

  const makeMap = async () => {
    //firestoreからjson配列取得
    let fsJson = await getFsJson();
    //map変換
    lineMap = makeLineMap(fsJson);
    staMap = makeStaMap(fsJson);
  };

  let tableData: TableValue[] = [];
  let no = 1;
  const search = async () => {
    const startTime = new Date();
    let foo = searchSta(
      lineMap,
      staMap,
      searchText,
      matchType,
      itemType,
      lenType
    );
    tableFontSize = window.innerWidth <= 1080 ? "is-size-7" : "is-size-6";
    tableData = [];
    no = 1;
    foo?.forEach((element) => {
      let line: string = "<br>";
      let url: string = makeAnchorTag(element.url) + "<br>";
      element.lvArr.forEach((element2) => {
        line += element2.name + (element2.close ? "（廃線）" : "") + "<br>";
        // line +=
        //   element2.lineNo6 +
        //   element2.name +
        //   (element2.close ? "（廃線）" : "") +
        //   "<br>";
        element2.urls.forEach((element2) => {
          url += makeAnchorTag(element2) + "<br>";
        });
      });
      let bar = new TableValue(
        no,
        element.name + (element.close ? "（廃駅）" : ""),
        // element.staNo9 + element.name + (element.close ? "（廃駅）" : ""),
        element.kana,
        element.prefectures,
        line,
        url
      );
      tableData.push(bar);
      no++;
    });
    tableData = tableData;

    if (searchText == "" && lenType == 0) {
      searchInfo = "検索文字列、または文字数を指定してください。";
    } else {
      const count = foo?.size === undefined ? 0 : foo?.size;
      const endTime = new Date();
      const runTime = (endTime.getTime() - startTime.getTime()) / 1000;
      searchInfo = makeInfo(count, runTime, endTime);
    }
    searchInfo = searchInfo;
  };

  onMount(async () => {
    await makeMap();
    console.log(
      "onMount lineMap.size:",
      lineMap.size,
      "staMap.size:",
      staMap.size
    );
  });

  onDestroy(() => {});
</script>

<div class="container is-fluid is-family-primary">
  <form class="box is-size-6">
    <div class="title-container">
      <img class="search-icon" src={icon} alt={title} />
      <div class="title-text">{title}</div>
    </div>
    <div class="field input-group">
      <input
        class="input is-primary mr-1"
        name="search"
        type="text"
        placeholder="検索文字列を入力してください"
        bind:value={searchText}
      />
      <span
        class="icon is-small is-right icon-clear"
        on:click={() => {
          searchText = "";
        }}
        on:keypress={() => {
          searchText = "";
        }}
      >
        <img class="icon-clear-img" src={xmark} alt="xmark" />
        <!-- <i class="fas fa-times" /> -->
      </span>
      <button class="button is-primary" on:click={search}>検索</button>
    </div>

    <div class="field is-flex is-align-items-center">
      <label class="custom-label mr-3" for="len-select">検索方法</label>
      <div class="control mr-3">
        <input
          type="radio"
          bind:group={matchType}
          name="match"
          value={1}
        />部分一致
        <input
          type="radio"
          bind:group={matchType}
          name="match"
          value={2}
        />前方一致
        <input
          type="radio"
          bind:group={matchType}
          name="match"
          value={3}
        />後方一致
        <input
          type="radio"
          bind:group={matchType}
          name="match"
          value={4}
        />完全一致
      </div>
    </div>

    <div class="field is-flex is-align-items-center">
      <label class="custom-label mr-3" for="len-select">検索項目</label>
      <div class="control mr-3">
        <input type="radio" bind:group={itemType} name="item" value={1} />駅名
        <input type="radio" bind:group={itemType} name="item" value={2} />かな
      </div>
    </div>

    <div class="field is-flex is-align-items-center">
      <label class="custom-label mr-3" for="len-select">文字数</label>
      <div class="control">
        <div class="select is-primary">
          <select bind:value={lenType} name="len" id="len-select">
            <option value={0}>指定なし</option>
            <option value={1}>1文字</option>
            <option value={2}>2文字</option>
            <option value={3}>3文字</option>
            <option value={4}>4文字</option>
            <option value={5}>5文字</option>
            <option value={6}>6文字</option>
            <option value={7}>7文字</option>
            <option value={8}>8文字</option>
            <option value={9}>9文字</option>
            <option value={10}>10文字以上</option>
          </select>
        </div>
      </div>
    </div>
  </form>

  <form class="box {tableFontSize}">
    <ul>
      <p>{searchInfo}</p>
      <table class="table is-striped is-bordered">
        {#if tableData.length !== 0}
          <thead>
            <tr>
              <th class="has-text-centered">No</th>
              <th class="has-text-centered">駅名</th>
              <th class="has-text-centered">かな</th>
              <th class="has-text-centered">都道府県</th>
              <th class="has-text-centered">路線名</th>
              <th class="has-text-centered">Wikipedia</th>
            </tr>
          </thead>
        {/if}
        <tbody>
          {#each tableData as data}
            <tr>
              <td class="is-vcentered">{@html data.no}</td>
              <td class="is-vcentered">{@html data.name}</td>
              <td class="is-vcentered">{@html data.kana}</td>
              <td class="is-vcentered">{@html data.prefectures}</td>
              <td class="is-vcentered">{@html data.line}</td>
              <td class="is-vcentered">{@html data.url}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </ul>
  </form>
</div>

<style>
  .title-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
    margin-left: 0px; /* ここを追加 */
  }

  .search-icon {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 1rem;
    object-fit: cover;
    border: 1px solid #666;
  }

  .title-text {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  /* .title-text {
    font-size: 24px;
    font-weight: bold;
  } */

  .input-group {
    position: relative;
    display: flex;
    max-width: 600px;
  }
  .input-group .icon-clear {
    position: absolute;
    top: 50%;
    right: 65px;
    padding-right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #a5a5a5;
    transition: color 0.3s ease;
  }
  .input-group .icon-clear:hover {
    color: #363636;
  }
  .custom-label {
    font-weight: normal;
  }

  .icon-clear img {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  .icon-clear img:hover {
    opacity: 1;
  }
</style>
