<template>
  <q-page class="">
      <div class="profile-wrapper">
        <div class="lk-card">
          <div class="lk-card-title">
            <p class="no-margin text-fs18 text-avenir-600">Мой профиль</p>
          </div>
          <div class="flex items-center">
                    <q-avatar size="125px" class="q-mr-lg">
            <img src="https://cdn.quasar.dev/img/avatar.png" alt="">
          </q-avatar>
            <div class="">
              <p class="q-mb-sm text-body2 text-avenir-450">Chance Passaquindici Arcand</p>
              <p class="q-mb-sm text-caption text-grey-6">chancepassa@gmail.com</p>
              <p class="q-mb-none text-caption text-grey-6">+7 (937) 936-05-00</p>
              <q-separator spaced="md"/>
              <p class="q-mb-sm text-caption text-grey-6 text-avenir-450">Дата регистрации 23.08.2021</p>
            </div>
          </div>
        </div>
        <div class="lk-card">
          <div class="lk-card-title">
            <p class="no-margin text-fs18 text-avenir-600">Доходность</p>
          </div>

               <div class="flex items-center q-mb-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99961 16L15.5996 8.4" stroke="#6FCF97" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M8 8L16 8L16 16" stroke="#6FCF97" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
            <p class="no-margin text-body2">Общая сумма картин: <span class="text-grey-6">123.422 Р (+ 10.000Р)</span> </p>

          </div>
               <p class="q-mb-lg text-body2">Прибыль: 10.000 ₽ <span class="text-grey-6">(за последний месяц)</span> </p>

            <p class="no-margin"><router-link class="link" :to="{name:''}">Показать историю продаж</router-link></p>


        </div>
      </div>

  </q-page>

</template>

<script>

export default {

  data(){
    return{

    }
  }
}
</script>
<style lang="sass" scoped>
.profile-wrapper
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 20px

</style>
