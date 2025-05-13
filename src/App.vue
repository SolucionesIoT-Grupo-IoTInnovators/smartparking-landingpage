<script>
import { RouterLink, RouterView } from 'vue-router'
import in18 from "@/shared/in18/in18.js";
export default {
  components: {RouterLink, RouterView},
  data() {
    return {
      language: "EN",
      in18,
      route: "",
      navbar: false,
    }
  },
  methods: {
    setLang(lang) {
      this.language = lang;
    },
    goTo(route) {
      this.$router.push(route);
    },
  }
}
</script>

<template>
  <Drawer v-model:visible="navbar" header="" style="width: 100%" position="right">
    <div class="flex col center gap-3 margin-2">
      <div class="text-button flex col center text-center"
           @click="goTo('/about-product'); navbar = false"
           :class="route === '/about-product'?'active-us':''">
        <i class="pi pi-mobile"/>
        <div>{{ in18[language].navbar.about_product }}</div>
      </div>
      <div class="text-button flex col center text-center"
           @click="goTo('/drivers'); navbar = false"
           :class="route === '/drivers'?'active-drivers':''">
        <i class="pi pi-car"/>
        <div>{{ in18[language].navbar.drivers }}</div>
      </div>
      <div class="text-button flex col center text-center"
           @click="goTo('/owners'); navbar = false"
           :class="route === '/owners'?'active-owners':''">
        <i class="pi pi-warehouse"/>
        <div>{{ in18[language].navbar.owners }}</div>
      </div>
      <div class="text-button flex col center text-center"
           @click="goTo('/about-us'); navbar = false"
           :class="route === '/about-us'?'active-us':''">
        <i class="pi pi-users"/>
        <div>{{ in18[language].navbar.about_us }}</div>
      </div>
      <div class="internationalization flex col center">
        <i class="pi pi-language"/>
        <div>
          <span :class="language === 'ES'?'active option':'option'" @click="setLang('ES')">
            ES
          </span>
          <span> / </span>
          <span :class="language === 'EN'?'active option':'option'" @click="setLang('EN')">
            EN
          </span>
        </div>
      </div>
    </div>
  </Drawer>
  <header class="navbar">
    <div class="logo" id="main-logo">
      <img src="/logo2.png" alt="Smart Parking" class="logo"  @click="goTo('/')"/>
    </div>
    <div class="role-selector">
      <div class="text-button not-important"
           @click="goTo('/about-product')"
           :class="route === '/about-product'?'active-us':''">
        {{ in18[language].navbar.about_product }}
      </div>
      <div class="text-button not-important"
           @click="goTo('/drivers')"
           :class="route === '/drivers'?'active-drivers':''">
        {{ in18[language].navbar.drivers }}
      </div>
      <div class="text-button not-important"
           @click="goTo('/owners')"
           :class="route === '/owners'?'active-owners':''">
        {{ in18[language].navbar.owners }}
      </div>
      <div class="text-button not-important"
           @click="goTo('/about-us')"
           :class="route === '/about-us'?'active-us':''">
        {{ in18[language].navbar.about_us }}
      </div>

      <div class="internationalization not-important">
        <span :class="language === 'ES'?'active option':'option'" @click="setLang('ES')">
          ES
        </span>
        <span> / </span>
        <span :class="language === 'EN'?'active option':'option'" @click="setLang('EN')">
          EN
        </span>
      </div>
      <div class="text-button navbar-button"
           @click="navbar = true">
        <i class="pi pi-bars"></i>
      </div>
    </div>
  </header>
  <RouterView :language="language" @route="(a)=>{route = a}"/>
  <footer class="flex col center">
    <div class="flex col center">
      <div class="copyright">&copy; 2025 Smart Parking.</div>
      <div class="copyright">{{ in18[language].footer.copyright }}</div>
    </div>
    <div class="social-networks">
      <a href="https://www.facebook.com/smartparking" target="_blank">
        <i class="pi pi-facebook"/>
      </a>
      <a href="https://www.instagram.com/smartparking" target="_blank">
        <i class="pi pi-instagram"/>
      </a>
      <a href="https://www.linkedin.com/company/smartparking" target="_blank">
        <i class="pi pi-linkedin"/>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  width: 200px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}
.text-button {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
}
.text-button.active-drivers {
  color: #0c7;
  font-size: 1.2em;
}
.text-button.active-owners {
  color: #60A5FA;
  font-size: 1.2em;
}
.text-button.active-us {
  font-size: 1.2em;
}

.internationalization .option {
  cursor: pointer;
  color: #000;
  font-weight: 100;
}
.internationalization .active {
  color: #0c7;
  font-weight: 700;
}


.role-selector {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}
header {
  position: relative;
  z-index: 200;
  width: 100%;
  margin: 0 !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  box-sizing: border-box;
  gap: 0;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: sans-serif;
  z-index: 20;
}
footer {
  width: 100%;
  margin: 0 !important;
  background-color: #fff;
  height: 100px;
  padding: 4px 20px;
  box-sizing: border-box;
  gap: 0.5rem;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: sans-serif;
}
.pi {
  font-size: 20px!important;
  color: #000;
  margin: 0 6px;
}
.copyright{
  font-size: 16px;
}

.navbar-button{
  display: none;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 23px;
  /*align content vertically to bottom of container*/
  line-height: 23px;
}
.navbar-button:hover,
.navbar-button:focus,
.navbar-button:active{
  color: #0c7;
  font-size: 1.2em;
}



/*Create an loop animation for main logo that changes between blue and white*/
@keyframes logo-animation {
  0% { background: #60A5FA; }
  50% { background: white; }
  100% { background: #60A5FA; }
}
#main-logo:before{
  animation: logo-animation 2s infinite;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: 6px;
  left: 25px;
  width: 48px;
  height: 40px;
  background: white;
  transition: all 2s ease;
}

@media (max-width: 1000px) {
  .logo {
    width: 150px;
  }
  .not-important{
    display: none;
  }
  .text-button.navbar-button{
    display: flex;
  }
  #main-logo:before{
    top: 5px;
    left: 17px;
    width: 36px;
    height: 30px;
  }
}
</style>
