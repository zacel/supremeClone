<template>
  <div class="container">
    
    <h1><router-link to="/"><span style="color: white">Contact Us</span></router-link></h1>
    <div class="centered">

      <img src="logo_white.png" class="logo-main" />
      <p id="contact-link" onclick='goTo("mailto:hello@monarchmusicgroup.com")'>hello@MonarchMusicGroup.com</p>
    
     
    
    </div>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      content: this.$locale["items"],
    };
  }
};
</script>


<style lang="scss" scoped>

p {
      font-size: 18px;
      padding: 20px;
      font-weight: 600;
      &:hover {
        color: limegreen;
        cursor: pointer;
      }
    }

.logo-main {
    width: 40%;
}

.container {
  background-color: #0a0a0a;
  color: white;
}
body {
  background-color: black !important;
  
}





@media screen and (min-width: 800px) {
  //desktop only
  div.scrollmenu {
    width: 600px;
  }
}

@media screen and (max-width: 812px) {
  //mobile only
  .container {
    height: 175%;
  }

  div.scrollmenu {
    width: 85%;
  }

}


h1 {
  margin-top: 0px;
  font-family: "Courier New", Courier, Monaco;
  margin-bottom: 0px;
  color: #202020;
  padding-bottom: 40px;
}
.services-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 100px;
  background-color: white;
  flex-direction: column;

  .services-item {
    background-repeat: no-repeat;
    border: white solid 1px;
    background-position: center;
    background-size: cover;
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
  height: 375px;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  height: 90%;
  width: 60px;
}
</style>
