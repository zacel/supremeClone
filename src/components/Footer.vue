<template>
  <div class="footer-main">
    <router-link to="/">Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.footer-main {
  bottom: 20px;
  left: 0px;
  position: absolute;
  width: 100%;
  a {
    color: white;
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