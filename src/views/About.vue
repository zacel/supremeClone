<template>
  <div class="container">
    <h1>
      <router-link to="/">
        <span style="color: white; font-family: 'Alegreya', serif;"><b>about:</b> <i>Monarch Music Group</i></span>
      </router-link>
    </h1>
    <div class="centered">
      <p>
        <b>Monarch Music Group</b>’s mission is to empower recording artists to
        take their careers to the next level in order to generate the success
        they deserve, while enabling them to maintain independence over their
        sound and the direction of their careers. Monarch has responded to a new
        generation of creators who are seeking marketing and career development
        options outside of the traditional label model.
      </p>
      <p>
        Through our marketing division, <b>Monarch Music Marketing</b>, we
        provide tailored marketing, promotional, branding, and label services
        for artists, record labels, and artist management companies. With our
        proprietary model, artists stay in control of their careers while
        receiving personalized services, without sacrificing the quality that
        labels have traditionally provided.
      </p>

      <p>
        By incorporating a wide variety of analytical and creative strategies,
        our team customizes solutions for each client's goals, and develops
        unique plans that help our artists thrive in the current
        streaming-driven ecosystem.
      </p>
      <p>
        <i>
          We can't wait to hear from you! Whether you're an artist who'd like to
          learn more about how we can assist, a creative interested in joining
          our network, or a music enthusiast who wants to stay in the know about
          rising artists and industry trends, fill out the form below to get in
          touch!
        </i>
      </p>
      <button onclick="createPopUp(buildAboutPageForm())">Get in touch</button>

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
  },
};
</script>

<style lang="scss" scoped>



.container {
  background-color: #0a0a0a;
  color: white;
  padding-bottom: 200%;
}

@media screen and (min-width: 800px) {
  //desktop only
  div.scrollmenu {
    width: 600px;
  }
  .container {
    height: 150%;
  }
}

@media screen and (max-width: 812px) {
  //mobile only
  .container {
    height: 175%;
  }
  th {
    width: 3%;
  }
  
}
h1 {
  margin-top: 0px;
  font-family: "Courier New", Courier, Monaco;
  color: #c1c1c1 !important;
  margin-bottom: 0px;
  padding-bottom: 40px;
}

h1 .router-link {
  color: white !important;
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
