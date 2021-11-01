<template>
  <q-page class="">

    <div class="profile-wrapper">
      <div class="lk-card">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Мой профиль</p>
        </div>
        <div class="flex items-center">
          <q-avatar size="125px" class="q-mr-lg">
            <img :src="$auth.user.avatar" alt="">
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
        <p class="text-caption text-blue-grey-7"><a style="text-decoration: underline" href="#">Договор - оферта</a> скачать документ в PDF</p>
        <p class="text-caption text-blue-grey-7 q-mb-none"><a style="text-decoration: underline" href="#">Договор на вывод средств</a> скачать документ в PDF</p>
      </div>
      <div class="lk-card">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Доходность</p>
        </div>

        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Число ваших картин:</p>
          <p class="no-margin text-body2"><span class="text-grey-6">{{$auth.user.total_amount}}</span> </p>
        </div>
        <div class="grid items-center q-mb-sm">
          <p class="no-margin text-body2">Общая сумма ваших картин: </p>
          <p class="no-margin text-body2"><span class="text-grey-6">{{$auth.user.total_summ}} </span> </p>
        </div>
<!--        <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Средства прибыли для вывода:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">0 </span> </p>-->
<!--        </div>-->
<!--         <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Ближайшая дата выплат:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>-->
<!--        </div>-->
<!--         <div class="grid items-center q-mb-sm">-->
<!--          <p class="no-margin text-body2">Сумма ближайшей выплаты:</p>-->
<!--          <p class="no-margin text-body2"><span class="text-grey-6">-</span> </p>-->
<!--        </div>-->


<!--        <q-separator spaced="lg"/>-->
<!--        <div class="flex items-center justify-around profile-buttons">-->
<!--          <q-btn to="/lk/orders"  rounded color="dark" text-color="white" no-caps class="q-px-md q-mb-md q-mb-md-none" label="Детали моих картин"/>-->
<!--          <q-btn  rounded outline class="q-px-md" no-caps label="Вывести средства"/>-->
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
  grid-template-columns: 1fr 1fr
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
