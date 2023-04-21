<script>
  import icon from "./icons/ekiword.svg";
  import image from "./images/ekiword.png";
  let title = "駅word";
  let description =
    "シャッフルされた駅名の文字を組み合わせ、元の駅名に戻すゲームです。Google Playよりダウンロード出来ます。";
  let ahref =
    "https://play.google.com/store/apps/details?id=io.github.jae02546.ekiword";
  let manUrl = "https://jae02546.github.io/ekiword/";
  let manDescription = "取扱説明書は以下となります。";
</script>

<div class="main-container">
  <div class="header">
    <img class="icon" src={icon} alt={title} />
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

  <div class="man-description-container">
    <div class="man-description-text">{manDescription}</div>
  </div>
  <iframe class="full-height" src={manUrl} title="ekiword website" />
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
    max-width: 800px; /* 最大幅を指定 */
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

  .man-description-container {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .man-description-text {
    text-align: left;
  }

  .full-height {
    width: 100%;
    height: 90vh; /*100vh*/
    border: none;
  }
</style>
