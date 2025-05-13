<script>
import in18 from "@/shared/in18/in18.js";
export default {
  name: 'About the Product',
  props: {
    language: {
      type: String,
      default: "ES"
    }
  },
  data() {
    return { in18 }
  },
  mounted() { this.$emit("route", this.$route.path) }
}
</script>
<template>
  <div class="flex col center padding-1 min-full-height">
    <div class="flex col gap-1 margin-auto">
      <div class="flex row center margin-4 gap-2">
        <div class="half-width" id="about-logo">
          <img src="/logo2.png" alt="Smart Parking" class="logo"/>

        </div>
        <div class="half-width text-center">
          {{in18[language].about_product.description}}
        </div>

      </div>
      <div class="flex row flex-wrap container">
        <div class="text-upper-wrapper" v-for="feature in in18[language].about_product.features">
          <div class="title flex col gap-1">
            <i :class="feature.icon + ' text-primary'" class="font-60"/>

            <div class="flex col center">
              <i class="pi pi-chevron-up"/>
              <div>Ver mas</div>
            </div>
          </div>
          <div class="content text-center">
            {{ feature.text }}
          </div>
        </div>
      </div>

      <div class="flex col center margin-2 gap-1">
        <div class="font-30 font-bold">
          {{in18[language].about_us.video}}
        </div>
        <video autoplay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback"
               playsinline class="border-radius-1" style="width: 50%; height: auto">
          <source src="/about the product.mp4" type="video/mp4">
          {{in18[language].about_us.video_error}}
        </video>
      </div>

    </div>
  </div>
</template>

<style scoped>
.text-upper-wrapper{
  border-radius: 1rem;
  background: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 10rem;
  box-sizing: content-box;
  position: relative
}
.text-upper-wrapper .title,
.text-upper-wrapper .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
}
.text-upper-wrapper .content { top: 100%; }


.text-upper-wrapper:hover .title,
.text-upper-wrapper:focus .title,
.text-upper-wrapper:active .title{ top: -100% }
.text-upper-wrapper:hover .content,
.text-upper-wrapper:focus .content,
.text-upper-wrapper:active .content{top: 0;}





/*makes container to have at least 4 horizontal items*/
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.container > * {
  flex: 1 1 25%;
}
.logo{
  width: 100%;
  height: auto;
  position: relative;
}




@keyframes logo-animation {
  0% {
    background: #60A5FA;
  }
  50% {
    background: white;
  }
  100% {
    background: #60A5FA;
  }
}
#about-logo{
  position: relative;
}
#about-logo:before{
  animation: logo-animation 2s infinite;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: 6px;
  left: 12%;
  width: 24%;
  height: 60%;
  background: white;
  transition: all 2s ease;
}


</style>