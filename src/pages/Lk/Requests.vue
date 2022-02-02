<template>
  <q-page >
    <q-no-ssr>
      <div class="lk-card h-50 q-mb-md">
      <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Мои запросы</p>
      </div>

      <div class="transaction-row q-mb-lg">
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Тип</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Дата</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">Сумма</p>
        <p class="no-margin text-avenir-450 text-body2 text-uppercase text-grey-6">СТАТУС</p>
      </div>

      <div class="transaction-list">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 20vh; max-width: 100%"
        >
          <div class="transaction-row item" v-for="item in $auth.user.return_requests" :key="item.id">
            <p class="no-margin text-avenir-450 text-body2  " >Возврат</p>
            <p class="no-margin text-avenir-450 text-body2  ">{{ new Date(item.created_at).toLocaleDateString() }}</p>

            <p class="no-margin text-body2  text-avenir-450 ">{{ item.item.price }} ₽</p>
            <p class="no-margin text-body2 text-avenir-450 " :class="[!item.is_done ? 'text-warning' : 'text-positive']">
              {{!item.is_done ? 'В ОБРАБОТКЕ' : 'ВЫПОЛНЕН'}} </p>

          </div>
          <div class="transaction-row item" v-for="item in $auth.user.store_requests" :key="item.id">
            <p class="no-margin text-avenir-450 text-body2  " >Заклад</p>
            <p class="no-margin text-avenir-450 text-body2  ">{{ new Date(item.created_at).toLocaleDateString() }}</p>

            <p class="no-margin text-body2  text-avenir-450 ">{{ item.item.price }} ₽</p>
            <p class="no-margin text-body2 text-avenir-450 " :class="[!item.is_done ? 'text-warning' : 'text-positive']">
              {{!item.is_done ? 'В ОБРАБОТКЕ' : 'ВЫПОЛНЕН'}} </p>

          </div>
          <div class="transaction-row item" v-for="item in $auth.user.withdrawal_requests" :key="item.id">
            <p class="no-margin text-avenir-450 text-body2  " >Вывод</p>
            <p class="no-margin text-avenir-450 text-body2  ">{{ new Date(item.created_at).toLocaleDateString() }}</p>

            <p class="no-margin text-body2  text-avenir-450 ">{{ item.amount }} ₽</p>
            <p class="no-margin text-body2 text-avenir-450 " :class="[!item.is_done ? 'text-warning' : 'text-positive']">
              {{!item.is_done ? 'В ОБРАБОТКЕ' : 'ВЫПОЛНЕН'}} </p>

          </div>
        </q-scroll-area>
      </div>
    </div>
    </q-no-ssr>

     <div class="lk-card ">
      <div class="lk-card-title">
        <p class="no-margin text-fs18 text-avenir-600">Обратная связь</p>
      </div>
       <p class="text-grey-7 text-body2">Мы ответим вам в течении 24 часов на почту данного аккаунта. Вы так же можете связаться с нами другими способами в разделе “Контакты”.</p>
            <div style="max-width: 500px; width: 100%">
               <p class="text-grey-7 text-body2">Тема</p>
            <q-input class="q-mb-md " v-model="subject" borderless  bg-color="grey-3" />

            <p class="text-grey-7 text-body2">Сообщение</p>
            <q-input class="q-mb-xl"  v-model="text" type="textarea" borderless bg-color="grey-3" />

              <q-btn :loading="is_loading" unelevated color="dark"
                     :disable="!text || !subject"
                     label="Отправить" @click="send" no-caps rounded size="18px" class="q-px-xl"/>

            </div>



    </div>

  </q-page>

</template>

<script>

export default {

  data(){
    return{
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#D2D1D5',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#c9c9c9',
        width: '9px',
        opacity: 0.2
      },
      is_loading:false,
      subject:'',
      text:'',

    }
  },
  methods:{
    async send(){
      this.is_loading = !this.is_loading
      let formData = new FormData()
      formData.set('subject',this.subject)
      formData.set('text',this.text)
      formData.set('email',this.$auth.user.email)
      formData.set('user_id',this.$auth.user.id)

      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/user/c_form',
        data: formData
      })
      this.$q.notify({
        message: 'Форма отправлена',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      this.subject=''
      this.text=''
      this.file=null
      this.is_loading = !this.is_loading
    }
  }
}
</script>
<style lang="sass" scoped>
.h-50
  height: 40vh
.transaction
  &-row
    display: grid
    grid-template-columns: repeat(4,1fr)
    &.item
      border-bottom: 1px solid #EBEEF1
      margin-bottom: 12px
      padding-bottom: 12px
</style>
