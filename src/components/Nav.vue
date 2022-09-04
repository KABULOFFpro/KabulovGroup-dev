<template>
  <div class="nav" id="nav">
    <div class="container">
      <div class="row">
        <router-link to="/" class="nav__logo"
          ><img src="@/assets/img/logo-light.svg" alt=""
        /></router-link>

        <div class="nav__collapse" :class="{ nav__opened: navOpened }">
          <ul class="nav__list">
            <li class="nav__item" v-for="(link, idx) in navLinks" :key="idx">
              <a :href="`#${link}`" class="nav__link">{{ link }}</a>
            </li>
          </ul>

          <ul class="nav__list2">
            <a href="#!" class="nav__nomer">+41 79 896 96 96</a>
            <select name="" id="" class="nav__select">
              <option class="nav__option" value="">Eng</option>
              <option class="nav__option" value="">Rus</option>
              <option class="nav__option" value="">Uzb</option>
            </select>
            <a href="#footer" class="nav__list2-btn">Contact Us</a>
          </ul>
        </div>

        <button class="nav__btn" @click="navOpened = !navOpened">
          <span class="nav__btn-line"></span>
          <span class="nav__btn-line"></span><span class="nav__btn-line"></span>
        </button>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="container">
      <section class="section1"></section>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navLinks: ["home", "about us", "our services", "fleets"],
      navOpened: false,
    };
  },
};
</script>

<style lang="scss" scoped>

.nav {
  width: 100%;
  padding: 45px 0;
  background: #1b1b1b;
  overflow-y: auto;
  z-index: 2022;
  position: sticky;
  top: 0;
  
  .row {
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
    flex-wrap: unset;
  }
  .nav__logo {
    display: flex;
    align-content: center;
    column-gap: 10px;
    font-size: 24px;
    color: var(--primary-color);
  }
  .nav__collapse {
    max-width: 1094px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__list {
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
    column-gap: 20px;
  }
  .nav__link {
    color: var(--third-color);
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .nav__select {
    border: none;
    outline: none;
    color: var(--primary-color);
    background: unset;
    font-size: 18px;
  }
  .nav__list2 {
    display: flex;
    column-gap: 30px;
    align-items: center;
  }
  .nav__list2-btn {
    filter: drop-shadow(0px 15px 50px rgba(255, 255, 255, 0.25));
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: var(--second-color);
    background: var(--primary-color);
    padding: 12px 38px;
    border-radius: 9px;
  }
  .nav__nomer {
    font-size: 18px;
    color: var(--primary-color);
  }
  .nav__option {
    background: #1b1b1b;
    border: solid 1px #1b1b1b;
  }
  .nav__btn {
    width: 35px;
    height: max-content;
    background: transparent;
    border: none;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 8px;
    cursor: pointer;
  }

  .nav__btn-line {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    border-radius: 6px;
  }

  .nav__btn-line:nth-of-type(2) {
    width: 28px;
  }

  @media (max-width: 1200px) {
    .nav__btn {
      display: flex !important;
    }

    .nav__collapse {
      position: fixed;
      top: 0;
      left: 0;
      transform: translateX(-110%);
      transition: 0.4s;
      flex-direction: column;
      min-height: 100vh;
      max-width: max-content;
      justify-content: center;
      padding: 10px 20px;
      align-items: flex-start;
      row-gap: 30px;
      background: #1b1b1b;
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);
      z-index: 999;

      &.nav__opened {
        transform: translateX(0);
      }

      & > .nav__list {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
      }

      & > .nav__list2 {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        & > .nav__list2-btn {
          filter: unset;
        }
      }
    }
  }
}

</style>