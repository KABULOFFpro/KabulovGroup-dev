<template>
  <div class="footer" id="footer">
    <div class="container2">
      
      <div class="subscribe">
         
        <div class="subscribe__left">
          <h3 class="subscribe__left-title">Subscribe our newsletter</h3>
          <p class="subscribe__left-txt">
            Want to know about our offers first?
          </p>
          
          <form action="" class="forma__inp" @submit.prevent>
            <input
              type="email"
              name=""
              id=""
              placeholder="example@gmail.com"
              class="footer__inp"
            />
            <button class="forma__inp-btn">Subscribe</button>
          </form>
        </div>
        
        <div class="subscribe__right">
          <a href="#!" class="footer__logo"
            ><img src="@/assets/img/logo-dark.svg" alt=""
          /></a>
          <p class="subscribe__right-txt1">Legal</p>
          <p class="subscribe__right-txt2">Privacy Policy</p>
          <p class="subscribe__right-txt">Terms of Use</p>
        </div>
        
      </div>

      <div class="ments">
        <a
          href="#home"
          class="ment"
          v-for="(data, idx) in footerMent"
          :key="idx"
        >
          <img class="ment__call-img" :src="data.mentCallIimg" alt="" />
          <p class="ment__call-txt">{{ data.mentCallTxt }}</p>
        </a>
      </div>

      <div class="kabulov">
        <div class="container2">
          <p class="kabulov__txt">
            Copyright © 2022 The Limousine. All Rights Reserved.
          </p>
        </div>
        <a href="#home" class="kabulov__btn"
          ><i class="fas fa-long-arrow-left"></i
        ></a>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerMent: [
        {
          mentCallIimg: require("@/assets/img/call.svg"),
          mentCallTxt: "+41 79 896 96 96",
        },
        {
          mentCallIimg: require("@/assets/img/Location.svg"),
          mentCallTxt: " ch. des Saules 19, 1800 Vevey, Switzerland",
        },
        {
          mentCallIimg: require("@/assets/img/sms.svg"),
          mentCallTxt: " info@limogroup.ch",
        },
        {
          mentCallIimg: require("@/assets/img/Clock.svg"),
          mentCallTxt: "Every Day Around the clock",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--primary-color);
  padding: 70px 0 20px;
}
.subscribe__left {
  display: flex;
  flex-direction: column;
  row-gap: 35px;
}
.subscribe__left-title {
  font-weight: 900;
  font-size: 50px;
  color: var(--second-color);
}
.subscribe__left-txt {
  font-weight: 400;
  font-size: 25px;
  color: var(--third-color);
}
.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.subscribe__right {
  display: flex;
  flex-direction: column;
  
}
.subscribe__right-txt {
  text-align: end;
}
.subscribe__right-txt1 {
  text-align: end;
  margin-top: 72px;
}
.subscribe__right-txt2 {
  text-align: end;
  padding: 20px 0;
}
.forma__inp {
  display: flex;
  max-width: 580px;
  width: 100%;
  justify-content: space-between;
  background: #f0f0f0;
  border-radius: 9px;
  padding: 5px 5px 5px 25px;
}
.forma__inp-btn {
  border: none;
  padding: 17px 37px;
  font-weight: 400;
  font-size: 16px;
  background: #0e0e0e;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  color: var(--primary-color);
  cursor: pointer;
}
.footer__inp {
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
}
.ments {
  padding: 85px 0;
  display: flex;
  justify-content: space-between;
}
.ment {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 22px;
}
.ment__call-txt {
  max-width: 250px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: var(--third-color);
  text-transform: capitalize;
  font-weight: 600;
}
.ment__call-img {
  width: 40px;
  height: 40px;
}

.kabulov {
  border-top: 1px solid #d8d8d8;
  padding: 30px 0;
  text-align: center;
  position: relative;
  &__txt {
    font-weight: 400;
    font-size: 16px;
    color: var(--second-color);
  }
}

.kabulov__btn {
  position: absolute;
  top: -52px;
  right: 10%;
  color: var(--primary-color);
  background: #0e0e0e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(50%);
  max-width: 50px;
  width: 100%;
  height: 50px;
}

.kabulov__btn i {
  transform: rotate(90deg);
  font-size: 20px;
}

@media (max-width: 1440px){}
@media (max-width: 1320px){}
@media (max-width: 1290px){}
@media (max-width: 1170px){}
@media (max-width: 1140px){}
@media (max-width: 1024px){
.subscribe {
 flex-direction: column;
 row-gap: 36px;
 justify-content: center;
 &__left-txt{
  text-align: center;
 }
 &__right-txt1{
    text-align: center;
    margin-top: 30px !important;
 }
 &__right-txt2{
    text-align: center;
 }
 &__right-txt{
    text-align: center;
 }
}
}
@media (max-width: 992px){}
@media (max-width: 945px){
  .ments{
    flex-direction: column;
    row-gap: 20px;
    padding: 50px 0 !important;
  }
  .subscribe__left-title{
    text-align: center;
  }
}

@media (max-width: 850px){}
@media (max-width: 768px){}
@media (max-width: 736px){}
@media (max-width: 734px){}
@media (max-width: 684px){}
@media (max-width: 667px){}
@media (max-width: 576px){

}
@media (max-width: 480px){
  .forma__inp-btn{
    padding: 11px 24px;
  }
}
@media (max-width: 414px){}
@media (max-width: 412px){}
@media (max-width: 375px){}
@media (max-width: 360px){}

@media (max-width: 330px){
    .forma__inp-btn{
    padding: 8px 18px;
  }
}
@media (max-width: 320px){}
</style>
