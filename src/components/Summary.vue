<template>
  <div class="summary__content">
    <div class="container2">
      <div class="row">

        <div class="contacts">

          <div class="contact1">
            <h5 class="contact1__title">Contact & Billing Info</h5>
            <div
              class="contact1__info"
              v-for="(user, idx) in userInfo"
              :key="idx"
            >
              <p class="contact1__info-title">{{ user.title }}</p>
              <p class="contact1__info-txt">{{ user.text }}</p>
            </div>

            <button class="contact1__info-btn edit-btn">Edit</button>
          </div>

          <div class="contact2">
            <h5 class="contact1__title">Payment Method</h5>
            <div class="contact2__info">
              <p class="contact1__info-title">YOUR CHOISE</p>
              <p class="contact1__info-txt">Stripe</p>
            </div>
            <button class="contact1__info-btn edit-btn">Edit</button>
          </div>

        </div>

        <div class="details">
          <div class="details__kart">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11990.25818013402!2d69.27582199999999!3d41.29658075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661256029656!5m2!1sru!2s"
              width="100%"
              height="350"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <BookingDetails :totalPriceShow="false"/>
          </div>
        </div>

        <div class="selected__cars-list">
          <div class="selected__car" v-for="(car, idx) in bookingData.chosenVehicles" :key="idx">
            <div class="selected__img-box">
              <img :src="car.img" alt="" class="selected-img">
            </div>
            
            <div class="selected__car-info">
              <p class="selected__car-name">{{ car.name }}</p>
              <p class="selected__car-price">
                selected vehicle 
                <span class="selected__car-price-num">${{ car.price ? car.price : 0 }}.00</span>
              </p>
            </div>
          </div>
          
          <p class="selected__cars-total-price" v-show="bookingData.chosenVehicles.length > 0">
            total  
            <span class="selected__car-total-price-num">${{ bookingData.totalPrice() ? bookingData.totalPrice() : 0 }}.00</span>
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import BookingDetailsVue from './BookingDetails.vue';
import bookingData from '@/assets/js/data';
import curUserInfo from '@/assets/js/curUserInfo.js';

export default {
  name: 'Summary',
  props: {
    userInfo: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curUserInfo,
      bookingData
    };
  },
  components: {
    BookingDetails: BookingDetailsVue 
  },
};
</script>

<style lang="scss" scoped>

.summary__content {
  width: 100%;  
}

.row {
  justify-content: space-between;
}

.contacts {
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}
.contact1 {
  max-width: 430px;
  width: 100%;
  background: #333333;
  border-radius: 17px;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  &__title {
    color: var(--primary-color);
    font-family: var(--primaryFont);
    font-weight: 700;
    font-size: 18px;
  }
}
.contact1__info {
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed #b3b3b3;
  row-gap: 11px;

  &-title {
    font-weight: 400;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
  &-txt {
    font-weight: 400;
    font-size: 16px;
    color: var(--primary-color);
    padding-bottom: 18px;
    text-transform: capitalize;
  }
}

.contact2 {
  max-width: 430px;
  width: 100%;
  background: #333333;
  border-radius: 17px;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  &__info {
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed #b3b3b3;
    row-gap: 11px;
  }
}

.details {
  max-width: 436px;
  width: 100%;
  border-radius: 17px 17px 0px 0px;
  overflow: hidden;
}

.details__kart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #333333;
}

.booking__details {
  max-width: 100%;
}

.selected__cars-list {
  max-width: 435px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 50px;
  height: max-content;
  
  .selected__car {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #B3B3B3;
  
    .selected__img-box {
      width: 100%;
      background: #333333;
      border-radius: 17px;
      padding: 70px 25px;
      
      .selected-img {
        width: 100%;
        max-height: 165px;
        height: 100%;
        object-fit: cover;  
      }
    }
    
    .selected__car-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
      
      .selected__car-name {
        font-size: 30px;
        color: var(--primary-color);
        text-transform: capitalize;
      }
      
      .selected__car-price {
        width: 100%;
        color: var(--primary-color);
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  
  .selected__cars-total-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-color);
    text-transform: capitalize;
    padding-bottom: 20px;
  }
}

@media (max-width: 936px){
  .row {
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}


</style>