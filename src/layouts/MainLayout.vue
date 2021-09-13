<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-scroller >
      <q-btn  icon="arrow_upward" dense class="text-montserrat " no-caps round unelevated color="dark" text-color="white"  />
    </q-page-scroller>
  </q-layout>
 <Footer/>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";

export default {
  components: {Header,Footer},
  data(){
    return{
      userMenu:false,
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
