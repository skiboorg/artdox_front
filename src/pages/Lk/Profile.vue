<template>
  <q-page class="">

    <div class="profile-wrapper">
      <div class="lk-card">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Мой профиль</p>
        </div>
        <div class="flex items-center">
          <q-avatar size="125px" class="q-mr-lg">
            <img style="object-fit: cover" :src="$auth.user.avatar" alt="">
          </q-avatar>
          <div class="">
            <p class="q-mb-sm text-body2 text-avenir-450">{{$auth.user.fio}}</p>
            <p class="q-mb-sm text-caption text-grey-6">{{$auth.user.email}}</p>
            <p class="q-mb-none text-caption text-grey-6">{{$auth.user.phone}}</p>
            <q-separator spaced="md"/>
            <p class="q-mb-sm text-caption text-grey-6 text-avenir-450">Дата регистрации {{new Date($auth.user.date_joined).toLocaleDateString()}}</p>
          </div>

        </div>
        <q-separator spaced="lg"/>

        <div class="row ">
          <div class="col-6">
            <p class="text-body2 text-avenir-450 text-dark q-mb-sm"> <a  href="/d-of-ARTDOX.pdf" target="_blank" >Договор Оферты</a></p>
            <p class="text-body2 text-avenir-450 text-dark q-mb-sm"> <a class="text-body2 text-avenir-450 text-dark " href="/d-z.pdf" target="_blank" >Договор Заклада</a></p>
            <p class="text-body2 text-avenir-450 text-dark q-mb-sm"> <a class="text-body2 text-avenir-450 text-dark " href="/d-o-i-u.pdf" target="_blank" >Договор Хранения</a> </p>
            <p class="text-body2 text-avenir-450 text-dark q-mb-sm"><a class="text-body2 text-avenir-450 text-dark " href="/ARTDOX-p-s.pdf" target="_blank" >Пользовательское соглашение</a> </p>
            <p class="text-body2 text-avenir-450 text-dark no-margin"> <a class="text-body2 text-avenir-450 text-dark " href="/ARTDOX-conf.pdf" target="_blank" >Политика Конфиденциальности</a></p>
          </div>
          <div class="col-6 text-right">

            <p class="text-body2 text-avenir-450 text-grey-8 q-mb-sm">Cогласее при регистрации</p>
            <p class="text-body2 text-avenir-450 text-grey-8 q-mb-sm">Cогласее при регистрации</p>
            <p class="text-body2 text-avenir-450 text-grey-8 q-mb-sm">До 26.01.22</p>
            <p class="text-body2 text-avenir-450 text-grey-8 q-mb-sm">До 26.01.22</p>
            <p class="text-body2 text-avenir-450 text-grey-8 q-mb-sm">До 26.01.22</p>
          </div>
        </div>

      </div>

           <div class="lk-card q-mb-md">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Доходность</p>
        </div>
        <div class="row q-col-gutter-sm q-mb-sm">
          <div class="col-12 col-md-4 ">
            <div class="bg-grey-2 q-pa-md">
              <p  class="no-margin text-caption text-avenir-400 ">Общее число картин</p>
              <div class="flex items-center">
                <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.66602 6.66602C6.2183 6.66602 6.66602 6.2183 6.66602 5.66602C6.66602 5.11373 6.2183 4.66602 5.66602 4.66602C5.11373 4.66602 4.66602 5.11373 4.66602 5.66602C4.66602 6.2183 5.11373 6.66602 5.66602 6.66602Z" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.0007 9.99935L10.6673 6.66602L3.33398 13.9993" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p class="no-margin text-body2 text-avenir-450">{{$auth.user.total_amount}}</p>
              </div>


            </div>

          </div>
          <div class="col-12 col-md-4">
            <div class="bg-grey-2 q-pa-md">
              <p  class="no-margin text-caption text-avenir-400 ">Картины на хранении</p>
              <div class="flex items-center">
                <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00065 1.33398L1.33398 4.66732L8.00065 8.00065L14.6673 4.66732L8.00065 1.33398Z" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.33398 11.334L8.00065 14.6673L14.6673 11.334" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.33398 8L8.00065 11.3333L14.6673 8" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                <p class="no-margin text-body2 text-avenir-450">{{$auth.user.total_in_localstore}}</p>
              </div>


            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="bg-grey-2 q-pa-md">
              <p  class="no-margin text-caption text-avenir-400 ">Картины на закладе</p>
              <div class="flex items-center">
                <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M8 0.666016V15.3327" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.3333 3.33398H6.33333C5.71449 3.33398 5.121 3.57982 4.68342 4.0174C4.24583 4.45499 4 5.04848 4 5.66732C4 6.28616 4.24583 6.87965 4.68342 7.31723C5.121 7.75482 5.71449 8.00065 6.33333 8.00065H9.66667C10.2855 8.00065 10.879 8.24648 11.3166 8.68407C11.7542 9.12165 12 9.71515 12 10.334C12 10.9528 11.7542 11.5463 11.3166 11.9839C10.879 12.4215 10.2855 12.6673 9.66667 12.6673H4" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>


                </svg>


                <p class="no-margin text-body2 text-avenir-450">{{$auth.user.total_in_store}}</p>
              </div>


            </div>
          </div>
        </div>

        <div class="row q-col-gutter-sm q-mb-lg">
          <div class="col-12 col-md-6 ">
            <div class="bg-grey-2 q-pa-md">
              <p  class="no-margin text-caption text-avenir-400 ">Общая сумма картин</p>
              <div class="flex items-center">
                <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11L11 5" stroke="#00C6C1" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M6 4L12 4L12 10" stroke="#00C6C1" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>



                <p class="no-margin text-body2 text-avenir-450">{{$auth.user.total_summ}} ₽</p>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6">
             <div class="bg-grey-2 q-pa-md">
              <p  class="no-margin text-caption text-avenir-400 ">Доступная прибыль для снятия</p>
              <div class="flex items-center">
                <svg class="q-mr-sm" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3008 9.33398H11.3674" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.66667 5.33268H14V12.666C14 12.8428 13.9298 13.0124 13.8047 13.1374C13.6797 13.2624 13.5101 13.3327 13.3333 13.3327H2.66667C2.48986 13.3327 2.32029 13.2624 2.19526 13.1374C2.07024 13.0124 2 12.8428 2 12.666V3.99935C2 3.64573 2.14048 3.30659 2.39052 3.05654C2.64057 2.80649 2.97971 2.66602 3.33333 2.66602H12.6667V5.33268" stroke="#2A2B33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>



                <p class="no-margin text-body2 text-positive text-avenir-450">{{$auth.user.pay_summ}} ₽</p>
              </div>


            </div>
          </div>

        </div>

