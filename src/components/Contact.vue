<template>
  <div class="contact">
    <div class="container2">
      
      <div class="contact__content">
        
        <Title sectionName="contact__content" titleText="Contact us"/>
        
        <p class="contact__content-txt">
          Perhaps you have any questions? Please write to us
        </p>
        
        <div class="desc">
          <form action="" class="descs__left" @submit.prevent>
            <input
              class="descs__left-inp"
              type="text"
              name=""
              id=""
              placeholder="Name ..."
            />
            <input
              class="descs__left-inp"
              type="email"
              name=""
              id=""
              placeholder="example@gmail.com"
            />
            <input
              class="descs__left-inp"
              type="number"
              name=""
              id=""
              placeholder="+998 90 901  54 55"
            />
            <textarea
              class="descs__left-inp"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message ..."
            ></textarea>
            <div class="descs__left-btns">
              <p class="descs__left-txt">
                I agree to the Terms of Service and Privacy Policy.
              </p>
              <button class="descs__left-btn">Submit Now</button>
            </div>
          </form>
          
          <div class="descs__right">
            <img
              src="@/assets/img/contact-us.png"
              alt=""
              class="descs__right-img"
            />
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import TitleVue from './Title.vue';
export default {
  name: 'Contact',
  components: {
    Title: TitleVue
  }
};
</script>

<style lang="scss" scoped>
.contact__content {
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  
  &-title {
    font-weight: 400;
    font-size: 70px;
    color: var(--primary-color);
  }
  &-txt {
    font-weight: 400;
    font-size: 25px;
    color: var(--third-color);
  }
}
.desc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
}

.descs__left {
  max-width: 625px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  
  &-inp {
    padding: 16px 0 16px 21px;
    color: var(--third-color);
    background: #3a3a3a;
    border-radius: 9px;
    border: none;
    outline: none;
    resize: vertical;
  }
  &-btn {
    padding: 12px 53px;
    border-radius: 8px;
    cursor: pointer;
  }
  &-txt {
    color: var(--primary-color);
  }
}

.descs__right {
  max-width: 665px;
  width: 100%;
  
  img {
    width: 100%;
    border-radius: 16px;
  }
}

.descs__left-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1440px){}
@media (max-width: 1400px){
  .desc {
    justify-content: center;
  }
}
@media (max-width: 1357px){
  .contact__content {
    align-items: center;
    text-align: center;
  }
}
@media (max-width: 1320px){}
@media (max-width: 1290px){}
@media (max-width: 1170px){
  .desc {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
@media (max-width: 1140px){}
@media (max-width: 1024px){}
@media (max-width: 992px){}
@media (max-width: 850px){}
@media (max-width: 768px){}
@media (max-width: 736px){}
@media (max-width: 734px){}
@media (max-width: 684px){}
@media (max-width: 667px){
  .descs__left-btns{
    flex-direction: column;
    row-gap: 20px;
  }
}
@media (max-width: 576px){}
@media (max-width: 480px){}
@media (max-width: 414px){}
@media (max-width: 412px){}
@media (max-width: 375px){}
@media (max-width: 360px){}
@media (max-width: 320px){}


</style>
