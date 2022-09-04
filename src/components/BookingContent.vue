<template>
  <div class="booking__cars-list">
    <div class="booking__car" v-for="(car, idx) in cars" :key="idx">
      <div class="booking__car-img-box">
        <img :src="car.image" alt="" class="booking__car-img" />
      </div>

      <div class="booking__car-information">
        <div class="booking__car-desc">
          <p class="booking__car-name">{{ car.name }}</p>
          <p class="booking__car-price">${{ car.price }}.00</p>

          <button class="more-info-btn">
            <span class="down-icon"><i class="far fa-chevron-down"></i></span>
            more info
          </button>
        </div>

        <div class="booking__car-select">
          <button class="car-select-btn" @click="addCar(idx)">select</button>

          <p class="car-persons">
            <span class="persons-num">{{ car.persons }}</span>
            <i class="fal fa-users"></i>
          </p>

          <p class="car-bags">
            <span class="bags-num">{{ car.bags }}</span>
            <i class="fal fa-briefcase"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookingData from "@/assets/js/data";
import BookingDetailsVue from "./BookingDetails.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Booking Cars",
  data() {
    return {
      cars: [
        {
          image: require("@/assets/img/fleets1.png"),
          name: "mercedes benz v-class",
          price: 44500,
          persons: 7,
          bags: 7,
          id: uuidv4(),
        },
        {
          image: require("@/assets/img/fleets2.png"),
          name: "mercedes benz s-class",
          price: 48000,
          persons: 2,
          bags: 2,
          id: uuidv4(),
        },
        {
          image: require("@/assets/img/fleets3.png"),
          name: "bmw m5 f90 competition",
          price: 39000,
          persons: 2,
          bags: 2,
          id: uuidv4(),
        },
      ],
      bookingData,
      ids: [],
    };
  },
  components: {
    BookingDetails: BookingDetailsVue,
  },
  methods: {
    addCar(id) {
      let chosenCarsData = this.bookingData,
        carName = this.cars[id].name,
        carPrice = this.cars[id].price,
        carId = this.cars[id].id,
        carImg = this.cars[id].image;
        
      if (
        isNaN(carPrice) ||
        !isNaN(carName) ||
        carPrice === "" ||
        carName === ""
      ) {
        return;
      } else {
        for (const key in chosenCarsData) {
          if (key == "chosenVehicles") {
            if (chosenCarsData[key].length > 0) {
              if (!this.ids.includes(carId)) {
                chosenCarsData[key].push(
                  {
                    name: carName,
                    price: carPrice,
                    id: carId,
                    img: carImg
                  }
                );
                this.ids.push(carId);
              }
            } else {
              chosenCarsData[key].push(
                {
                  name: carName,
                  price: carPrice,
                  id: carId,
                  img: carImg
                }
              );
              this.ids.push(carId);
            }
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.booking__cars-list {
  max-width: 1080px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .booking__car {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 35px;
    padding: 35px 0;
    border-bottom: 1px dashed #b3b3b3;

    &:first-of-type {
      padding-top: 0;
    }

    &-img-box {
      max-width: 360px;
      width: 100%;
      background: #333333;
      border-radius: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 10px;

      img {
        width: 100%;
        max-height: 160px;
        min-height: 160px;
        height: 100%;
        object-fit: cover;
      }
    }

    &-information {
      max-width: 685px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-desc {
      max-width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-name {
      font-size: 25px;
      color: var(--primary-color);
      text-transform: capitalize;
    }

    &-price {
      font-size: calc(25px + (25 + 25 * 0.7) * ((100vw - 320px) / 1920));
      color: var(--primary-color);
      text-transform: capitalize;
      font-weight: 700;
    }

    &-select {
      max-width: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: 20px;

      .car-persons {
        margin-top: auto;
      }

      .car-persons,
      .car-bags {
        padding: 5px 10px;
        border: 1px solid var(--third-color);
        font-size: 25px;
        display: flex;
        align-items: center;
        column-gap: 15px;

        span {
          color: var(--primary-color);
          font-weight: 500;
        }

        i {
          color: var(--third-color);
        }
      }

      .car-select-btn {
        padding: 10px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--second-color);
        background: var(--primary-color);
        text-transform: capitalize;
        font-size: 15px;
        border: 0;
        cursor: pointer;
        border-radius: 8px;
      }
    }

    .more-info-btn {
      max-width: max-content;
      display: flex;
      column-gap: 15px;
      align-items: center;
      background: transparent;
      cursor: pointer;
      font-size: 16px;
      color: var(--primary-color);
      border: 0;
      text-transform: capitalize;

      .down-icon {
        min-width: 30px;
        max-width: 30px;
        width: 100%;
        min-height: 30px;
        max-height: 30px;
        height: 100%;
        background: var(--primary-color);
        color: var(--second-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border-radius: 50%;
        padding-top: 2px;
      }
    }
  }
}
@media (min-width: 1920px){
    .booking__car-price{
      font-size: 50px !important;
    }
}

@media (max-width: 840px){
  .booking__car{
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 394px){
     .booking__cars-list .booking__car-img-box img{
      object-position: left;
     }
}
</style>
