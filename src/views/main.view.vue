<script>
import in18 from "@/shared/in18/in18.js";
export default {
  name: 'MainView',
  props: {
    language: {
      type: String,
      default: "ES"
    }
  },
  data() {
    return {
      in18,
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
  mounted() { this.$emit("route", this.$route.path) }
}
</script>

<template>
  <div class="parent-container">
    <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/parkings.mp4" type="video/mp4" class="bg-video"/>
    <div class="title">
      <div class="main-title">
        <div class="title__first" style="margin-top: 3rem;">{{in18[language].home.first}}</div>
        <div class="title__second margin-top-0-25">{{in18[language].home.second}}</div>
        <div class="title__third margin-top-0-25">{{in18[language].home.third}}</div>
        <div class="title__button" @click="goTo('/about-product')" style="margin-top: 3rem;">
          {{in18[language].home.know_more}}
        </div>

      </div>
      <div style="height: 1px; display: flex" class="my-line"/>
      <div class="selector">
        <div class="selector__button" id="frameContainer" @click="goTo('/drivers')">
          <div class="on-hover-shou"/>

          <i class="pi pi-car"/>
          <div class="selector__button__text">{{in18[language].home.driver}}</div>

          <div class="on-hover-shou">
            <i class="pi pi-arrow-up"/>
            <div>{{in18[language].home.see_more}}</div>
          </div>
        </div>
        <div class="selector__separator"/>
        <div class="selector__button" id="frameContainer1" @click="goTo('/owners')">
          <div class="on-hover-shou"/>

          <i class="pi pi-warehouse"/>
          <div class="selector__button__text">{{in18[language].home.owner}}</div>

          <div class="on-hover-shou">
            <i class="pi pi-arrow-up"/>
            <div>{{in18[language].home.see_more}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.title {
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(2px);
  z-index: 20;
}
.main-title .title__first {
  font-size: 3vw;
  color: #0c7;
}
.main-title .title__second { font-size: 1.77vw; }
.main-title .title__third { font-size: 1.77vw; }

.main-title {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
}

.my-line{
  width: 100%;
  height: 1px;
  background-color: #007F48;
}


.selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 20px;
  z-index: 20;
  width: 100%;
}
.selector__button {
  width: 50%;
  height: 150px;
  background-color: #00000000;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
}
.selector__separator{
  width: 1px;
  height: 150px;
  display: block;
  background-color: #007F48;
}
.selector__button:hover,
.selector__button:focus,
.selector__button:active{
  background-color: #00000055;
  /*blur bg*/
  backdrop-filter: blur(10px);
}
.selector__button i { color: #0c7; transition: all 0.3s ease; }
.selector__button >i{
  margin-bottom: 10px;
  font-size: 24px;
}
.selector__button:hover >i,
.selector__button:hover >i,
.selector__button:hover >i{
  margin-bottom: 10px;
  font-size: 40px;
}
.selector__button .on-hover-shou{
  color: #0c7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  min-height: 30vh;
  transition: all 0.3s ease;
  font-size: 16px;
}
.selector__button:hover .on-hover-shou{ min-height: 1rem; }

.selector__button .selector__button__text{
  transition: all 0.3s ease;
}
.selector__button:hover .selector__button__text{
  font-size: 0;
}




.parent-container {
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 64px;
  color: #fff;
  font-family: sans-serif;
}
.parent-container .bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1200px) {
  .selector .selector__button {
    width: 49%;
    height: 100px;
    font-size: 18px;
  }
  .selector .selector__separator{
    width: 1px;
    height: 100px;
  }

  .main-title .title__first{ font-size: 30px; }
  .main-title .title__second{ font-size: 14px; }
  .main-title .title__third{ font-size: 14px; }

  .main-title{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
  }
}

.title__button{
  font-size: 24px;
  padding: 0.85rem 2rem;
  background: linear-gradient(to bottom, #007F48, #1E3A8A);
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  cursor: pointer;
}
.title__button:hover{
  background: linear-gradient(to bottom, #00da81, #2563EB);
}
</style>