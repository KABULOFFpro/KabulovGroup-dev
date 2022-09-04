<template>
  <header class="header" id="home">
    <div class="container">
      <div class="row">
        <div class="header__content">
          <div class="header__content-desc">
            <h1 class="header__title">One global solution</h1>
            <p class="header__txt">
              Offering the Best Limo Service in Switzerland, Experience it Now!
            </p>
            <router-link to="/booking" class="header__btn">Booking</router-link>
          </div>

          <div class="header__image">
            <img :src="headerContentImg" alt="" class="header__image-photo" />
          </div>
        </div>
        <div class="dictance">
          <div class="dictance__btns">
            <a href="#!" class="dictance__btn">Distance</a>
            <a href="#!" class="dictance__btn">Hourly</a>
          </div>
          <div class="dictance__cols">
            <div
              class="dictance__col"
              v-for="(data, idx) in searchData"
              :key="idx"
            >
              <p class="dictance__col-txt1">{{ data.title }}</p>
              <p class="dictance__col-txt2">{{ data.text }}</p>
            </div>
            <router-link to="/booking" class="dictance__col-btn">Search</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerContentImg: require("@/assets/img/header.png"),
      searchData: [
        {
          text: "from: address, airport, hotel",
          title: "pick up address",
        },
        {
          text: "from: post, travel, police",
          title: "drop off address",
        },
        {
          text: "WEB 19, 2018",
          title: "pick up date",
        },
        {
          text: "12:25 a.m",
          title: "pick up time",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;

  &__content {
    display: flex;
    align-items: center;
    background: var(--primary-color);
    border-radius: 41px;
    padding: 65px 150px 170px;
  }

  &__content-desc {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }

  &__title {
    max-width: 1330px;
    font-size: calc(30px + 80 * (100vw / 1920));
    color: var(--second-color);
    line-height: 110%;
  }

  &__txt {
    max-width: 368px;
    width: 100%;
    font-size: calc(18px + 7 * (100vw / 1920));
    font-weight: 400;
    line-height: 34px;
  }

  &__image {
    max-width: 800px;
    width: 100%;
  }

  &__image-photo {
    width: 100%;
    object-fit: cover;
    transform: scale(1.35);
  }

  &__btn {
    max-width: 185px;
    width: 100%;
    height: 55px;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    background: var(--second-color);
    border-radius: 9px;
    display: grid;
    place-items: center;
  }

  .row {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .dictance {
    max-width: 1400px;
    width: 100%;
    transform: translateY(-120px);
    &__btns {
      display: flex;
      max-width: max-content;
      border-radius: 11px 11px 0px 0px;
      background: #484848;
    }
    &__btn {
      display: flex;
      text-align: center;
      padding: 24px 52px;
      border-radius: 10px;
      color: var(--primary-color);
      font-size: 20px;
      font-weight: 400;
    }
    &__cols {
      padding: 10px 10px 10px 0px;
      display: flex;
      align-items: center;
      background: #484848;
      border-radius: 0px 11px 11px 11px;
      justify-content: space-between;
    }
    &__col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 52px;
      border-right: 1px solid #fff;
      &:last-of-type {
        border-right: none;
      }
    }
    &__col-txt1 {
      font-weight: 400;
      font-size: 18px;
      color: #cbcbcb;
      padding-bottom: 5px;
      text-transform: capitalize;
    }
    &__col-txt2 {
      font-weight: 600;
      font-size: 18px;
      color: var(--primary-color);
    }
    &__col-btn {
      padding: 28px 64px;
      background: var(--primary-color);
      font-weight: 600;
      font-size: 20px;
      background: #ffffff;
      box-shadow: 0px 20px 50px rgba(255, 255, 255, 0.25);
      border-radius: 7px;
      color: #000;
    }
  }
}
@media (min-width: 1920px){
  .header__title{
    font-size: 110px !important;
  }
}
@media (max-width: 1450px) {
  .row {
    justify-content: center;
  }
  .dictance{
    max-width: 800px !important;
    width: 100%;
    transform: translateY(-85px) !important;
    display: flex;
    flex-direction: column;
    width: 100%;

    &__col{
      padding: 0 15px !important;
      display: flex;
    }
    &__col-txt1{
      font-size: 14px !important;
    }
    &__col-txt2{
      font-size: 14px !important;
    }
    &__col-btn{
      padding: 27px 34px !important;
      font-size: 14px !important;
    }
    &__btn{
      font-size: 16px !important;
      padding: 22px 40px !important;
    }
    &__btns{ 
      transform: translateY(1px);
    }
  } 

  .header__content {
    max-width: 800px;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 30px;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
  }

  .header__txt {
    line-height: unset;
    font-size: calc(18px + (7 + 7 * 0.7) * ((100vw - 320px) / 1920));
  }

  .header__content-desc {
    align-items: center;
    text-align: center;
    row-gap: 28px;
  }

  .header__image-photo {
    transform: scale(1);
  }
}
@media (max-width: 750px) {
  .dictance__col{
    padding: 0 10px;
  }
  .dictance__col-txt1{
    font-size: 10px !important;
  }
  .dictance__col-txt1{
    font-size: 10px !important;
  }
  .dictance__col-btn{
      padding: 20px 28px !important;
      font-size: 14px !important;
    }
}
@media (max-width: 587px) {
     .dictance {
    max-width: 800px !important;
    transform: translateY(0px) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__btn{
    padding: 25px 59.1px !important;
    }
  }
  .row {
    row-gap: 20px;
  }
  .dictance__cols {
    flex-direction: column;
    row-gap: 25px;
    align-items: flex-start !important;
    padding-left: 30px !important;
    border-top-right-radius: 0px !important;
    max-width: 345px !important;
    width: 100%;
  }
  .dictance__col {
    border-right: none !important;
    padding: 20px 0 !important;
  }
}
@media (max-width: 576px) {
  .header__btn {
    max-width: 166px;
    height: 48px;
  }
}
@media (max-width: 548px) {
  .header__content-desc {
    row-gap: 14px;
  }
}
@media (max-width: 414px) {
  .header__btn {
    max-width: 155px;
    height: 42px;
    font-size: 14px;
  }
}
@media (max-width: 320px) {
  .header__btn {
    max-width: 134px;
    height: 38px;
    font-size: 12px;
  }
  .header__title {
    font-size: calc(30px + (80 + 80 * 0.7) * ((100vw - 320px) / 1920));
  }
}

@media (max-width: 385px) {
  .dictance__btns {
    width: 100% !important;
    max-width: 100% !important;
    
    .dictance__btn {
      width: 100% !important;
      display: grid;
      place-items: center;
      padding: 20px 0 !important;
    }
  }
}

</style>
