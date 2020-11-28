<template>
  <div class="footer-main">
    
    <span onclick="goTo('https://www.facebook.com/MonarchMusicMarketing')">
      <img class="social-link" v-bind:src="require('../assets/facebook.png')" alt />
    </span>
    <span onclick="goTo('https://www.instagram.com/monarch.music.group/')">
      <img class="social-link" v-bind:src="require('../assets/instagram.png')" alt />
    </span>
  </div>
</template>

<style lang="scss" scoped>

.social-link {
  width: 40px;
  padding-left:1px;
  padding-right: 1px;
}

.footer-main {
  padding-top: 200px;
  bottom: 20px;
  left: 0px;
  //position: fixed;
  width: 100%;
  a {
    color: #202020;
    text-decoration: none;
    font-family: "Courier New", Courier, Monaco;
    font-size: 18px;
    &:hover {
      background-color: limegreen;
      cursor: pointer;
    }
  }
}
</style>