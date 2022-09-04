<template>
  <div class="cartier">
    <div class="container">
        <div class="cartiers">
            <div class="container2">
                <div class="cartiers__imgs">
                    <img src="@/assets/img/partner1.png" alt="" class="cartiers__image">
                    <img src="@/assets/img/partner2.png" alt="" class="cartiers__image">
                    <img src="@/assets/img/partner3.png" alt="" class="cartiers__image">
                    <img src="@/assets/img/partner4.png" alt="" class="cartiers__image">
                    <img src="@/assets/img/partner5.png" alt="" class="cartiers__image">
                </div>
            </div>
        </div>
    </div>  
  </div>
  
</template>

<script>
export default {
    name: "Cartier"
}
</script>

<style lang="scss" scoped>

.cartiers{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: var(--primary-color);
    margin-bottom: 87px;
}
.cartiers__imgs{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    padding: 70px 0;
    
    
    .cartiers__image {
        width: 100%;
        max-width: 250px;
    }
}

@media (max-width: 1440px){}
@media (max-width: 1320px){}
@media (max-width: 1290px){}
@media (max-width: 1170px){}
@media (max-width: 1140px){}
@media (max-width: 1024px){}
@media (max-width: 992px){}
@media (max-width: 850px){}
@media (max-width: 768px){}
@media (max-width: 736px){}
@media (max-width: 734px){}
@media (max-width: 684px){}
@media (max-width: 667px){}
@media (max-width: 576px){
    .cartiers__imgs{
        max-width: 190px;
        margin: 0 auto;
         
    }
}
@media (max-width: 480px){}
@media (max-width: 414px){}
@media (max-width: 412px){}
@media (max-width: 375px){}
@media (max-width: 360px){}
@media (max-width: 320px){}

</style>