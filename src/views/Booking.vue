<template>
  <Nav />
  <header class="booking__header" id="home">
    <div class="container">
      <div class="booking">
        <h1 class="booking__title">Booking</h1>
        <h3 class="booking__txt">HOME - BOOKING</h3>
      </div>

      <div class="steps__booking">
        <div class="steps__boxs">
          <div
            class="steps__box"
            v-for="(data, idx) in stepsBox"
            :key="idx"
            :class="{ active: data.active }"
          >
            <p
              class="steps__box-elips"
              v-html="data.completed ? tickIcon : data.stepsBoxElips"
            ></p>
            <p class="steps__box-txt">{{ data.stepsBoxTxt }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="container2">
      <div class="row">
        <BookingDetails v-show="bookingDetailsView" />

        <BookingContent v-show="bookingContentView" />

        <Payment v-show="paymentView"/>

        <Summary v-show="summaryView" :userInfo="userInformations" />

        <div class="booking__controls">
          <div class="container2">
            <div class="row">
              <button class="booking__controls-btn" disabled>
                <i class="far fa-chevron-left"></i> choose ride details
              </button>

              <button
                class="booking__controls-btn"
                @click="orderCar"
                v-html="summaryView ? 'confirm payment' : contactDetailText"
              ></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>

  <Cartier />

  <Footer />

  <div class="ordered-car" :class="{ show: carOrdered }">
    <p class="ordered-car-text" v-html="`car ordered ${tickIcon}`"></p>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import BookingContentVue from "@/components/BookingContent.vue";
import bookingData from "@/assets/js/data";
import PaymentVue from "@/components/Payment.vue";
import BookingDetailsVue from "@/components/BookingDetails.vue";
import FooterVue from "@/components/footer.vue";
import CartierVue from "@/components/Cartier.vue";
import SummaryVue from "@/components/Summary.vue";
import curUserInfo from "@/assets/js/curUserInfo.js";

export default {
  data() {
    return {
      stepsBox: [
        {
          stepsBoxElips: "1",
          stepsBoxTxt: "Enter Ride Details",
          active: false,
          completed: true,
        },
        {
          stepsBoxElips: "2",
          stepsBoxTxt: "Choose a Vehicle",
          active: true,
          completed: false,
        },
        {
          stepsBoxElips: "3",
          stepsBoxTxt: "Enter Contact Details",
          active: false,
          completed: false,
        },
        {
          stepsBoxElips: "4",
          stepsBoxTxt: "Booking Summary",
          active: false,
          completed: false,
        },
      ],
      tickIcon: '<i class="far fa-check"></i>',
      bookingData,
      curUserInfo,
      paymentView: false,
      bookingContentView: true,
      bookingDetailsView: true,
      summaryView: false,
      carOrdered: false,
      contactDetailText:
        'enter contact details <i class="far fa-chevron-right"></i>',
      userInformations: [
        {
          title: "first name",
          text: "no text",
        },
        {
          title: "last name",
          text: "no text",
        },
        {
          title: "e-mail address",
          text: "no text",
        },
        {
          title: "phone number",
          text: "no text",
        },
        {
          title: "comments",
          text: "no text",
        },
      ],
    };
  },
  name: "About",
  components: {
    Nav,
    BookingContent: BookingContentVue,
    Payment: PaymentVue,
    BookingDetails: BookingDetailsVue,
    Summary: SummaryVue,
    Cartier: CartierVue,
    Footer: FooterVue,
  },
  methods: {
    orderCar() {
      let carsData = this.bookingData,
        stepsData = this.stepsBox,
        userInfo = this.curUserInfo;

      for (const key in carsData) {
        if (key == "chosenVehicles") {
          if (carsData[key].length > 0) {
            if (
              !this.paymentView &&
              userInfo.fName == "" &&
              userInfo.lName == "" &&
              userInfo.email == "" &&
              userInfo.number == "" &&
              userInfo.comment == ""
            ) {
              this.paymentView = true;
              this.bookingContentView = false;

              stepsData[1].active = false;
              stepsData[1].completed = true;
              stepsData[2].active = true;
            } else if (this.paymentView) {
              if (
                userInfo.fName != "" &&
                userInfo.lName != "" &&
                userInfo.email != "" &&
                userInfo.number != "" &&
                userInfo.comment != ""
              ) {
                stepsData[2].active = false;
                stepsData[2].completed = true;
                stepsData[3].active = true;

                this.paymentView = false;
                this.bookingDetailsView = false;
                this.summaryView = true;
              }
            } else if (this.summaryView) {
              this.carOrdered = true;

              setTimeout(() => {
                location.href = '/'
                this.carOrdered = false;
              }, 1500);
            }
          } else if (carsData[key].length == 0) {
          }
        }
      }
    },
  },
  mounted() {
    let form = document.querySelector(".payment__details-form"),
     fName = form.querySelector(".payment__strucs-inp.fName"),
     lName = form.querySelector(".payment__strucs-inp.lName"),
     email = form.querySelector(".payment__strucs-inp.email"),
     number = form.querySelector(".payment__strucs-inp.number"),
     comment = form.querySelector(".payment__strucs-area.comment");

      form.addEventListener("change", () => {
        this.userInformations.forEach((el, i) => {
          if (i == 0) {
            el.text = fName.value;
          } else if (i == 1) {
            el.text = lName.value;
          } else if (i == 2) {
            el.text = email.value;
          } else if (i == 3) {
            el.text = number.value;
          } else if (i == 4) {
            el.text = comment.value;
          }
        });
      });
  },
};
</script>

<style lang="scss" scoped>

.booking {
  background: url(../assets/img/booking-header.png) no-repeat center center /
    cover;
  height: 360px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 50px;
    font-family: var(--primaryFont);
  }
  &__txt {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 20px;
    font-family: var(--primaryFont);
  }
}

