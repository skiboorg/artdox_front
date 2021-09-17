<template>
  <q-header class="bg-white header">
      <div class="container header-wrapper">
        <q-btn class="lt-md" @click="leftDrawerOpen=!leftDrawerOpen" round unelevated icon="menu" text-color="dark"/>
        <div class="header-logo cursor-pointer flex" @click="$router.push({name:'index'})">
            <img src="~assets/logo.png" alt="">
        </div>
        <div class="gt-sm nav">
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'about'}">О нас</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'profit'}">Доход</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'gallery'}">Галерея</router-link>
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'about'}">Контакты</router-link>
        </div>

        <div class="header-buttons flex items-center ">
          <div class="gt-sm q-gutter-md">
            <q-btn class="q-px-lg" :to="{name:'login'}" outline rounded unelevated no-caps text-color="dark" label="Вход"/>
            <q-btn class="q-px-lg" :to="{name:'register'}" outline rounded unelevated no-caps text-color="dark" label="Регистрация"/>
             <q-btn  :to="{name:'cart'}"  round unelevated outline no-caps text-color="dark" icon="shopping_basket"/>
            <q-btn round unelevated @mouseenter="userMenu=!userMenu" color="dark" icon="person_outline"/>
          </div>

          <div @click="$router.push({name:'cart'})" class="lt-md q-ml-md-xl header-cart flex items-center cursor-pointer">
            <svg class="q-mr-sm" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5833 5H11.6667V4C11.6667 2.93913 11.2569 1.92172 10.5276 1.17157C9.79833 0.421427 8.80918 0 7.77778 0C6.74638 0 5.75723 0.421427 5.02792 1.17157C4.29861 1.92172 3.88889 2.93913 3.88889 4V5H0.972222C0.714373 5 0.467084 5.10536 0.284757 5.29289C0.10243 5.48043 0 5.73478 0 6V17C0 17.7956 0.307291 18.5587 0.854272 19.1213C1.40125 19.6839 2.14312 20 2.91667 20H12.6389C13.4124 20 14.1543 19.6839 14.7013 19.1213C15.2483 18.5587 15.5556 17.7956 15.5556 17V6C15.5556 5.73478 15.4531 5.48043 15.2708 5.29289C15.0885 5.10536 14.8412 5 14.5833 5ZM5.83333 4C5.83333 3.46957 6.03819 2.96086 6.40285 2.58579C6.7675 2.21071 7.26208 2 7.77778 2C8.29348 2 8.78805 2.21071 9.15271 2.58579C9.51736 2.96086 9.72222 3.46957 9.72222 4V5H5.83333V4ZM13.6111 17C13.6111 17.2652 13.5087 17.5196 13.3264 17.7071C13.144 17.8946 12.8967 18 12.6389 18H2.91667C2.65882 18 2.41153 17.8946 2.2292 17.7071C2.04687 17.5196 1.94444 17.2652 1.94444 17V7H3.88889V8C3.88889 8.26522 3.99132 8.51957 4.17365 8.70711C4.35597 8.89464 4.60326 9 4.86111 9C5.11896 9 5.36625 8.89464 5.54858 8.70711C5.7309 8.51957 5.83333 8.26522 5.83333 8V7H9.72222V8C9.72222 8.26522 9.82465 8.51957 10.007 8.70711C10.1893 8.89464 10.4366 9 10.6944 9C10.9523 9 11.1996 8.89464 11.3819 8.70711C11.5642 8.51957 11.6667 8.26522 11.6667 8V7H13.6111V17Z" fill="#B1B1B1"/>
            </svg>
            <p class="no-margin text-grey-5 text-avenir-600">12</p>
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
          <router-link exact exact-active-class="active" class="nav-link" :to="{name:'about'}">Контакты</router-link>
          </div>



        </q-drawer>
</template>
<script>
import UserMenu from "components/UserMenu";

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
  methods:{
    ttt(){
      console.log('ss')
    }
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
    text-decoration: none
    color: #6A6B70
    font-family: 'Avenir Next Cyr 400', sans-serif
    font-size: 16px
    &.active
      color: $dark
@media (max-width: 1024px)
  .header-wrapper
    padding: 10px 10px
  .nav-link
    font-size: 24px
    margin-bottom: 32px
    &:last-child
      margin-bottom: 0
</style>
