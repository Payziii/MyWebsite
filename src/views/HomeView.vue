<script setup></script>

<template>

  <head>
    <title>Payziii - {{ $t('title.home') }}</title>
  </head>
  <div class="basic">
    <div class="nickname">
      <img src="/payziii.jpg" class="avatar" />
      <h1>{{ $t('basic.hello') }} <span style="font-weight: 700; color: var(--green)">Payziii</span></h1>
    </div>
    <h2>{{ $t('basic.description_1') }}<br />{{ $t('basic.description_2') }}</h2>
    <div class="btns">
        <a class="btn" href="https://github.com/Payziii" target="_blank">
          <img src="/logos/github.png" />
          <p>GitHub</p>
        </a>
        <a class="btn" href="https://wakatime.com/@Payziii" target="_blank">
          <img src="/logos/wakatime.png" />
          <p>WakaTime</p>
        </a>
        <a class="btn" href="https://t.me/Payziii" target="_blank">
          <img src="/logos/tg.png" />
          <p>Telegram</p>
        </a>
        <a class="btn" href="https://t.me/Payzick" target="_blank">
          <img src="/logos/tg.png" />
          <p>{{ $t('basic.channel') }}</p>
        </a>
    </div>
  </div>
</template>

<style scoped>
.basic {
  margin-top: 100px;
  border-radius: 24px;
  border: 5px solid var(--border);
  width: 100%;
  height: 50%;
  padding: 50px;

  .nickname {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 40px;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.7);
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 24px;

      .btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding-left: 12px;
        padding-right: 12px;
        gap: 10px;
        border-radius: 12px;
        border: 2px solid var(--border);
        color: var(--white);
        transition: all 0.3s ease;
      }

      .btn img {
        width: 1.8rem;
        height: 1.8rem;
      }

      .btn p {
        line-height: 0;
        font-size: 1.5rem;
      }

      .btn:hover {
        scale: 1.1;
      }
  }
}
</style>