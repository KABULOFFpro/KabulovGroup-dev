<template>
  <div class="our" id="our services">
    <div class="container2">
      <div class="row">
        <div class="our__content">
          <Title sectionName="our__content" titleText="our services"/>
          <p class="our__content-txt">
            Worldwide fast & easy access for all occasions.
          </p>
          <div class="our__content-cards">
            <div
              class="our__content-card"
              v-for="(data, idx) in searchOur"
              :key="idx"
            >
              <img :src="data.OurCardImage" alt="" class="our__card-img" />
              <h4 class="our__card-title">{{ data.OurCardTitle }}</h4>
              <p class="our__card-txt">{{ data.OurCardTxt }}</p>
              <router-link :to="`/booking`" class="our__card-btn">{{ data.OurCardBtn }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleVue from './Title.vue';

export default {
  name: "Our",
  data() {
    return {
      searchOur: [
        {
          OurCardImage: require("@/assets/img/Our1.png"),
          OurCardTitle: "Airport transfers",
          OurCardTxt:
            "With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.",
          OurCardBtn: "Booking  >",
        },
        {
          OurCardImage: require("@/assets/img/Our2.png"),
          OurCardTitle: "Intercity Rides",
          OurCardTxt:
            "Your stress-free solution for traveling between cities, with chauffeurs across the globe.",
          OurCardBtn: "Booking  >",
        },
        {
          OurCardImage: require("@/assets/img/Our3.png"),
          OurCardTitle: "Business Meeting",
          OurCardTxt:
            "Concentrate on your meeting with your partners, forget about the road and the car, which will distract your thoughts.",
          OurCardBtn: "Booking  >",
        },
        {
          OurCardImage: require("@/assets/img/Our4.png"),
          OurCardTitle: "Wedding Parties",
          OurCardTxt:
            "Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.",
          OurCardBtn: "Booking  >",
        },
      ],
    };
  },
  components: {
    Title: TitleVue
  }
};
</script>

<style lang="scss" scoped>
.our {
  width: 100%;
  padding: 0 0 88px;
  &__content-txt {
    font-size: calc(18px + 7 * (100vw / 1920));
    color: var(--third-color);
    margin: 8px 0 56px;
  }
  &__content-cards {
    display: flex;
  }
  &__content-cards {
    width: 100%;
    display: flex;
    column-gap: 28px;
  }
  &__content-card {
    max-width: 330px;
    width: 100%;
    background: #333333;
    border-radius: 20px;
    padding: 21px;
  }
  &__card-title {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 25px;
    padding: 28px 0 9px;
    font-family: var(--primaryFont);
  }
  &__card-txt {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 30px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
  &__card-btn {
    background: var(--primary-color);
    border-radius: 5px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    padding: 6px 24px;
    color: var(--second-color);
    filter: drop-shadow(0px 15px 50px rgba(255, 255, 255, 0.25));
  }
}
@media (max-width: 1450px) {
  .row{
    justify-content: center;
  }
  .our__content {
    display: flex;
    max-width: 800px;
    flex-direction: column;
    align-items: center;
    &-cards{
      row-gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }
    &-title {
      font-size: calc(30px + (40 + 40 * 0.7) * ((100vw - 320px) / 1920));
    }
    &-txt {
      font-size: calc(18px + 7 * (100vw / 1920));
      text-align: center;
    }
  }
  
}
@media (max-width: 346px) {
   .our__content-cards{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
   }
}
</style>