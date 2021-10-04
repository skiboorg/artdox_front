<template>
  <q-page >
     <div class="lk-card">
        <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Настройки</p>
        </div>
       <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-6">
          <p>ФИО</p>
          <q-input class="q-mb-lg" v-model="userData.fio" borderless bg-color="grey-3"/>
          <p>Телефон</p>
          <q-input class="q-mb-lg" v-model="userData.phone" borderless bg-color="grey-3"/>
          <div class="q-gutter-md">
            <q-btn label="Сохранить" color="dark" rounded no-caps/>
            <q-btn label="Сменить аватар"  outline rounded no-caps/>
          </div>
        </div>
        <div class="col-12 col-md-6">
         <p>Почта</p>
          <q-input v-model="userData.email" borderless bg-color="grey-3"/>
        </div>
      </div>
       <div class="lk-card-title">
          <p class="no-margin text-fs18 text-avenir-600">Безопасность</p>
        </div>
        <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <p>Новый пароль</p>
          <q-input class="q-mb-lg" v-model="userData.password" borderless bg-color="grey-3"/>

          <div class="q-gutter-md">
            <q-btn label="Применить" color="dark" rounded no-caps/>

          </div>
        </div>
        <div class="col-12 col-md-6">
         <p>Повторить пароль</p>
          <q-input v-model="userData.password1" borderless bg-color="grey-3"/>
        </div>
      </div>

     </div>




  </q-page>

</template>

<script>

export default {

  data(){
    return{
      userData:{
        fio:this.$auth.user.fio,
        email:this.$auth.user.email,
        phone:this.$auth.user.phone,
        password:null,
        password1:null,
      }
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
