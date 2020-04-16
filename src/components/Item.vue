<template>
  <div class="container">
    <div class="content-main">
      <img v-bind:src="require('../assets' + this.mainImageURL)" alt />
      <div class="content-main__inner">
        <h1>{{this.title}}</h1>
        <p>{{this.price}}</p>
        <p>{{this.desc}}</p>
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
      title: "",
      price: "",
      desc: "",
      mainImageURL: "",
      content: this.$locale["items"]
    };
  },
  created: function() {
    let itemObj = this.content[this.$route.params.id];
    this.title = itemObj.title;
    this.price = itemObj.price;
    this.mainImageURL = itemObj.mainImg;
    this.desc = itemObj.desc
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.content-main {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto;
  align-items:center;
  align-content: center;
  height: 98vh;

  &__inner {
    background-color: limegreen;
    height: 300px;
    width: 400px;

    h1 {
      color: white;
    }

    p{
        color:white;
    }
  }
}
</style>