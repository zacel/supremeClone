<template>
  <div class="container">
    <div class="content-main">
      <img v-bind:src="require('../assets' + this.mainImageURL)" alt />
      <div class="content-main__inner">
        <h1>{{this.title}}</h1>
         <p
          v-for="item in this.desc"
          :key="item"
            >
            {{item}}
           </p>
       
        <p></p>
      </div>
    </div>
    <router-link class="nav-link" to="/services">Back</router-link>
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
body {
  background-color: white;
}
.router-link-active {
  color: #202020 !important;
  }
.content-main {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto;
  align-items:center;
  align-content: center;
  background-color: white;

  &__inner {
    width: 400px;

    h1 {
      color: #202020;
    }

    p{
        color:#202020;
    }
  }
}
</style>