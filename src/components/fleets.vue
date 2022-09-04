<template>
  <div class="fleets" id="fleets">
    <div class="container">
      <div class="row">
        
        <div class="content">
          <div class="container2">
            <div class="row">
              
              <div class="fleets__lines">
                <div class="fleets__line1">
                  <h2 class="fleets__line1-title">Mersedes Benz V Class</h2>
                  <p class="fleets__line1-txt">Passengers: 6</p>
                  <p class="fleets__line1-txt2">Transmission: automatic</p>
                  <router-link to="/booking" class="fleets__line1-btn">Get Limousine</router-link>
                </div>
                <div class="fleets__line2">
                  <h3 class="fleets__line2-title">
                    <span class="line2__span">190</span>
                    <span class="line2__span2">$ /</span> per hour
                  </h3>
                </div>
              </div>
              
              <img
                src="../assets/img/fleets-header.png"
                alt=""
                class="fleets__img"
              />
            </div>
          </div>
        </div>

        <div class="container2">
          <swiper
            :modules="modules"
            :breakpoints="breakpoints"
            navigation
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false,
            }"
            :speed="1000" 
          >
            <swiper-slide
              class="cars__slide"
              v-for="(slide, idx) in fleetsSliderData"
              :key="idx"
            >
              <img :src="slide.img" alt="" />
              <p class="cars__slide-name">{{ slide.name }}</p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";
import "swiper/scss/navigation";

export default {
  data() {
    return {
      FleetsCardImg: require("@/assets/img/fleets1.png"),
      fleetsSliderData: [
        {
          img: require("@/assets/img/mercedes-a-class.png"),
          name: "mersedes benz a-class",
        },
        {
          img: require("@/assets/img/fleets3.png"),
          name: "bmw m5 f90 competition",
        },
        {
          img: require("@/assets/img/mercedes-eqs.png"),
          name: "mersedes benz eqs",
        },
        {
          img: require("@/assets/img/mercedes-s-class.png"),
          name: "mersedes benz w223",
        },
        {
          img: require("@/assets/img/fleets2.png"),
          name: "mersedes benz s-class",
        },
      ],
      modules: [Navigation, A11y, Autoplay],
      breakpoints: {
        1400: {
          slidesPerView: 3,
          spaceBetween: 45
        },
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 45
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 45
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 45
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>

<style lang="scss" scoped>
.row {
  flex-direction: column;
  align-items: center;
  row-gap: 75px;
}
.fleets{
  padding-bottom: 142px;
}
.content {
  width: 100%;
  padding: 50px 0;
  border-radius: 25px;
  background: url(../assets/img/bg-gradient.png) center center no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 250px;
}
.fleets__lines {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.fleets__line1 {
  width: 100%;
  &-title {
    color: var(--primary-color);
    font-size: calc(30px + 20 * (100vw / 1920));
    font-weight: 400;
    font-family: var(--primaryFont);
  }
  &-txt {
    font-weight: 600;
    font-size: calc(15px + 15 * (100vw / 1920));
    line-height: 147.8%;
    color: var(--primary-color);
    margin: 2px 0 0 0;
  }
  &-txt2 {
    font-weight: 600;
    font-size: calc(15px + 15 * (100vw / 1920));
    line-height: 147.8%;
    color: var(--primary-color);
    margin: 0 0 54px;
  }
  &-btn {
    color: var(--second-color);
    font-weight: 400;
    font-size: 18px;
    background: var(--primary-color);
    padding: 12px 60px;
    box-shadow: 0px 15px 50px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    max-width: max-content;
    display: block;
  }
}
.fleets__line2-title {
  min-width: 300px;
  width: 100%;
  font-size: 30px;
  font-family: var(--primaryFont);
  color: #a7a7a7;
  font-weight: 400;

  display: flex;
  align-items: center;
}
.line2__span2 {
  font-size: calc(30px + 30 * (100vw / 1920));
  color: var(--primary-color);
}
.line2__span {
  font-size: calc(30px + 30 * (100vw / 1920));
  color: var(--primary-color);
}
.fleets__img {
  position: absolute;
  top: 140px;
  right: 200px;
  max-width: 965px;
  width: 100%;
}
.fleets__icon {
  display: flex;
  max-width: 52px;
  width: 100%;
  column-gap: 15px;
  color: var(--third-color);
  font-weight: 400;
}

.cars__slide {
  background: #494949;
  border-radius: 20px;
  padding: 30px 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  &-name {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 20px;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    max-height: 250px !important;
    min-height: 250px !important;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
}

@media (min-width: 1920px) {
  .line2__span {
    font-size: 60px !important;
  }
  .line2__span2 {
    font-size: 60px !important;
  }
  .fleets__line1-title {
    font-size: 60px !important;
  }
  .fleets__line1-txt {
    font-size: 30px !important;
  }
  .fleets__line1-txt2 {
    font-size: 30px !important;
  }
}
@media (max-width: 1450px) {
  .content {
    max-width: 800px;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 20px;
  }
  .fleets__line2-title {
    font-size: calc(15px + (15 + 15 * 0.7) * ((100vw - 320px) / 1920));
  }
  .line2__span {
    font-size: calc(15px + (15 + 15 * 0.7) * ((100vw - 320px) / 1920));
  }
  .line2__span2 {
    font-size: calc(15px + (15 + 15 * 0.7) * ((100vw - 320px) / 1920));
  }
  .fleets__lines {
    flex-direction: column;
    justify-content: flex-start;
  }
  .fleets__line1-btn {
    font-size: 14px;
    padding: 10px 44px;
    margin-bottom: 20px;
  }
  .fleets__line1-txt2 {
    margin-bottom: 30px;
  }
  .fleets__img {
    scale: 0.6;
    top: 40px;
    right: -144px;
  }
  .fleets__line1-title {
    font-size: calc(30px + (20 + 20 * 0.7) * ((100vw - 320px) / 1920));
  }
  .fleets__line1-txt1 {
    font-size: calc(15px + (15 + 15 * 0.7) * ((100vw - 320px) / 1920));
  }
  .fleets__line1-txt1 {
    font-size: calc(15px + (15 + 15 * 0.7) * ((100vw - 320px) / 1920));
  }
}
@media (max-width: 1090px) {
  .fleets__img {
    scale: 0.55;
    top: 30px;
  }
}
@media (max-width: 920px) {
  .fleets__img {
    scale: 0.5;
    top: 2px;
  }
  .content {
    padding: 40px 20px;
  }
}
@media (max-width: 770px) {
  .fleets__img {
    scale: 0.5;
    top: 38px;
    right: -110px;
  }
  
  .cars__slide {
    img {
      max-height: 300px;
    }
  }
}
@media (max-width: 685px) {
  .fleets__img {
    max-width: 450px;
    position: static;
    scale: 1;
    margin: 0 auto;
  }
  .row {
  row-gap: 20px;
}

  .content {
    padding: 30px 20px;
  }
  .fleets__line1-btn {
    font-size: 12px;
    padding: 8px 30px;
  }
  .fleets__line2-title {
    margin-bottom: 10px;
  }
}
@media (max-width: 385px) {
  .fleets__line2-title {
    min-width: 250px !important;
  }
}
</style>
