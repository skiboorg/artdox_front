<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container class="bg-grey-2">
      <div class="container-lk">
        <q-breadcrumbs class="breadcrumbs lk">
      <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />

      <q-breadcrumbs-el :label="$route.meta.title" />
    </q-breadcrumbs>
           <div class="lk-wrapper">
        <div  class="gt-sm user-menu-wrapper">
           <UserMenu/>
        </div>

         <router-view />
      </div>
      </div>


    </q-page-container>
    <q-page-scroller >
      <q-btn  icon-right="arrow_upward" class="text-montserrat q-px-lg text-body1 q-mr-lg" no-caps rounded unelevated color="dark" text-color="white" label="Наверх" />
    </q-page-scroller>
  </q-layout>
 <Footer/>
</template>

<script>
import UserMenu from "components/UserMenu";
import Header from "components/Header";
import Footer from "components/Footer";

export default {
  components: {Header,Footer,UserMenu},
  data(){
    return{
      userMenu:false,
    }
  }
}
</script>
<style lang="sass" scoped>
.lk-wrapper
  display: grid
  grid-template-columns: 2fr 9fr
  grid-gap: 20px
@media (max-width: 1024px)
  .lk-wrapper
    grid-template-columns: 1fr
.user-menu-wrapper
  height: fit-content
  padding: 10px 0
  background: #FFFFFF
</style>
