<template>
  <div class="nav-main">
    <ul>
      <img
        class="main-logo"
        v-bind:src="require('../assets' + '/butterfly-white-text.png')"
        alt
      />
      <br/>
      <p onclick="createPopUp(buildArtistForm())"
        >artists: get in touch</p
      >
      <br/>
      <p onclick="createPopUp(buildNetworkForm())"
        >creatives: join our network</p
      >
      <br/>
      <p onclick="createPopUp(buildFanForm())">subscribe: stay in tune</p>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().toLocaleString(),
    };
  },
  created: function() {},
  methods: {},
};
</script>

<style lang="scss">
.centered-link {
}

body {
  background-color: #0a0a0a !important;
}

.main-logo {
  padding-top: 30px;
  justify-content: center;
  width: 30%;
}

@media screen and (max-width: 812px) {
  /* styles here for mobile only */
  .main-logo {
    width: 90%;
  }
  ul {
    width: 100%;
    padding-left: 0px;
  }
  .nav-main {
    padding-top: 50px;
    width: 100%;
  }
}

@media screen and (min-width: 800px) {
  /* styles here for desktop only */
}

.colored-text {
  animation: text 3s 1;

  box-shadow: 5px 10px white;
}
@keyframes text {
  0% {
    box-shadow: 5px 10px black;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}
.nav-main {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Courier New", Courier, Monaco;
  ul {
    list-style-type: none;

    li {
      padding: 0px 14px 14px 0px;
      margin-left: 20px;
      font-size: 16px;
      &:hover {
        background-color: limegreen;
        cursor: pointer;
      }
    }
    p {
      font-size: 18px;
      padding: 20px;
      font-weight: 600;
      &:hover {
        color: limegreen;
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
