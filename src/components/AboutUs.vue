<template>
  <main class="main" id="about us">
    <div class="container2">
      <div class="row">

        
        <Title sectionName="about__content" titleText="about us"/>

        <p class="about__txt">
          The best offer of world-class transportation solutions for your events
        </p>

        <section class="about" >
          <div class="about__card">
            <div class="about__card-left">
              <img
                src="../assets/img/Abaut.png"
                alt=""
                class="about__card-img"
              />
            </div>
            <div class="about__card-right">
              <p class="about__card-txt">
                A Chauffeur Car Service company at your disposal for all your
                trips.
              </p>
              <p class="about__card-txt">
                Recognized for its professionalism towards companies,
                professionals and individuals, Limogroup is a company based in
                Switzerland. Specialized in the tailor-made transport with
                chauffeur, we offer high end services for your private and
                business trips.
              </p>
              <p class="about__card-txt">
                We have a fleet of prestigious and modern vehicles for a
                comfortable and secure accompaniment in the destinations of your
                choice. Our mission is to provide you with an excellent service
                as well as a personalized welcome for your short and long
                journeys.
              </p>
              <p class="about__card-txt">
                Thanks to our experience, we guarantee a high-end accompaniment
                to meet all your needs: rental of a chauffeured car, transfers,
                group transfers, private events, weddings, conferences and
                exhibitions, meet & greet... Our bilingual drivers are available
                to guide you in all your trips in Switzerland and abroad.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  </main>
</template>

<script>
import TitleVue from './Title.vue';
export default {
  name: 'About',
  components: {
    Title: TitleVue
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 50px;
}

.row {
  flex-direction: column;
}
.about {
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
  &__title {
    color: var(--primary-color);
    font-weight: 400;
    font-size: calc(30px + 40 * (100vw / 1920));
  }
  &__txt {
    color: var(--third-color);
    font-weight: 400;
    font-size: calc(18px + 7 * (100vw / 1920));
    padding-bottom: 45px;
  }
  &__card {
    display: flex;
    max-width: 1400px;
    background: #333333;
    padding: 48px 72px 55px 55px;
    border-radius: 27px;
    column-gap: 54px;
    align-items: center;
  }
  &__card-img {
    max-width: 576px;
    width: 100%;
    height: 100%;
  }
  &__card-right {
    display: flex;
    max-width: 644px;
    width: 100%;
    flex-direction: column;
    row-gap: 30px;
  }
  &__card-txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 171.3%;
    color: var(--primary-color);
  }
}

@media (max-width: 1450px) {
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .about {
    max-width: 800px;
    width: 100%;
    align-items: center !important;
    &__title {
      font-size: calc(30px + (40 + 40 * 0.7) * ((100vw - 320px) / 1920));
    }
    &__txt {
      font-size: calc(18 + (7 + 7 * 0.7) * ((100vw - 320px) / 1920));
      text-align: center;
    }
    &__card {
      justify-content: center !important;
      padding: 20px 0 !important;
      row-gap: 20px;
    }
    &__card-right {
      max-width: max-content !important;
    }
    &__card-txt {
      max-width: 576px !important;
    }
  }
  .about__card {
    flex-wrap: wrap;
    align-items: center;
  }
}
@media(max-width: 1430px){
  .main .row{
    justify-content: center;
  }
}


@media (max-width: 665px){
  .about__card{

    padding: 15px 20px !important;
  }
}
</style>