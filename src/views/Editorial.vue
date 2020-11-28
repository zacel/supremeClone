<template>
  <div class="nav-main">
    <ul>
      <img
        class="main-logo"
        v-bind:src="require('../assets' + '/butterfly-white-text.png')"
        alt
      />
      <br />
      <h1 class="no-italic" ref="editorials">Monarch Editorial</h1>

      <li
        class="editorial-list-item"
        v-for="editorial in editorials"
        :key="editorial.id"
        v-on:click="goTo(editorial.fields.Attachments[0].url)"
      >
        <h2>{{ editorial.fields.Name }}</h2>
        <span class="date">{{
          new Date(editorial.createdTime).toDateString()
        }}</span>
        <br />
        <span>{{ editorial.fields.Description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editorials: [],
      loadedEditorials: false,
    };
  },
  created: function() {},
  methods: {
    goTo(url) {
      window.goTo(url);
    },
    getEditorials() {
      if (!this.loadedEditorials) {
        fetch("/load_editorials.php", {
          method: "GET",
        }).then(async (res) => {
          var body = await res.json();
          console.log(body);
          this.editorials = body;
          this.loadedEditorials = true;
        });
      }

      /* this.$axios.get('/load_editorials.php').then((res) => {
              var data = res.data;
              console.log(data);
          }) */
    },
  },
  mounted() {
    this.getEditorials();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.no-italic {
  font-style: normal !important;
}

.date {
  font-style: italic;
  font-size: small;
}
.editorial-list-item {
  padding-top: 5px;
  padding-bottom: 5px;
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

  .editorial-list-item {
    width: 50%;
    padding-left: 25% !important;
    padding-right: 25% !important;
  }
  .nav-main {
      ul {
          li {
            margin-left: 0px;
          }
      }
  }
  
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
    padding-left: 0;
    li {
      padding: 0px 14px 14px 0px;
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
    margin-bottom: 0px;
  }
  h3 {
    font-family: "Courier New", Courier, Monaco;
    font-size: 12px;
    margin-bottom: 80px;
    font-weight: 600;
  }
  h2 {
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
</style>
