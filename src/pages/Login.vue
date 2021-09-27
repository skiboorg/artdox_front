<template>
  <q-page class="page flex column items-start justify-center">
        <div class="auth-container">
          <h3 class="title">Вход</h3>
          <q-form @submit="userLoginAction" class="auth-form">
            <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userLogin.email"
            label="Ваш E-Mail *"

            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Это обязательное поле']"
          />
          <q-input
            :dense="!$q.screen.gt.md"
            filled
            :type="isPwd ? 'password' : 'text'"
            v-model="userLogin.password"
            label="Пароль *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
            <div class="text-right q-mt-md-lg">
              <q-btn outline unelevated rounded no-caps color="dark" type="submit" class="q-py-sm q-px-lg" label="Войти"/>
            </div>
          </q-form>
        </div>






  </q-page>
</template>
<script>

import { mapActions } from 'vuex'
export default {

  data () {
    return {
      is_loading:false,
      isPwd:true,
      userLogin:{
        email:null,
        password:null,
      },

    }
  },
  methods:{
    ... mapActions('auth',['loginUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)

    },
  }
}
</script>

<style lang="sass" scoped>

</style>
