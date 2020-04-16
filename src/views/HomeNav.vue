<template>
  <div class="nav-main">
    <ul>
      <h1>Premo</h1>
      <h3>{{currentDate}} SEA</h3>
      <router-link to="/">projects</router-link>
      <router-link to="/shop">shop</router-link>
      <router-link to="/shop">about</router-link>
      <router-link to="/shop">random</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleString()
    };
  },
  created: function() {},
  methods: {}
};
</script>

<style lang="scss">
.nav-main {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Courier New", Courier, Monaco;
  ul {
    list-style-type: none;
    text-align: left;
    li {
      padding: 0px 14px 14px 0px;
      margin-left: 20px;
      width: min-content;
      font-size: 14px;
      &:hover {
        background-color: limegreen;
        cursor: pointer;
      }
    }
    a {
      text-decoration: none;
      color: white;
      padding: 0px 0px 0px 0px;
      margin: 0px 0px 20px 10px;
      width: min-content;
      font-size: 12px;
      display: flex;
      font-weight: 600;
      &:hover {
        background-color: limegreen;
        cursor: pointer;
      }
    }
  }
  h1 {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-style: italic;
    margin-bottom: 0px;
  }
  h3 {
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    margin-bottom: 80px;
    font-weight: 600;
  }
}
</style>