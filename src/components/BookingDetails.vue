<template>
    <div class="booking__details">

        <div class="booking__details-box">
            <p class="booking__details-title">{{ data.title }}</p>

            <div class="booking__informations-box">

                <div class="booking__info info-card" v-for="(info, idx) in data.informations" :key="idx">
                    <p class="booking__info-title info-card-title">{{ info.title }}</p>
                    <p class="booking__info-text info-card-text">{{ info.info }}</p>
                </div>

                <div class="distance__info info-card">

                    <div class="distance__info-card" v-for="(disInfo, idx) in data.distanceInfo" :key="idx">
                        <p class="distance__info-title info-card-title">{{ disInfo.title }}</p>
                        <p class="distance__info-number info-card-text">{{ disInfo.num }}</p>
                    </div>

                </div>

                <div class="chosen-vehicles__info info-card" v-show="data.chosenVehicles.length">
                    <p class="vehicle__info-title info-card-title">vehicle</p>

                    <p class="vehicle-name info-card-text" v-for="(car, idx) in data.chosenVehicles" :key="idx">{{ car.name }}  <span class="vehicle-price">{{ car.price ? `$${car.price}` : 0}}</span></p>
                </div>

            </div>

        </div>

        <p class="total-price" v-show="totalPriceShow">
            total
            <span class="total-price-num">{{ data.totalPrice() ? `$${data.totalPrice()}.00` : '$0.00'}}
        </span></p>
    </div>
  
</template>

<script>
import bookingData from '../assets/js/data.js';

export default {
    name: "Booking Details",
    data() {
        return {
            data: bookingData
        }
    },
    props: {
        totalPriceShow: {
            type: Boolean,
            default: true
        }
    }
}
</script> 

<style lang="scss" scoped>

.booking__details {
    max-width: 290px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    height: max-content;

    &-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
        background: #333333;
        border-radius: 17px;
        height: max-content;
        row-gap: 25px;

        .booking__details-title {
            font-size: 18px;
            color: var(--primary-color);
            text-transform: capitalize;
            font-weight: 600;
        }

        .booking__informations-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 25px;

            .info-card {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding-bottom: 20px;
                border-bottom: 1px dashed #B3B3B3;
                row-gap: 7px;

                &:last-of-type {
                    border-bottom: 0;
                }

                &-title {
                    font-size: 15px;
                    color: var(--third-color);
                    text-transform: uppercase;
                }

                &-text {
                    font-size: 15px;
                    color: var(--primary-color);
                    text-transform: capitalize;
                }
            }

            .vehicle-name {
                width: 100%;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
            }

            .distance__info {
                display: flex;
                column-gap: 10px;
                flex-direction: row !important;
                justify-content: space-between;

                &-card {
                    max-width: max-content;
                }
            }

            .chosen-vehicles__info {
                padding-bottom: 0 !important;
            }

        }

    }

    .total-price {
        width: 100%;
        font-size: 16px;
        color: var(--primary-color);
        text-transform: capitalize;
        padding: 15px 0;
        border-top: dashed 1px #B3B3B3;
        display: flex;
        justify-content: space-between;
    }
}
@media (max-width: 1430px){
    .booking__details{
        max-width: 600px !important;
    }
    .main .row[data-v-bbb6eae2] {
        gap: 30px;
        justify-content: center;
    }
}


</style>