<script>
import in18 from "@/shared/in18/in18.js";
export default {
  name: 'About the Team',
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
  mounted() { this.$emit("route", this.$route.path) }
}
</script>

<template>
  <div class="flex col center gap-1 container">
    <div class="about-us__title max-width margin-1 margin-top-2">
      <p class="font-40 text-center title">{{in18[language].about_us.title}}</p>
    </div>
    <div class="flex row flex-wrap center gap-1-5 margin-bottom-1">
      <div v-for="participant in in18[language].about_us.participants" :key="participant.id"
            class="my-card" :style="`background-image: url('/padalustros/${participant.image}');`">
        <!--
        <template #header>
          <img :src="`/padalustros/${participant.image}`" alt="participant"
               width="300" height="200" style="border-radius: 0.5rem">
        </template>
        -->
        <div class="participant__content">
          <p class="font-16 text-center">{{participant.name}}</p>
          <p class="font-10 text-center">{{participant.code}}</p>
        </div>
      </div>
    </div>
    <div class="flex col center margin-2 gap-1">
      <div class="font-30 font-bold">
        {{in18[language].about_us.video}}
      </div>
      <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
             playsinline class="border-radius-1" style="width: 50%; height: auto">
        <source src="/about the team.mp4" type="video/mp4">
        {{in18[language].about_us.video_error}}
      </video>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  min-width: 300px;
  min-height: 200px;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}
.my-card:hover { transform: scale(1.05); }
.my-card:focus { transform: scale(1.05); }
.my-card:active { transform: scale(1.05); }
.my-card:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background: linear-gradient(to bottom, #00000000, #00000000, #00000000, #00000000, #00000088, #00000088);
}
.my-card:hover:after,
.my-card:focus:after,
.my-card:active:after { background-color: rgba(0, 0, 0, 0.5);}
.participant__content{
  text-shadow: 0 0 5px black;
  position: relative;
  z-index: 40;
  margin: 1rem;
  transition: all 0.3s ease;
}
.my-card:hover .participant__content,
.my-card:focus .participant__content,
.my-card:active .participant__content{ margin: 5rem 0; }

.container{
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007F48;
}
.title{
  background: linear-gradient(to bottom, #007F48, #1E3A8A);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>