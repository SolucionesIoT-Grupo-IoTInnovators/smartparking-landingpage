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
  methods: {
    downloadApple(){
      window.open("https://www.figma.com/design/2MLNATT9IvUmtR9sSW4mRK/Smart-Parking?node-id=0-1&t=gyYDWk0oVKDBMDLE-1", "_blank", "noopener");
    },
    downloadAndroid(){
      window.open("https://www.figma.com/design/2MLNATT9IvUmtR9sSW4mRK/Smart-Parking?node-id=0-1&t=gyYDWk0oVKDBMDLE-1", "_blank", "noopener");
    },
  },
  data() {
    return {
      in18,
    }
  },
  mounted() { this.$emit("route", this.$route.path) }
}
</script>

<template>
  <div class="home-hero">
    <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
           playsinline src="/drivers.mp4" type="video/mp4" class="bg-video"/>
    <div class="driving-text__title">
      <p class="title__subtitle">{{in18[language].driver.main.title}}</p>
      <p class="title__title">{{in18[language].driver.main.subtitle}}</p>
    </div>
    <div class="download-button" @click="downloadAndroid">
      <div class="download-button__text"><i class="pi pi-android"/> {{in18[language].home.call_to_action}}</div>
    </div>
    <div class="download-button button--apple" @click="downloadApple">
      <div class="download-button__text"><i class="pi pi-apple"/> {{in18[language].home.call_to_action}}</div>
    </div>
  </div>
  <div class="content">
    <!--
    <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/highway.mp4" type="video/mp4" class="bg-video"/> -->
    <div class="content__title margin-top-auto">{{in18[language].driver.main.title}}</div>
    <div class="driving">
      <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/cross.mp4" class="video"/>
      <div class="driving-text">
        <div class="driving-text__title">
          <i class="title__icon pi pi-car"/>
          <p class="title__title">
            <i class="title__title__icon pi pi-car"/>
            {{in18[language].driver.first.title}}
          </p>
          <p class="title__subtitle">{{in18[language].driver.first.subtitle}}</p>
        </div>
        <div class="driving-text__content">{{in18[language].driver.first.content}}</div>
      </div>
    </div>
    <div class="driving">
      <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/traffic.mp4" class="video"/>
      <div class="driving-text">
        <div class="driving-text__title">
          <i class="title__icon pi pi-clock"/>
          <p class="title__title">
            <i class="title__title__icon pi pi-clock"/>
            {{in18[language].driver.second.title}}
          </p>
          <p class="title__subtitle">{{in18[language].driver.second.subtitle}}</p>
        </div>
        <div class="driving-text__content">{{in18[language].driver.second.content}}</div>
      </div>
    </div>
    <div class="driving">
      <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/money.mp4" class="video"/>
      <div class="driving-text">
        <div class="driving-text__title">
          <i class="title__icon pi pi-money-bill"/>
          <p class="title__title">
            <i class="title__title__icon pi pi-money-bill"/>
            {{in18[language].driver.third.title}}
          </p>
          <p class="title__subtitle">{{in18[language].driver.third.subtitle}}</p>
        </div>
        <div class="driving-text__content">{{in18[language].driver.third.content}}</div>
      </div>
    </div>
  </div>

  <div class="plans">
    <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
                playsinline  src="/driving_plans.mp4" type="video/mp4" class="bg-video"/>
    <div class="plans-content">
      <div class="font-40">{{in18[language].driver.plans.title}}:</div>
      <div class="flex row flex-wrap center gap-2">
        <div class="plan-card" id="free">
          <div class="plan-card__title">{{in18[language].driver.plans.free.title}}</div>
          <div class="plan-card__content">{{in18[language].driver.plans.free.content}}</div>

          <div class="plan-card__features" v-for="feature in in18[language].parking.plans.free.features">
            <div class="flex row gap-0-5">
              <div class="pi pi-check"/>
              <div>{{feature.text}}</div>
            </div>
          </div>

          <div class="plan_card__button margin-top-auto" @click="downloadAndroid">
            {{in18[language].driver.plans.free.money}}
          </div>
        </div>
        <div class="plan-card" id="premium">
          <div class="plan-card__title">{{in18[language].driver.plans.premium.title}}</div>
          <div class="plan-card__content">{{in18[language].driver.plans.premium.content}}</div>

          <div class="plan-card__features" v-for="feature in in18[language].parking.plans.premium.features">
            <div class="flex row gap-0-5">
              <div class="pi pi-check"/>
              <div>{{feature.text}}</div>
            </div>
          </div>
          <div class="plan_card__button margin-top-auto" @click="downloadAndroid">
            {{in18[language].driver.plans.premium.money}}
            {{in18[language].driver.plans.premium.price}}
            {{in18[language].driver.plans.premium.frequency}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-button {
  width: 400px;
  border-radius: 10px;
  background-color: #057b48;
  height: 60px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: left;
  font-size: 32px;
  cursor: pointer;
}
.button--apple{
  color: black;
  background-color: white;
}
.download-button__text .pi:before{
  font-size: 24px;
}

.home-hero {
  align-self: stretch;
  color: #fff;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
  gap: 20px;
  position: relative;
}
.home-hero:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2;
}
.driving-text {
  position: absolute!important;
  top: 0;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(#0000, #000a);
  transition: all 0.5s ease;
  padding: 0 1rem;
  border-radius: 1rem;
  box-sizing: border-box;
  width: 100%;
}
.driving-text .driving-text__title{
  margin-top: 150px;
  margin-bottom: 10px;
  transition: all 0.5s ease;
}
.driving-text .driving-text__title .title__title{ margin-bottom: 40px; transition: all 0.5s ease; }

.driving-text:hover { background: linear-gradient(#000a, #000a); }
.driving-text:hover .driving-text__title{ margin-top: 70px; }
.driving-text:hover .driving-text__title .title__title{ margin-bottom: 0; }
.driving-text__title {
  position: relative;
  display: flex;
  flex-direction: column;
}
.home-hero .title__title {font-size: 32px;}
.home-hero .title__subtitle {
  font-size: 47px;
  color: #0c7;
  font-weight: 600;
}

.title__icon {
  font-size: 40px;
  margin: 5px;
  text-align: center;
}
.title__title { font-size: 64px; }
.title__title__icon { display: none; font-size: 24px; }
.title__subtitle { font-size: 32px; }

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-hero div,
.content div{
  position: relative;
  z-index: 3;
}

.plans{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  color: #fff;
}
.plans:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
}
.plans div{
  position: relative;
  z-index: 3;
}



.plans-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 40px;
}
.plan-card {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  box-sizing: border-box;
  gap: 20px;
  background-color: #000a;
  border-radius: 20px;
}
.plan-card__title {
  font-size: 32px;
  font-weight: 600;
}
.plan-card#premium .plan-card__title{
  color: #ff00;
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2Fbb 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  background-clip: text;
}
.plan-card__content {
  font-size: 16px;
  color: #fff;
  text-align: center;
}
.plan_card__button {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
#free .plan_card__button{
  background-color: #0c7;
}
#premium .plan_card__button{
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2Fbb 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
}










.content {
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: white;
  color: #fff;
  padding: 20px;
  gap: 2rem;
}
.driving {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
  overflow: hidden;
}
.driving .title__title {
  font-size: 28px;
  text-align: center;
  color: #0c7;
}
.driving  .title__subtitle {
  font-size: 14px;
  text-align: center;
}
.driving-text__content {
  font-size: 16px;
  text-align: center;
  width: 100%
}
.video {
  border-radius: 1rem;
  object-fit: cover;
  width: 400px;
  height: 250px;
}



@media (max-width: 1300px) {
  .home-hero{
    align-items: center;
    justify-content: center;
  }
  .home-hero .title__title {
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
  .home-hero  .title__subtitle {
    font-size: 24px;
    text-align: center;
    width: 100%;
  }
}
.content__title{
  width: 100%;
  font-size: 40px;
  text-align: center;
  color: #0fa726;
}

</style>