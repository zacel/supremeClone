<template>
  <div class="header-main">
    <span href="" onclick="toggleHeaderMenu()" id="menu-toggle-container">
      <img
        id="hamburger-link"
        v-bind:src="require('../assets/hamburger_menu.png')"
        alt
      />
    </span>
    <div id="nav-menu">
      <div id="close-btn" onclick="toggleHeaderMenu()">X</div>
      <ul style="padding-top: 30px">
        <li onclick="toggleHeaderMenu()">
          <router-link to="/home" class="spread-kids">
            <span>Home</span><span> > </span>
          </router-link>
        </li>
        <li onclick="toggleHeaderMenu()">
          <router-link to="/services" class="spread-kids">
            <span>Services</span><span> > </span>
          </router-link>
        </li>

        <li onclick="toggleHeaderMenu()">
          <router-link to="/editorial" class="spread-kids">
            <span>Editorial</span><span> > </span>
          </router-link>
        </li>

        <li onclick="toggleHeaderMenu()">
          <router-link to="/contact" class="spread-kids">
            <span>Contact</span><span> > </span>
          </router-link>
        </li>
        <li onclick="toggleHeaderMenu()">
          <router-link to="/about" class="spread-kids">
            <span>About</span><span> > </span>
          </router-link>
        </li>
      </ul>

      <img src="logo_alt.png" class="logo-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  //desktop only

  #close-btn {
    margin-right: 2rem;
  }
}

#close-btn {
  right: 5px;
  font-size: 3rem;
  font-weight: bold;
  position: fixed;
  &:hover {
    color: limegreen;
    cursor: pointer;
  }
}

.spread-kids {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
}
#menu-toggle-container {
  right: 0px;
}

#nav-menu {
  font-family: "Courier New", Courier, Monaco;
  display: none;
  background-color: white !important;
  padding-top: 1px;
  z-index: 6 !important;
  width: 100%;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
}

ul {
  list-style-type: none;
  text-align: left;
  padding-right: 2rem;

  li {
    &:hover {
      background-color: limegreen;
      cursor: pointer;
    }
  }
}
#hamburger-link {
  width: 48px;
  padding-left: 1px;
  padding-right: 1px;
  z-index: 2;
}

.header-main {
  z-index: 5;
  top: 1rem;
  right: 1rem;
  position: fixed;
  a {
    color: #202020;
    text-decoration: none;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
