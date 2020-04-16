<template>
  <div class="container">
    <h1>Premo</h1>

    <div class="shop-main">
      <div class="scrollmenu">
        <a
          class="shop-item"
          v-for="item in content"
          :key="item.id"
          v-bind:style="{ 'background-image': 'url(' + require('../assets' + item.slimImageURL) + ')' }"
        >
          <router-link class="shop-item-inner" :to="`/item/${item.id - 1}`"></router-link>
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      content: this.$locale["items"]
    };
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped >
.container {
  margin: auto;
  padding-top: 180px;
}
h1 {
  margin-top: 0px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-style: italic;
  margin-bottom: 0px;
  color: white;
  padding-bottom: 40px;
}
.shop-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .shop-item {
    background-repeat: no-repeat;
    border: white solid 1px;
    background-position-y: center;
    &:hover {
      background-color: rgb(48, 235, 117);
      opacity: 0.8;
    }
  }
}
div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  width: 300px;
  height: 375px;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  height: 90%;
  width: 30px;
}
</style>