<template>
  <div class="container">
    
    <h1><router-link to="/"><span style="color: white">Monarch Music Group Marketing Services</span></router-link></h1>
    <div class="centered">
      <p>
         
Partner with <b>Monarch</b> to develop custom, data-driven marketing campaigns that embrace and enhance your style. No two campaigns are the same - whether you’re looking to work with us on a project basis or for longer-term branding and career development support, Monarch's dedicated team will create a unique marketing plan based on your goals and vision. 

      </p>
      <p>
       By leveraging our industry expertise and tapping into our vast network of creatives, Monarch can help you identify and target your audience, develop your brand, grow your fan base, increase your music's exposure, and gain the recognition you deserve.

      </p>

      <p>
        Monarch offers dozens of digital and traditional marketing services, from social media promotion and influencer collaboration to billboard advertising and brand partnerships - to learn more about the services that are right for you, contact us today to set up a complimentary consultation!
      </p>
    
      <img src="logo_white.png" class="logo-main" />
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
