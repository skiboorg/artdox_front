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
      <div class="lk-card">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Доходность</p>
        </div>
        <div class="row q-col-gutter-sm q-mb-lg">
          <div class="col-12 col-md-4 ">
            <div class="bg-grey-2 q-pa-md">
              <div class="flex  q-mb-md">
                <svg class="q-mr-md" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#2A2B33"/>
                  <path d="M22.6667 12H13.3333C12.597 12 12 12.597 12 13.3333V22.6667C12 23.403 12.597 24 13.3333 24H22.6667C23.403 24 24 23.403 24 22.6667V13.3333C24 12.597 23.403 12 22.6667 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.666 16.667C16.2183 16.667 16.666 16.2193 16.666 15.667C16.666 15.1147 16.2183 14.667 15.666 14.667C15.1137 14.667 14.666 15.1147 14.666 15.667C14.666 16.2193 15.1137 16.667 15.666 16.667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.0007 20.0003L20.6673 16.667L13.334 24.0003" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style="line-height: 100%" class="no-margin text-body2 text-avenir-450 ">Общее число<br>картин</p>
              </div>
              <p class="no-margin text-center text-h5 text-avenir-600">{{$auth.user.total_amount}}</p>

            </div>

          </div>
          <div class="col-12 col-md-4">
            <div class="bg-grey-2 q-pa-md">
              <div class="flex  q-mb-md">
                <svg class="q-mr-md" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#2A2B33"/>
                  <path d="M18.0007 11.333L11.334 14.6663L18.0007 17.9997L24.6673 14.6663L18.0007 11.333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.334 21.333L18.0007 24.6663L24.6673 21.333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.334 18L18.0007 21.3333L24.6673 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p style="line-height: 100%" class="no-margin text-body2 text-avenir-450 ">Картины<br>на хранении:</p>
              </div>
              <p class="no-margin text-center text-h5 text-avenir-600 text-grey-5">{{$auth.user.total_amount}}</p>

            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="bg-grey-2 q-pa-md">
              <div class="flex  q-mb-md">
                <svg class="q-mr-md" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#2A2B33"/>

                  <path d="M18 10.667V25.3337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.3333 13.333H16.3333C15.7145 13.333 15.121 13.5788 14.6834 14.0164C14.2458 14.454 14 15.0475 14 15.6663C14 16.2852 14.2458 16.8787 14.6834 17.3163C15.121 17.7538 15.7145 17.9997 16.3333 17.9997H19.6667C20.2855 17.9997 20.879 18.2455 21.3166 18.6831C21.7542 19.1207 22 19.7142 22 20.333C22 20.9518 21.7542 21.5453 21.3166 21.9829C20.879 22.4205 20.2855 22.6663 19.6667 22.6663H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>


                </svg>

                <p style="line-height: 100%" class="no-margin text-body2 text-avenir-450 ">Картины на<br>закладе:</p>
              </div>
              <p class="no-margin text-center text-h5 text-avenir-600 text-red-3">{{$auth.user.total_amount}}</p>

            </div>
          </div>
        </div>


        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Общая сумма ваших картин: </p>
          <p class="no-margin text-body2"><span class="text-grey-6">{{$auth.user.total_summ}} </span> </p>
        </div>
        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Средства прибыли для вывода:</p>
          <p class="no-margin text-body2"><span class="text-grey-6">0 </span> </p>
        </div>
        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Ближайшая дата выплат:</p>
          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>
        </div>
        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Сумма ближайшей выплаты:</p>
          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>
        </div>


        <q-separator spaced="lg"/>
        <router-link class="link text-body2 text-avenir-450" to="/lk/orders" >Показать историю продаж</router-link>
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
