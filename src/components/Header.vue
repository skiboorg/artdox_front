<template>
  <q-header class="bg-white header">
      <div class="container header-wrapper">
        <q-btn class="lt-md" @click="leftDrawerOpen=!leftDrawerOpen" round unelevated icon="menu" text-color="dark"/>
 <div class="header-logo cursor-pointer flex" @click="$router.push({name:'index'})">
            <img class="img"  src="~assets/logo.svg" alt="">
        </div>
        <div class="gt-sm nav">
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'about'}">О нас</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'profit'}">Доход</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'gallery'}">Галерея</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'contacts'}">Контакты</router-link>
        </div>


        <div class="header-buttons flex items-center ">
          <div class="gt-sm q-gutter-md">

            <q-btn v-if="!$auth.loggedIn" class="q-px-lg" :to="{name:'login'}" outline rounded unelevated no-caps text-color="dark" label="Вход"/>
            <q-btn v-if="!$auth.loggedIn" class="q-px-lg" :to="{name:'register'}" outline rounded unelevated no-caps text-color="dark" label="Регистрация"/>
            <q-btn v-if="$auth.loggedIn" :to="{name:'cart'}"  round unelevated outline no-caps text-color="dark" icon="shopping_basket">
              <q-badge rounded v-if="cart.items.length>0" color="red" floating>{{cart.items.length}}</q-badge>
            </q-btn>
            <q-btn v-if="$auth.loggedIn" round unelevated @mouseenter="userMenu=!userMenu" color="dark" icon="person_outline"/>
          </div>
          <div class="lt-md q-gutter-md">

            <q-btn v-if="!$auth.loggedIn"  :to="{name:'login'}"  round dense unelevated no-caps text-color="dark" icon="login"/>
            <q-btn v-if="!$auth.loggedIn"  :to="{name:'register'}"  round dense unelevated no-caps text-color="dark" icon="person_add"/>
            <q-btn v-if="$auth.loggedIn" :to="{name:'cart'}"  round unelevated dense outline no-caps text-color="dark" icon="shopping_basket">
              <q-badge rounded v-if="cart.items.length>0" color="red" floating>{{cart.items.length}}</q-badge>
            </q-btn>
            <q-btn v-if="$auth.loggedIn" round unelevated dense @mouseenter="userMenu=!userMenu" @click="userMenu=!userMenu" color="dark" icon="person_outline"/>
          </div>


        </div>
        <div class="header-mobile" @mouseleave="userMenu=!userMenu" :class="{active:userMenu}">
          <UserMenu />
        </div>
      </div>

    </q-header>

        <q-drawer
          v-model="leftDrawerOpen"

          bordered
          class="q-px-sm"
        >
          <div class="q-pt-lg q-mb-xl">
             <q-btn @click="leftDrawerOpen=!leftDrawerOpen" round unelevated icon="close" text-color="dark"/>
          </div>
          <div class="q-mb-md">
            <q-btn class="q-px-lg" :to="{name:'login'}" outline rounded unelevated no-caps text-color="dark" label="Вход"/>
          </div>
           <div class="q-mb-xl">
             <q-btn class="q-px-lg" :to="{name:'register'}" color="dark" rounded unelevated no-caps text-color="white" label="Регистрация"/>
           </div>
          <div class="flex column items-start">
            <router-link exact exact-active-class="active" class="nav-link " :to="{name:'about'}">О нас</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'profit'}">Доход</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'gallery'}">Галерея</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'contacts'}">Контакты</router-link>
          </div>



        </q-drawer>
</template>
<script>
import UserMenu from "components/UserMenu";
import {mapGetters} from "vuex";

export default {
  components: {UserMenu},
  data(){
    return{
      leftDrawerOpen:false,
      userMenu:false,
    }
  },
   watch:{
    '$route.path'(val){
      this.userMenu = false
    }
   },
  computed:{
    ...mapGetters('data',['cart'])
  }
}
</script>
<style lang="sass" scoped>
.header
  border-bottom: 1px solid #E5E5E5

  &-wrapper
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 0
  &-mobile
    position: absolute
    background: #FFFFFF
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1)
    width: 240px
    right: 0
    opacity: 0
    pointer-events: none
    top: 107px
    padding: 10px 0
    transition: all .2s linear
    &.active
      opacity: 1
      pointer-events: all
      top: 97px
.nav
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 35px
  &-link
    position: relative
    text-decoration: none
    color: #515151
    font-family: 'Avenir Next Cyr 400', sans-serif
    font-size: 14px
    text-align: center
    &::after
      position: absolute
      content: ''
      bottom: 0
      height: 1px
      width: 0%
      left: 50%
      transform: translateX(-50%)
      background: #6A6B70

      transition: all .2s linear
    &:hover
      &::after
        position: absolute
        content: ''
        bottom: 0
        height: 1px
        width: 100%
        left: 0
        background: #515151
        transform: translateX(0)
        transition: all .2s linear



    &.active
      color: $dark
      &::after
        width: 100%
        left: 0
        transform: translateX(0)

@media (max-width: 1024px)
  .header-wrapper
    padding: 10px 10px

  .nav-link
    position: relative
    font-size: 24px
    margin-bottom: 32px

    &:last-child
      margin-bottom: 0
</style>
