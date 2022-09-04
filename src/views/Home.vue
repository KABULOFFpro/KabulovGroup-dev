<template>
  <Nav/>
  <Header/>
  <About/>
  <Our/>
  <Fleets/>
  <Cartier/>
  <Choose/>
  <Contact/>
  <Footer/>
</template>

<script>
import NavVue from '../components/Nav.vue'
import HeaderVue from '../components/Header.vue'
import AboutVue from '../components/AboutUs.vue';
import OurVue from '../components/Our.vue';
import Fleets from '../components/fleets.vue';
import Choose from '../components/choose.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/footer.vue';
import CartierVue from '@/components/Cartier.vue';
export default {
  name: "Home",
  components: {
    Nav: NavVue,
    Header: HeaderVue,
    About: AboutVue,
    Our: OurVue,
    Fleets,
    Choose,
    Contact,
    Footer,
    Cartier: CartierVue
}
}

</script>

<style lang="scss" scoped>

</style>