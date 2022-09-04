<template>
  <div class="choose">
    <div class="container2">
      <div class="choose__content">
        <Title sectionName="choose__content" titleText="Why Choose limogroup?"/>
        <p class="choose__content-txt">
          Our main advantages are to be chosen by us
        </p>

        <div class="choose__cards">
          <div class="choose_card" v-for="(data, idx) in ChooseCard" :key="idx">
            <div class="choose__left">
              <img :src="data.ChooseLeftImg" alt="" class="choose__left-img" />
            </div>
            <div class="choose__right">
              <h5 class="choose__right-title">{{ data.ChooseRightTitle }}</h5>
              <p class="choose__right-txt">{{ data.ChooseRightTxt }}</p>
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
  data() {
    return {
      ChooseCard: [
        {
          ChooseLeftImg: require("@/assets/img/mask1.png"),
          ChooseRightTitle: " Online Reservation",
          ChooseRightTxt:
            " No need to leave the house and go somewhere. Call our drivers online, choosing the right car for yourself.",
        },
        {
          ChooseLeftImg: require("@/assets/img/mask2.png"),
          ChooseRightTitle: "Professional Drivers",
          ChooseRightTxt:
            "Limogroup chauffeurs are among the best trained and most experienced professionals in the industry.",
        },
        {
          ChooseLeftImg: require("@/assets/img/mask3.png"),
          ChooseRightTitle: "Prestige Vehicles",
          ChooseRightTxt:
            "All our cars radiate maximum comfort and safety, as well as the latest innovations that our industry can offer.",
        },
        {
          ChooseLeftImg: require("@/assets/img/mask4.png"),
          ChooseRightTitle: "Online Payment",
          ChooseRightTxt:
            "For the convenience of our customers, we have made an online payment system, you just have to wait for your car",
        },
      ],   
    };
  },
  components: {
    Title: TitleVue
  }
};
</script>

<style  lang="scss" scoped>
.choose {
  padding-bottom: 88px;
}
.choose_cards {
  width: 100%;
}
.choose__content-title {
  font-weight: 400;
  font-size: 70px;
  line-height: 194.8%;
  color: var(--primary-color);
}
.choose__content-txt {
  font-weight: 400;
  font-size: 25px;
  color: var(--third-color);
  margin-bottom: 30px;
}
.choose__cards {
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.choose_card {
  max-width: 674px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: #333333;
  border-radius: 20px;
  padding: 36px 66px 36px 36px;
}
.choose__left {
  display: flex;
  width: 100%;
  max-width: 236px;
  background: var(--primary-color);
  border-radius: 9px;
  width: 100%;
  align-items: center;
  justify-content: center;
  &-img {
    max-width: 116px;
    width: 100%;
  }
}
.choose__right {
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  &-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 25px;
    color: var(--primary-color);
  }
  &-txt {
    font-weight: 400;
    font-size: 16px;
    color: var(--primary-color);
  }
}

@media (max-width: 1170px){
    .choose__content {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    
    .choose__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
}
@media (max-width: 496px){
      .choose_card {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 36px 0 !important;
    }
}
</style>