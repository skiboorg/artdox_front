<template>
  <q-page class="page flex column items-start justify-center">
        <div class="auth-container">
          <h3 class="title">Регистрация</h3>
          <q-form @submit="completeRegistration" class="auth-form">
             <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="Ваш E-Mail *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Это обязательное поле',
              val => email_re.test(String(val)) || 'Это не корректный адрес e-mail'
              ]"/><!--    email      -->
            <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.fio"
            label="Ф.И.О. *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле']"
          />
             <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="Пароль *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password2"
            label="Повторите пароль *"

            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле',
             val => val===userRegister.password1 || 'Пароли не совпадают' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
            <div class="flex items-center q-mb-sm">
                <q-checkbox  dense color="dark" class="rounded-borders q-mr-sm" v-model="agree" label="Согласен с " />
            <p class="q-mb-none"><a href="/rules.docx" target="_blank" class="link">пользовательским соглашением</a></p>
            </div>
             <div class="flex items-center">
                <q-checkbox  dense color="dark" class="rounded-borders q-mr-sm" v-model="agree1" label="Согласен с " />
            <p class="q-mb-none"><a href="/policy.docx" target="_blank" class="link">политикой конфидициальности</a></p>
            </div>


            <div class="text-right q-mt-md-lg">
              <q-btn outline unelevated rounded no-caps color="dark" :disable="!agree || !agree1" type="submit" class="q-py-sm q-px-lg" label="Зарегистрироваться "/>
            </div>
          </q-form>
        </div>






  </q-page>
</template>
<script>


export default {

  data () {
    return {
       email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        is_loading:false,
        isPwd:true,
        agree:false,
        agree1:false,
      userRegister:{
        fio:null,
        email:null,
        password1:null,
        password2:null,
      },

    }
  },
  methods:{
    async completeRegistration(){
      this.is_loading = true
      try{
        await this.$api.post('/auth/users/', {
          email:this.userRegister.email,
          fio:this.userRegister.fio,
          password:this.userRegister.password2,
        })
        this.$q.notify({
          message: 'Аккаунт создан, Вы можете войти',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.is_loading=false
        await this.$router.push({name:'login'})
      }catch (e) {
        this.$q.notify({
          message: 'Проверьте введеные данные',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
           color:'red',
          icon: 'announcement'
        })
      }
      this.is_loading = false
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
