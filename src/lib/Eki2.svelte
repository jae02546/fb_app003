<script>
  import icon from "./icons/eki2.svg";
  import image from "./image/eki2.png";

  const items = [
    {
      id: "eki2",
      iconSrc: icon,
      title: "駅並べ2.0",
      info: "北海道から九州・沖縄まで、全国に9000以上ある駅を路線毎に並べるゲームです。Google Playよりダウンロード出来ます。",
      dlInfo: "https://play.google.com/store/apps/details?id=io.github.jae02546.ekinarabe2",
      dlUrl:
        "https://play.google.com/store/apps/details?id=io.github.jae02546.ekinarabe2",
      imgSrc: image,
      imgAlt: "駅並べ2.0の画像",
      manUrl: "https://jae02546.github.io/ekinarabe2/",
    },
  ];
</script>

<div class="button-item">
  <div class="box">
    <div class="title-icon-wrapper">
      <img class="icon" src={items[0].iconSrc} alt="ekiword" />
      <h2 class="title">{items[0].title}</h2>
    </div>
    <p class="description">{items[0].info}</p>
    <a href={items[0].dlUrl} target="_blank" rel="noopener noreferrer">
      {items[0].dlInfo}
    </a>
    <img class="main-image" src={items[0].imgSrc} alt={items[0].imgAlt} />
  </div>
</div>

<p><br />取扱説明書は以下となります。<br /></p>
<iframe class="full-height" src={items[0].manUrl} title="ekiword website" />

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
  .full-height {
    width: 100%;
    height: 90vh; /*100vh*/
    border: none;
  }
</style>
