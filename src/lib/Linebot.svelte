<script>
    import icon from "./icons/linebot.svg";
    import image from "./image/linebot2.png";
  
    const items = [
      {
        id: "linebot",
        iconSrc: icon,
        title: "鉄道路線bot",
        info: "全国の鉄道路線を、1時間毎にツイートするTwitterのbotです。",
        dlInfo: "https://twitter.com/jae02546bot",
        dlUrl: "https://twitter.com/jae02546bot",
        imgSrc: image,
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
      <a href={items[0].dlUrl} target="_blank" rel="noopener noreferrer" class="twitter-link">
        {items[0].dlInfo}
      </a>
      <img class="main-image" src={items[0].imgSrc} alt={items[0].imgAlt} />
    </div>
  </div>
  
  <style>
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
    .description {
      margin-top: 8px; /* 説明文の上の余白を設定 */
    }
    .twitter-link {
      display: block; /* リンクをブロック要素にする */
      margin-top: 8px; /* リンクの上の余白を設定 */
    }
    .main-image {
      display: block; /* 画像をブロック要素にする */
      margin-top: 8px; /* 画像の上の余白を設定 */
      width: 100%; /* 画像の幅を100%にする */
      max-width: 500px; /* 画像の最大幅を指定 */
    }
  </style>
  