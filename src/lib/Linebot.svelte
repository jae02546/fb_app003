<script>
  import icon from "./icons/linebot.svg";
  import image from "./images/linebot2.png";
  let title = "鉄道路線bot";
  let description = "全国の鉄道路線を、1時間毎にツイートするTwitterのbotです。";
  let ahref = "https://twitter.com/@jae02546bot";
</script>

<div class="main-container">
  <div class="header">
    <img class="icon" src={icon} alt="siojyake007" />
    <div class="info">
      <div class="title">{title}</div>
      <div class="description">{description}</div>
      <div class="ahref">
        <a href={ahref} target="_blank" rel="noopener noreferrer">{ahref}</a>
      </div>
    </div>
  </div>
  <div class="image-container">
    <img class="main-image" src={image} alt={image} />
  </div>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    color: #333;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* 最大幅を指定 */
    margin: 0 auto; /* 左右のマージンを自動設定して中央に寄せる */
  }

  .header {
    display: flex;
    align-items: center;
  }

  .icon {
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

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .ahref {
    font-size: 1rem;
    line-height: 1.5;
  }

  .ahref a {
    color: inherit;
    text-decoration: none;
    margin-right: 0.5rem;
  }

  .ahref a:hover {
    text-decoration: underline;
  }

  .image-container {
    margin-top: 1rem;
  }
</style>
