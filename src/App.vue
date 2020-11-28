<template>
  <div id="app">

  <Header />
    <router-view />

    <div class="top-pad"></div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header
  },
};
</script>

<style>
.top-pad {
  padding-top: 25%;
}

.nav-link {
  color: #202020;
  text-decoration: none;
  font-family: "Courier New", Courier, Monaco;
  font-size: 18px;
}
.nav-link:hover {
  background-color: limegreen;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0a0a0a;
  height: 98vh;
}

body {
  margin: 0;
  padding: 0;
}

.router-link-active {
  text-decoration: none !important;
  color: #202020;
}
</style>
