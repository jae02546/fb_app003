<!-- IntroAlt.svelte -->
<script>
  import image from "../lib/image/siojyake007.png";
  export let name = "山田 太郎";
  export let title = "フロントエンドエンジニア";
  export let description =
    "高速でレスポンシブなウェブアプリケーションを開発することを専門としています。";
  </script>
  
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
    }
  
    .image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 1rem;
      object-fit: cover;
      border: 2px solid #333;
    }
  
    .info {
      font-family: "Arial", sans-serif;
    }
  
    .name {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  
    .title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #666;
    }
  
    .description {
      font-size: 1rem;
      line-height: 1.5;
    }
  </style>
  
  <div class="intro-container">
    <img class="image" src="{image}" alt="{name}" />
    <div class="info">
      <div class="name">{name}</div>
      <div class="title">{title}</div>
      <div class="description">{description}</div>
    </div>
  </div>
  