.steps__booking {
  background: #282828;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  margin-top: 35px;
}

.steps__boxs {
  max-width: 1025px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  position: relative;
  flex-wrap: wrap;

  &::before {
    content: "";
    max-width: 800px;
    width: 100%;
    border-top: 1px dashed #464646;
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.steps__box {
  max-width: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  z-index: 3;
  background: #282828;
  text-align: center;

  &-txt {
    font-size: 16px;
    color: var(--third-color);
    text-transform: capitalize;
    white-space: nowrap;
  }
}

.steps__box-elips {
  text-align: center;
  max-width: 50px;
  width: 100%;
  min-width: 30px;
  min-height: 50px;
  height: 100%;
  display: grid;
  place-items: center;
  background: #464646;
  border-radius: 50%;
  font-weight: 600;
  font-size: 22px;
  color: var(--primary-color);
}

.steps__box.active {
  .steps__box-elips {
    background: var(--primary-color);
    color: var(--second-color);
  }

  .steps__box-txt {
    color: var(--primary-color);
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 0;

  .row {
    gap: 30px;
    justify-content: space-between;
  }
}

.booking__controls {
  width: 100%;
  padding: 50px 0;

  .row {
    justify-content: space-between;
    align-items: center;
  }

  &-btn {
    max-width: 222px;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    background: var(--primary-color);
    border: 0;
    color: var(--second-color);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;

    & i {
      font-size: 14px;
      padding-top: 4px;
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
      user-select: none;
    }
  }
}

.ordered-car {
  position: fixed;
  top: 0;
  left: 0;
  background: #1b1b1b;
  width: 100%;
  height: 100%;
  z-index: 20222222;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  &-text {
    color: var(--primary-color);
    font-size: calc(30px + 70 * (100vw / 1920));
    text-transform: capitalize;
    font-weight: 700;
  }

  &.show {
    display: flex;
  }
}

// <---- Media Start ---->

@media (max-width: 1430px){
  .main {
    .row:first-of-type {
      justify-content: center;
    }
  }
}

@media (max-width: 556px){
  .booking__controls{
      max-width: 250px;
      width: 100%;
      white-space: nowrap;
    }
}



@media (max-width: 691px){
  .steps__boxs {
    justify-content: center;

    &::before {
      top: 50%;
    }

    .steps__box {
      max-width: 40%;
    }
  }
}

@media (max-width: 400px){
  .steps__boxs {
    flex-direction: column;

    &::before {
      display: none;
    }

    .steps__box {
      max-width: 100%;
      border-bottom: 1px dashed #464646;
      padding-bottom: 30px;

      &:last-of-type {
        border-bottom: 0;
      }
    }
  }
}

@media (max-width: 320px) {
  .ordered-car {
    &-text {
      font-size: calc(30px + (70 + 70 * 0.7) * ((100vw - 320px)/ 1920));
    }
  }
}

</style>