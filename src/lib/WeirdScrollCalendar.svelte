<script>
  import icon from "./icons/WeirdScrollCalendar_icon.png";
  import image from "./images/WeirdScrollCalendar.png";
  let title = "変なスクロールカレンダ";
  let description =
    "縦横斜めにスクロールするカレンダーです。Google Playよりダウンロード出来ます。";
  let ahref =
    "https://play.google.com/store/apps/details?id=io.github.jae02546.WeirdScrollCalendar";
  let manDescription =
    "縦横斜めにスクロールするカレンダーです。カレンダーアプリですがスケジュールの表示や登録はできません。スワイプでカレンダーのスクロール、ピンチインアウトで拡大縮小します。横方向ピンチで日付の拡大縮小、縦方向ピンチで1行の曜日数が増減します。アクションバーの[今日]、1回タップで現状の拡縮状態で今日の日付を画面中心に表示、2回タップで起動時の表示状態に戻ります。";
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