<!--        <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Общая сумма ваших картин: </p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">{{$auth.user.total_summ}} </span> </p>-->
<!--        </div>-->
<!--        <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Средства прибыли для вывода:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">0 </span> </p>-->
<!--        </div>-->
<!--        <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Ближайшая дата выплат:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>-->
<!--        </div>-->
<!--        <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Сумма ближайшей выплаты:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>-->
<!--        </div>-->


<!--        <q-separator spaced="lg"/>-->
             <div class="flex items-center justify-between">
                  <router-link class="link text-body2 text-avenir-450" to="/lk/orders" >Показать историю продаж</router-link>
                <q-btn unelevated
                 @click="withdrawal_request"
                        rounded outline size="16px"  no-caps  class="q-px-lg" label="Вывести прибыль"/>
             </div>

        <!--        <div class="flex items-center justify-around profile-buttons">-->
        <!--          <q-btn unelevated to="/lk/orders"  rounded color="dark" text-color="white" no-caps class="q-px-md q-mb-md q-mb-md-none" label="Детали моих картин"/>-->
        <!--          <q-btn unelevated rounded outline class="q-px-md" no-caps label="Вывести средства"/>-->
        <!--        </div>-->

      </div>






    </div>

  </q-page>

</template>

<script>

import {mapGetters} from "vuex";

export default {

  data(){
    return{

    }
  },
  computed:{
    ...mapGetters('data',['orders']),

  },
  methods:{
    async withdrawal_request(){
      await  this.$api.post('/api/user/withdrawal_request')
      this.$q.notify({
          message: 'Запрос на вывод отправлен',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
    }
  }
}
</script>
<style lang="sass" scoped>
.profile-wrapper
  display: grid
  grid-template-columns: 45% 55%
  grid-gap: 20px
.grid
  display: grid
  grid-template-columns: 2fr 1fr
@media (max-width: 768px)
  .profile-wrapper
    grid-template-columns: 1fr
  .profile-buttons
    & .q-btn
      width: 100%

</style>
