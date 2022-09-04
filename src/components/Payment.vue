  <template>
  <div class="payment">
    <div class="container">
      <div class="payment__details">
        <form action="" class="payment__details-form">
          <h3 class="payment__details-title">CONTACT DETAILS</h3>

          <div class="payment__strucs1">

            <input
              type="text"
              name=""
              id=""
              class="payment__strucs-inp fName"
              placeholder="First Name"
              required
              v-model="curUserInfo.fName"
            />

            <input
              type="text"
              name=""
              id=""
              class="payment__strucs-inp lName"
              placeholder="Last Name"
              required
              v-model="curUserInfo.lName"
            />
          </div>

          <div class="payment__strucs2">

            <input
              type="email"
              name=""
              id=""
              class="payment__strucs-inp email"
              placeholder="E-mail address"
              required
              v-model="curUserInfo.email"
            />

            <input
              type="number"
              name=""
              id=""
              class="payment__strucs-inp number"
              placeholder="Phone number"
              required
              v-model="curUserInfo.number"
            />

          </div>

          <textarea
            class="payment__strucs-area comment"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Comments ..."
            required
            v-model="curUserInfo.comment"
          ></textarea>
          
        </form>

        <div class="choose__payment">
          <h3 class="choose__payment-title">Choose payment method</h3>
          <div class="choose__imgs">
            <div class="choose__image1">
              <img
                :src="require('@/assets/img/stripe.png')"
                alt=""
                class="choose__img1"
              />
            </div>
            <div class="choose__image2">
              <img
                :src="require('@/assets/img/pay.png')"
                alt=""
                class="choose__img2"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import curUserInfo from '@/assets/js/curUserInfo';

export default {
  name: "Payment",
  data() {
    return {
      curUserInfo
    }
  }
};
</script>

<style lang="scss" scoped>

.payment {
  max-width: 1080px;
  width: 100%;
}
.payment__details {
  display: flex;
  flex-direction: column;
  row-gap: 150px;
}
.payment__details-form {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.payment__details-title {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 20px;
  font-family: var(--primaryFont);
}

.payment__strucs1 {
  display: flex;
  column-gap: 54px;
}
.payment__strucs2 {
  display: flex;
  column-gap: 54px;
  row-gap: 32px;
}
.payment__strucs-inp {
  max-width: 500px;
  width: 100%;
  background: #333333;
  border-radius: 7px;
  outline: none;
  padding: 22px 0 22px 40px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  color: var(--primary-color);
}
.payment__strucs-inp::placeholder {
  color: var(--third-color);
}
.payment__strucs-area {
  padding: 22px 0 22px 40px;
  max-width: 1054px;
  width: 100%;
  background: #333333;
  border-radius: 7px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  color: var(--primary-color);
  resize: vertical;
}
.payment__strucs-area::placeholder {
  color: var(--third-color);
}
.choose__payment-title {
  font-weight: 600;
  font-size: 20px;
  font-family: var(--primaryFont);
  color: var(--primary-color);
}
.choose__imgs {
  display: flex;
  column-gap: 25px;
}
.choose__image1 {
  max-width: 334px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border: 1px solid #bababa;
}
.choose__image2 {
  max-width: 335px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  border: 1px solid #bababa;
}
.choose__payment {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}
.choose__img1 {
  max-width: 220px;
  width: 100%;
}
.choose__img2 {
  max-width: 260px;
  width: 100%;
}
@media (max-width: 736px){
   .payment__strucs1{
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    max-width: 500px;
    width: 100%;
   }
   .payment__strucs2{
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    max-width: 500px;
    width: 100%;
   }
   .payment__details-form{
    row-gap: 20px;
    align-items: center;
   }
   .payment__strucs-area{
    max-width: 500px !important;
    
   }
   .payment__strucs-inp{
    padding: 10px 0 10px 20px;
    font-size: 14px;
}
.payment__strucs-area{
    padding: 10px 0 10px 20px;
    font-size: 14px;
}
.payment__details{
    row-gap: 30px;
}
}

</style>
